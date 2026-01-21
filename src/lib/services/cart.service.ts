import type { Cart, CartItem } from "@/types/cart";

/**
 * CartStorageService - Handles cart data persistence in localStorage
 * Follows Single Responsibility Principle - only manages storage operations
 */
class CartStorageService {
  private readonly STORAGE_KEY = "islamimerci_cart";

  /**
   * Load cart from localStorage
   */
  loadCart(): Cart {
    if (typeof window === "undefined") {
      return this.getEmptyCart();
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        return this.getEmptyCart();
      }

      const cart = JSON.parse(stored) as Cart;
      return this.validateCart(cart);
    } catch {
      // Silent error - return empty cart
      return this.getEmptyCart();
    }
  }

  /**
   * Save cart to localStorage
   */
  saveCart(cart: Cart): void {
    if (typeof window === "undefined") {
      return;
    }

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Silent error - storage might be full or disabled
    }
  }

  /**
   * Clear cart from localStorage
   */
  clearCart(): void {
    if (typeof window === "undefined") {
      return;
    }

    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch {
      // Silent error - storage might be disabled
    }
  }

  /**
   * Get empty cart structure
   */
  private getEmptyCart(): Cart {
    return {
      items: [],
      totalItems: 0,
      updatedAt: Date.now(),
    };
  }

  /**
   * Validate cart structure
   */
  private validateCart(cart: Cart): Cart {
    if (!cart || typeof cart !== "object") {
      return this.getEmptyCart();
    }

    if (!Array.isArray(cart.items)) {
      return this.getEmptyCart();
    }

    return {
      items: cart.items.filter(this.isValidCartItem),
      totalItems: cart.items.length,
      updatedAt: cart.updatedAt || Date.now(),
    };
  }

  /**
   * Validate individual cart item
   */
  private isValidCartItem(item: any): item is CartItem {
    return (
      item &&
      typeof item === "object" &&
      typeof item.id === "string" &&
      typeof item.activitySlug === "string" &&
      typeof item.activityTitle === "string" &&
      typeof item.amount === "number" &&
      typeof item.currency === "string" &&
      typeof item.quantity === "number" &&
      item.quantity > 0
    );
  }
}

/**
 * CartBusinessService - Handles cart business logic
 * Follows Single Responsibility Principle - only manages cart operations
 */
class CartBusinessService {
  /**
   * Add item to cart
   */
  addItem(
    cart: Cart,
    newItem: Omit<CartItem, "id" | "addedAt" | "quantity">,
  ): Cart {
    const existingItemIndex = cart.items.findIndex(
      (item) =>
        item.activitySlug === newItem.activitySlug &&
        item.amount === newItem.amount &&
        item.currency === newItem.currency,
    );

    let updatedItems: CartItem[];

    if (existingItemIndex > -1) {
      // Update existing item quantity
      updatedItems = cart.items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    } else {
      // Add new item
      const cartItem: CartItem = {
        ...newItem,
        id: this.generateId(),
        quantity: 1,
        addedAt: Date.now(),
      };
      updatedItems = [...cart.items, cartItem];
    }

    return {
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      updatedAt: Date.now(),
    };
  }

  /**
   * Remove item from cart
   */
  removeItem(cart: Cart, itemId: string): Cart {
    const updatedItems = cart.items.filter((item) => item.id !== itemId);

    return {
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      updatedAt: Date.now(),
    };
  }

  /**
   * Update item quantity
   */
  updateItemQuantity(cart: Cart, itemId: string, quantity: number): Cart {
    if (quantity <= 0) {
      return this.removeItem(cart, itemId);
    }

    const updatedItems = cart.items.map((item) =>
      item.id === itemId ? { ...item, quantity } : item,
    );

    return {
      items: updatedItems,
      totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      updatedAt: Date.now(),
    };
  }

  /**
   * Clear all items from cart
   */
  clearAll(): Cart {
    return {
      items: [],
      totalItems: 0,
      updatedAt: Date.now(),
    };
  }

  /**
   * Calculate cart total for a specific currency
   */
  calculateTotal(cart: Cart, currency: string): number {
    return cart.items
      .filter((item) => item.currency === currency)
      .reduce((total, item) => total + item.amount * item.quantity, 0);
  }

  /**
   * Check if item is in cart
   */
  isItemInCart(cart: Cart, activitySlug: string, amount: number): boolean {
    return cart.items.some(
      (item) => item.activitySlug === activitySlug && item.amount === amount,
    );
  }

  /**
   * Generate unique ID for cart item
   */
  private generateId(): string {
    return `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Export singleton instances
export const cartStorageService = new CartStorageService();
export const cartBusinessService = new CartBusinessService();
