import { toast } from "sonner";

class NotificationService {
  constructor() {}

  public showSuccess(message: string, description?: string) {
    toast.success(message, {
      description,
      duration: 3000,
    });
  }

  public showError(message: string, description?: string) {
    toast.error(message, {
      description,
      duration: 3000,
    });
  }
}

export const notificationService = new NotificationService();
