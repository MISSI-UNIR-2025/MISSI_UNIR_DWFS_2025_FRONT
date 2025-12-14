import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cart: [],
    modalCartStatus: false,
    addToCart: (book) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === book.id);
        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        return { cart: [...state.cart, { ...book, quantity: 1 }] };
    }),
    removeFromCart: (bookId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== bookId),
    })),
    clearCart: () => set({ cart: [] }),
    openCart: () => set({ modalCartStatus: true }),
    closeCart: () => set({ modalCartStatus: false }),
    increaseQty: (id) =>
        set({
            cart: get().cart.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            ),
        }),

    decreaseQty: (id) =>
        set({
            cart: get().cart.map((i) =>
                i.id === id
                    ? { ...i, quantity: Math.max(1, i.quantity - 1) }
                    : i
            ),
        }),
}));

export default useCartStore;
