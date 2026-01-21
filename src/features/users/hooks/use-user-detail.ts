"use client";

import { UserService } from "@/features/users/services";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { UserDetail } from "./use-users";

export interface UseUserDetailState {
  user: UserDetail | null;
  loading: boolean;
  error: string | null;
}

export interface UseUserDetailActions {
  fetchUserDetail: (userId: string) => Promise<void>;
  clearUserDetail: () => void;
}

export interface UseUserDetailResult {
  state: UseUserDetailState;
  actions: UseUserDetailActions;
}

export const useUserDetail = (): UseUserDetailResult => {
  const [state, setState] = useState<UseUserDetailState>({
    user: null,
    loading: false,
    error: null,
  });
  const { data: session } = useSession();

  const fetchUserDetail = useCallback(async (userId: string) => {
    if (!userId) {
      setState((prev) => ({
        ...prev,
        error: "Kullanıcı ID'si gereklidir",
      }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const { data, error } = await UserService.getUserDetails(
        userId,
        session?.accessToken || ""
      );

      if (error) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: error || "Kullanıcı detayları yüklenirken bir hata oluştu",
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        user: data || null,
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
        console.error("User detail fetch error:", err);
      }
    }
  }, []);

  const clearUserDetail = useCallback(() => {
    setState({
      user: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    state,
    actions: {
      fetchUserDetail,
      clearUserDetail,
    },
  };
};
