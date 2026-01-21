import { FormFieldType } from "@/components/shared/dynamic-form-field";
import type { IFormFieldLocalizationConfig } from "@/types/i18n";

/**
 * SOLID: Single Responsibility Principle
 * Bu hook sadece form field'ları için lokalizasyon konfigürasyonu sağlar
 */
export const useFormFieldI18nConfig = () => {
  // Helper function to create i18n config for common form fields
  const createI18nConfig = (
    fieldType: FormFieldType,
    options: {
      labelKey?: string;
      placeholderKey?: string;
      customLabel?: string;
      customPlaceholder?: string;
    } = {}
  ): IFormFieldLocalizationConfig => ({
    fieldType,
    labelKey: options.labelKey,
    placeholderKey: options.placeholderKey,
    customLabel: options.customLabel,
    customPlaceholder: options.customPlaceholder,
  });

  // Pre-configured common field configs
  const configs = {
    // Auth form fields
    email: createI18nConfig(FormFieldType.INPUT, {
      labelKey: "email",
      customPlaceholder: "E-posta adresinizi giriniz...",
    }),

    password: createI18nConfig(FormFieldType.PASSWORD, {
      labelKey: "password",
      customPlaceholder: "Şifrenizi giriniz...",
    }),

    name: createI18nConfig(FormFieldType.INPUT, {
      labelKey: "name",
      customPlaceholder: "Adınızı ve soyadınızı giriniz...",
    }),

    phone: createI18nConfig(FormFieldType.PHONE, {
      labelKey: "phone",
    }),

    message: createI18nConfig(FormFieldType.TEXTAREA, {
      labelKey: "message",
    }),

    // File upload
    profilePhoto: createI18nConfig(FormFieldType.FILE, {
      labelKey: "uploadFile",
    }),
  };

  return {
    createI18nConfig,
    configs,
  };
};

// Usage example type definitions
export interface FormFieldUsageExample {
  fieldType: FormFieldType;
  name: string;
  i18nConfig?: IFormFieldLocalizationConfig;
  useAutoTranslation?: boolean;
}

/**
 * Usage examples for different scenarios
 */
export const formFieldExamples: FormFieldUsageExample[] = [
  // Scenario 1: Automatic translation with predefined config
  {
    fieldType: FormFieldType.INPUT,
    name: "email",
    useAutoTranslation: true,
  },

  // Scenario 2: Custom i18n config
  {
    fieldType: FormFieldType.TEXTAREA,
    name: "description",
    i18nConfig: {
      fieldType: FormFieldType.TEXTAREA,
      labelKey: "description",
      customPlaceholder: "Açıklama yazınız...",
    },
    useAutoTranslation: true,
  },

  // Scenario 3: No automatic translation (manual control)
  {
    fieldType: FormFieldType.PASSWORD,
    name: "password",
    useAutoTranslation: false,
  },
];
