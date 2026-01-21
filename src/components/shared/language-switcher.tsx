"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import { setZodLocale } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function onSelectChange(value: string) {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  }

  useEffect(() => {
    if (locale) {
      setZodLocale(locale);
    }
  }, [locale]);

  const getLanguageName = (loc: string) => {
    switch (loc) {
      case "tr":
        return "Türkçe";
      case "en":
        return "English";
      case "ar":
        return "العربية";
      default:
        return loc;
    }
  };

  return (
    <div className="flex items-center">
      <Select
        value={locale}
        onValueChange={onSelectChange}
        open={isSelectOpen}
        onOpenChange={setIsSelectOpen}
        disabled={isPending}
      >
        <SelectTrigger className="flex items-center">
          <Globe className="h-4 w-4 opacity-70" />
          <SelectValue>{getLanguageName(locale)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {getLanguageName(loc)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
