import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/providers/CurrencyProvider";

interface CurrencySelectorProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  placeholder?: string;
  showLabel?: boolean;
  useGlobalState?: boolean; // Yeni prop: global state kullanılsın mı
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  value,
  onValueChange,
  disabled = false,
  className,
  useGlobalState = false, // Varsayılan olarak false
}) => {
  const { currency, setCurrency, getCurrencySymbol } = useCurrency();

  // Global state kullanılacaksa provider'dan değerleri al
  const currentValue = useGlobalState ? currency : value || "TRY";
  const handleValueChange = useGlobalState
    ? (newValue: string) => setCurrency(newValue as any)
    : onValueChange || (() => {}); // Fallback empty function

  const currencyOptions = [
    {
      value: "TRY",
      label: getCurrencySymbol("TRY"),
    },
    {
      value: "USD",
      label: getCurrencySymbol("USD"),
    },
    {
      value: "EUR",
      label: getCurrencySymbol("EUR"),
    },
  ];

  return (
    <div className={cn("space-y-2", className)}>
      <Select
        value={currentValue}
        onValueChange={handleValueChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencyOptions.map((currency) => (
            <SelectItem key={currency.value} value={currency.value}>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">{currency.label}</span>
                <span className="text-xs text-gray-400">
                  ({currency.value})
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CurrencySelector;
