import { create } from 'zustand';

const useCartStore = create((set) => ({
    cart: [],
    modalCartStatus:false,
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
    openCart: () => {console.log('here'), set({ modalCartStatus:true })},
    closeCart: () => set({ modalCartStatus:false }),
}));

export default useCartStore;
