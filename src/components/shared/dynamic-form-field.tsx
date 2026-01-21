import type { Control, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PhoneInput } from "../ui/phone-input";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { UploadDropzone } from "@/lib/uploadthing";

// Lokalizasyon için SOLID prensiplerine uygun imports
import { useFormFieldTranslations } from "@/lib/i18n/form-field-translations";
import { FormFieldConfigFactory } from "@/lib/i18n/form-field-config";
import type { IFormFieldLocalizationConfig } from "@/types/i18n";

export enum FormFieldType {
  INPUT = "input",
  PASSWORD = "password",
  NUMBER = "number",
  TEXTAREA = "textarea",
  PHONE = "phone",
  CHECKBOX = "checkbox",
  SWITCH = "switch",
  SELECT = "select",
  DATE = "date",
  SKELETON = "skeleton",
  FILE = "file",
}

export type CustomProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: React.ReactNode;
  placeholder?: string;
  icon?: React.ReactNode;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  max?: number;
  min?: number;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
  renderSkeleton?: (field: FieldValues) => React.ReactNode;
  fieldType: FormFieldType;
  className?: string;
  options?: Array<{ value: string; label: string }>;
  fileOptions?: unknown;
  description?: string;
  id?: string;
  "aria-describedby"?: string;
  i18nConfig?: IFormFieldLocalizationConfig;
  useAutoTranslation?: boolean;
  multiple?: boolean;
};

const RenderInput = <T extends FieldValues>({
  field,
  props,
}: {
  field: FieldValues;
  props: CustomProps<T>;
}) => {
  const translations = useFormFieldTranslations();

  const fieldConfig = FormFieldConfigFactory.create(
    props.fieldType,
    props.i18nConfig || { fieldType: props.fieldType }
  );

  const getEffectivePlaceholder = (): string => {
    if (props.placeholder) return props.placeholder;
    if (props.useAutoTranslation !== false) {
      return fieldConfig.getPlaceholder(translations);
    }
    return "";
  };

  const effectivePlaceholder = getEffectivePlaceholder();
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            placeholder={effectivePlaceholder}
            {...field}
            disabled={props.disabled}
            className={cn(props.className)}
            id={props.id}
            aria-describedby={props["aria-describedby"]}
          />
        </FormControl>
      );
    case FormFieldType.PASSWORD:
      return (
        <FormControl>
          <Input
            type="password"
            placeholder={effectivePlaceholder}
            {...field}
            disabled={props.disabled}
            className={cn(props.className)}
            id={props.id}
            aria-describedby={props["aria-describedby"]}
          />
        </FormControl>
      );
    case FormFieldType.NUMBER:
      return (
        <FormControl>
          <Input
            type="number"
            max={props.max}
            min={props.min}
            placeholder={effectivePlaceholder}
            {...field}
            disabled={props.disabled}
            className={cn(props.className)}
            id={props.id}
            aria-describedby={props["aria-describedby"]}
          />
        </FormControl>
      );
    case FormFieldType.PHONE:
      return (
        <FormControl>
          <PhoneInput
            placeholder={effectivePlaceholder}
            defaultCountry="TR"
            {...field}
            disabled={props.disabled}
            className={cn(props.className)}
            id={props.id}
            aria-describedby={props["aria-describedby"]}
          />
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={effectivePlaceholder}
            {...field}
            disabled={props.disabled}
            className={cn(props.className)}
            id={props.id}
            aria-describedby={props["aria-describedby"]}
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={props.disabled}
              className={cn(props.className)}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            onValueChange={(value: string) => {
              field.onChange(value);
              if (props.onValueChange) props.onValueChange(value);
            }}
            defaultValue={field.value?.toString()}
            disabled={props.disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  placeholder={effectivePlaceholder}
                  defaultValue={field?.value}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{props.children}</SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    case FormFieldType.SWITCH:
      return (
        <FormControl>
          <Switch
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={props.disabled}
            className={cn(props.className)}
          />
        </FormControl>
      );
    case FormFieldType.FILE:
      return (
        <FormControl>
          <UploadDropzone
            endpoint={"imageUploader"}
            className="border-dashed border-2 p-4 rounded-lg"
            onClientUploadComplete={(res) => {
              if (res && res.length > 0) {
                if (props.multiple !== false) {
                  // Çoklu dosya modu (varsayılan)
                  const currentUrls = Array.isArray(field.value)
                    ? field.value
                    : field.value
                    ? [field.value]
                    : [];
                  const newUrls = [
                    ...currentUrls,
                    ...res.map((file) => file.url),
                  ];
                  field.onChange(newUrls);
                } else {
                  // Tekli dosya modu
                  field.onChange(res[0].url);
                }
              }
            }}
          />
        </FormControl>
      );
    default:
      return null;
  }
};

const DynamicFormField = <T extends FieldValues>(props: CustomProps<T>) => {
  const { control, name, label, id, description } = props;

  const translations = useFormFieldTranslations();

  const fieldConfig = FormFieldConfigFactory.create(
    props.fieldType,
    props.i18nConfig || { fieldType: props.fieldType }
  );

  const getEffectiveLabel = (): React.ReactNode => {
    if (label) return label;
    if (props.useAutoTranslation !== false && props.i18nConfig?.labelKey) {
      return fieldConfig.getLabel(translations);
    }
    return null;
  };

  const descriptionId =
    props["aria-describedby"] ||
    (id && description ? `${id}-description` : undefined);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {props.fieldType !== FormFieldType.CHECKBOX &&
            getEffectiveLabel() && (
              <FormLabel className="block" htmlFor={id}>
                {getEffectiveLabel()}
              </FormLabel>
            )}
          <RenderInput
            field={field}
            props={{ ...props, "aria-describedby": descriptionId }}
          />

          {props.description && (
            <FormDescription id={descriptionId}>
              {props.description}
            </FormDescription>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DynamicFormField;
