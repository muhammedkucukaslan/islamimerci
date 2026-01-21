import type { IFormFieldLocalizationConfig } from "@/types/i18n";
import { FormFieldType } from "@/components/shared/dynamic-form-field";

// Open/Closed Principle: Extension'a açık, modification'a kapalı
export abstract class FormFieldConfigBase {
  constructor(
    public readonly fieldType: FormFieldType,
    protected config: IFormFieldLocalizationConfig
  ) {}

  abstract getPlaceholder(defaultTranslations: any): string;
  abstract getLabel(defaultTranslations: any): string;

  protected getConfigValue<T>(
    key: keyof IFormFieldLocalizationConfig,
    fallback: T
  ): T {
    return (this.config[key] as T) || fallback;
  }
}

// Concrete implementations - Her field type için ayrı sınıf
export class InputFieldConfig extends FormFieldConfigBase {
  getPlaceholder(translations: any): string {
    return (
      this.getConfigValue("customPlaceholder", null) ||
      translations.getPlaceholder(this.fieldType)
    );
  }

  getLabel(translations: any): string {
    const labelKey = this.getConfigValue("labelKey", "");
    return (
      this.getConfigValue("customLabel", null) ||
      (labelKey ? translations.getLabel(labelKey) : "")
    );
  }
}

export class TextareaFieldConfig extends FormFieldConfigBase {
  getPlaceholder(translations: any): string {
    return (
      this.getConfigValue("customPlaceholder", null) ||
      translations.getPlaceholder(this.fieldType)
    );
  }

  getLabel(translations: any): string {
    const labelKey = this.getConfigValue("labelKey", "");
    return (
      this.getConfigValue("customLabel", null) ||
      (labelKey ? translations.getLabel(labelKey) : "")
    );
  }
}

export class FileFieldConfig extends FormFieldConfigBase {
  getPlaceholder(translations: any): string {
    return (
      this.getConfigValue("customPlaceholder", null) ||
      translations.getPlaceholder(this.fieldType)
    );
  }

  getLabel(translations: any): string {
    const labelKey = this.getConfigValue("labelKey", "uploadFile");
    return (
      this.getConfigValue("customLabel", null) ||
      translations.getLabel(labelKey)
    );
  }

  getUploadLabel(translations: any): string {
    return translations.getLabel("selectOrDragFile");
  }

  getFileTypeLabel(translations: any): string {
    return translations.getLabel("imageFiles");
  }
}

// Factory Pattern
export class FormFieldConfigFactory {
  static create(
    fieldType: FormFieldType,
    config: IFormFieldLocalizationConfig = { fieldType }
  ): FormFieldConfigBase {
    switch (fieldType) {
      case FormFieldType.INPUT:
      case FormFieldType.PASSWORD:
      case FormFieldType.NUMBER:
      case FormFieldType.PHONE:
        return new InputFieldConfig(fieldType, config);

      case FormFieldType.TEXTAREA:
        return new TextareaFieldConfig(fieldType, config);

      case FormFieldType.FILE:
        return new FileFieldConfig(fieldType, config);

      default:
        return new InputFieldConfig(fieldType, config);
    }
  }
}
