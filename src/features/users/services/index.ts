import { fetcher } from "@/lib/fetcher";
import { userDetailResponseSchema, userResponseSchema } from "../schemas";

export interface UsersPaginationParams {
  page?: number;
  limit?: number;
}

export class UserService {
  static async getUsers(token: string, params?: UsersPaginationParams) {
    const { page = 1, limit = 10 } = params || {};

    const { data, error } = await fetcher("/admin/users", {
      method: "GET",
      json: false,
      locale: "tr",
      token,
      schema: userResponseSchema,
      headers: {
        page: page.toString(),
        limit: limit.toString(),
      },
    });

    return { data, error };
  }

  static async getUserDetails(userId: string, token: string) {
    const { data, error } = await fetcher(`/admin/users/${userId}`, {
      method: "GET",
      json: false,
      locale: "tr",
      token,
      schema: userDetailResponseSchema,
    });

    return { data, error };
  }
}
