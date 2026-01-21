"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { fetcher } from "@/lib/fetcher";
import { useSession } from "next-auth/react";

export interface EmailVerificationState {
  status: "idle" | "verifying" | "success" | "error" | "expired";
  message: string | null;
  error: string | null;
}

export interface EmailVerificationResult {
  state: EmailVerificationState;
  verify: (token: string) => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  reset: () => void;
}

export const useEmailVerification = ({
  locale,
}: {
  locale: string;
}): EmailVerificationResult => {
  const router = useRouter();
  const t = useTranslations("emailVerification");
  const [state, setState] = useState<EmailVerificationState>({
    status: "idle",
    message: null,
    error: null,
  });
  const { data: session } = useSession();

  const verify = useCallback(
    async (token: string) => {
      if (!token) {
        setState({
          status: "error",
          message: null,
          error: t("messages.tokenNotFound"),
        });
        return;
      }

      setState({
        status: "verifying",
        message: t("messages.verifying"),
        error: null,
      });

      try {
        const { error, status } = await fetcher("/users/verify-email", {
          method: "POST",
          body: { token },
          token: session?.accessToken,
          json: true,
          locale,
        });

        if (status === 204) {
          setState({
            status: "success",
            message: t("messages.success"),
            error: null,
          });

          // Redirect to login after success
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } else {
          // Handle different error types
          const errorMessage = error || t("messages.verificationFailed");
          const status = "error";

          setState({
            status,
            message: null,
            error: errorMessage,
          });
        }
      } catch (error) {
        setState({
          status: "error",
          message: null,
          error: t("messages.generalError"),
        });

        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.error("Email verification error:", error);
        }
      }
    },
    [router, t, locale]
  );

  const resendVerification = useCallback(
    async (email: string) => {
      setState({
        status: "verifying",
        message: t("messages.resending"),
        error: null,
      });

      try {
        const { error, status } = await fetcher(
          "/users/send-verification-email",
          {
            method: "POST",
            body: { email },
            token: session?.accessToken,
            json: true,
            locale,
          }
        );

        if (status === 204) {
          setState({
            status: "idle",
            message: t("messages.resendSuccess"),
            error: null,
          });
        } else {
          setState({
            status: "error",
            message: null,
            error: error || t("messages.resendFailed"),
          });
        }
      } catch (error) {
        setState({
          status: "error",
          message: null,
          error: t("messages.generalError"),
        });

        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.error("Resend verification error:", error);
        }
      }
    },
    [t]
  );

  const reset = useCallback(() => {
    setState({
      status: "idle",
      message: null,
      error: null,
    });
  }, []);

  return {
    state,
    verify,
    resendVerification,
    reset,
  };
};
