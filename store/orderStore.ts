import { create } from 'zustand'

type State = {
    quantity: number
}

type Action = {
    increaseQty: () => void
    decreaseQty: () => void
}

export const useQuantity = create<State & Action>((set) => ({
    quantity: 1,
    increaseQty: () => set((state) => ({ quantity: state.quantity + 1 })),
    decreaseQty: () => set((state) => ({ quantity: state.quantity - 1 })),

}))