import { useTranslations } from "next-intl";

export const useErrorMessage = () => {
  const t = useTranslations();

  const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      if ("status" in error) {
        const status = (error as { status: number }).status;
        if (status === 401) return t("errors.unauthorized");
        if (status === 403) return t("errors.forbidden");
        if (status === 500) return t("errors.server");
      }

      if (error.message.includes("Network")) return t("errors.network");

      if ("message" in error && typeof error.message === "string") {
        const key = error.message as Error["message"];
        return t(key);
      }

      return error.message;
    }

    return t("errors.unknown");
  };

  return { getErrorMessage };
};
