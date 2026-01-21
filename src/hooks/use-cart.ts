import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";

/**
 * useCart hook - Provides access to cart context
 * Follows Interface Segregation Principle - provides focused interface
 */
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
