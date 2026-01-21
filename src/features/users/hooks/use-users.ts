"use client";

import { useState, useCallback, useEffect } from "react";
import { UserService, UsersPaginationParams } from "@/features/users/services";
import { z } from "zod";
import {
  userResponseSchema,
  userDetailResponseSchema,
} from "@/features/users/schemas";
import { useSession } from "next-auth/react";

export type User = z.infer<typeof userResponseSchema>[0];
export type UserDetail = z.infer<typeof userDetailResponseSchema>;

export interface UseUsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  currentPage: number;
  totalPages: number;
  limit: number;
}

export interface UseUsersActions {
  fetchUsers: (params?: UsersPaginationParams) => Promise<void>;
  refreshUsers: () => Promise<void>;
  goToPage: (page: number) => Promise<void>;
  setLimit: (limit: number) => Promise<void>;
  searchUsers: (term: string) => User[];
  filterUsers: (filters: UserFilters) => User[];
}

export interface UserFilters {
  role?: string;
  status?: string;
  searchTerm?: string;
}

export interface UseUsersResult {
  state: UseUsersState;
  actions: UseUsersActions;
}

export const useUsers = (): UseUsersResult => {
  const [state, setState] = useState<UseUsersState>({
    users: [],
    loading: false,
    error: null,
    totalCount: 0,
    currentPage: 1,
    totalPages: 1,
    limit: 10,
  });
  const { data: session } = useSession();

  const fetchUsers = useCallback(
    async (params?: UsersPaginationParams) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const { page = state.currentPage, limit = state.limit } = params || {};

      try {
        const { data, error } = await UserService.getUsers(
          session?.accessToken || "",
          { page, limit }
        );

        if (error) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: error || "Kullanıcılar yüklenirken bir hata oluştu",
          }));
          return;
        }

        // Calculate total pages (API should provide this in response headers)
        // For now, we'll estimate based on received data
        const totalPages = Math.max(1, Math.ceil((data?.length || 0) / limit));

        setState((prev) => ({
          ...prev,
          users: data || [],
          totalCount: data?.length || 0,
          currentPage: page,
          totalPages,
          limit,
          loading: false,
          error: null,
        }));
      } catch (err) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: "Beklenmeyen bir hata oluştu",
        }));

        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.error("User fetch error:", err);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [session?.accessToken]
  );

  const refreshUsers = useCallback(async () => {
    await fetchUsers({ page: state.currentPage, limit: state.limit });
  }, [fetchUsers, state.currentPage, state.limit]);

  const goToPage = useCallback(
    async (page: number) => {
      await fetchUsers({ page, limit: state.limit });
    },
    [fetchUsers, state.limit]
  );

  const setLimit = useCallback(
    async (limit: number) => {
      await fetchUsers({ page: 1, limit }); // Reset to first page when changing limit
    },
    [fetchUsers]
  );

  const searchUsers = useCallback(
    (term: string): User[] => {
      if (!term.trim()) return state.users;

      const lowercaseTerm = term.toLowerCase().trim();
      return state.users.filter(
        (user) =>
          user.full_name.toLowerCase().includes(lowercaseTerm) ||
          user.email.toLowerCase().includes(lowercaseTerm) ||
          user.id.toLowerCase().includes(lowercaseTerm)
      );
    },
    [state.users]
  );

  const filterUsers = useCallback(
    (filters: UserFilters): User[] => {
      let filteredUsers = state.users;

      // Search filter
      if (filters.searchTerm) {
        filteredUsers = searchUsers(filters.searchTerm);
      }

      // Role filter - Note: Schema doesn't include role, so we'll skip this for now
      // Status filter - Note: Schema doesn't include status, so we'll skip this for now

      return filteredUsers;
    },
    [state.users, searchUsers]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    state,
    actions: {
      fetchUsers,
      refreshUsers,
      goToPage,
      setLimit,
      searchUsers,
      filterUsers,
    },
  };
};
