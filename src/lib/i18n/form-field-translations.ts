import { useTranslations } from "next-intl";
import type {
  IFormFieldTranslations,
  IFormFieldProvider,
  ILocalizationService,
} from "@/types/i18n";
import { FormFieldType } from "@/components/shared/dynamic-form-field";

// Single Responsibility: Sadece çeviri metinlerini yönetir
class FormFieldTranslations implements IFormFieldTranslations {
  constructor(private localizationService: ILocalizationService) {}

  getPlaceholder(fieldType: string): string {
    const placeholderMap: Record<string, string> = {
      [FormFieldType.INPUT]: "form.fields.placeholders.input",
      [FormFieldType.PASSWORD]: "form.fields.placeholders.password",
      [FormFieldType.NUMBER]: "form.fields.placeholders.number",
      [FormFieldType.PHONE]: "form.fields.placeholders.phone",
      [FormFieldType.TEXTAREA]: "form.fields.placeholders.textarea",
      [FormFieldType.SELECT]: "form.fields.placeholders.select",
      [FormFieldType.FILE]: "form.fields.placeholders.file",
    };

    return this.localizationService.t(
      placeholderMap[fieldType] || "form.fields.placeholders.input"
    );
  }

  getLabel(key: string): string {
    return this.localizationService.t(`form.fields.labels.${key}`);
  }

  getValidationMessage(rule: string, params?: Record<string, any>): string {
    const message = this.localizationService.t(
      `form.fields.validation.${rule}`
    );

    if (params) {
      return this.localizationService.formatMessage(message, params);
    }

    return message;
  }
}

// Single Responsibility: Sadece next-intl adaptasyonu
class NextIntlLocalizationService implements ILocalizationService {
  constructor(private translate: (key: string) => string) {}

  t(key: string): string {
    return this.translate(key);
  }

  formatMessage(template: string, params: Record<string, any>): string {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return params[key]?.toString() || match;
    });
  }
}

// Factory Pattern ile Dependency Injection
export class FormFieldLocalizationProvider implements IFormFieldProvider {
  private translations: IFormFieldTranslations;

  constructor(localizationService: ILocalizationService) {
    this.translations = new FormFieldTranslations(localizationService);
  }

  getTranslations(): IFormFieldTranslations {
    return this.translations;
  }
}

// Hook factory - Dependency Inversion Principle
export function useFormFieldTranslations(): IFormFieldTranslations {
  const t = useTranslations();

  const localizationService = new NextIntlLocalizationService(t);
  const provider = new FormFieldLocalizationProvider(localizationService);

  return provider.getTranslations();
}
