import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { StateCreator } from "zustand";
import { CartItemType } from '@/types/types';
import { addToCartDB, removeDBCartItem, updateDBItemQty } from '@/lib/fetchData';



interface UpdateQuantity {
    status: boolean;
    itemId: string;
    quantity?: number;
    type: 'INCREMENT' | 'DECREMENT' | 'QUANTITY'
}

interface AddToCart {
    status: boolean,
    newItem: CartItemType
}

interface IRemoveCartItem {
    status: boolean,
    itemId: string
}


interface CartState {
    cartItems: CartItemType[];
    isLoading: boolean;

    addToCart: ({ status, newItem }: AddToCart) => Promise<void>;
    removeCartItem: ({ status, itemId }: IRemoveCartItem) => Promise<void>;
    updateQuantity: ({ status, itemId, quantity, type }: UpdateQuantity) => Promise<void>;
    clearCart: (userId?: string | null) => void;
    // mergeCartWithDb: () => Promise<void>;
}



const store: StateCreator<CartState> = (set, get) => ({
    cartItems: [],
    isLoading: false,


    addToCart: async ({ status, newItem }) => {
        const currentItems = get().cartItems;

        const existingItem = currentItems.find(item => item._id === newItem._id);

        const updatedItems = existingItem ?
            currentItems.map(item => item._id === newItem._id ?
                { ...item, quantity: item.quantity + 1 }
                :
                item
            )
            :
            [...currentItems, newItem];

        set({ cartItems: updatedItems })


        // db update 
        if (status) {
            try {
                await addToCartDB({ product: String(newItem._id), })
            } catch (error) {
                console.error(error);
            }
        }
    },
    removeCartItem: async ({ status, itemId }) => {
        set(state => (
            {
                cartItems: state.cartItems.filter(item => item._id !== itemId)
            }
        ));

        // remove item from db 
        if (status) {
            try {
                await removeDBCartItem(itemId)
            } catch (error) {
                console.log(error);
            }
        }
    },
    updateQuantity: async ({ status, itemId, quantity, type }) => {
        const currentItems = get().cartItems;

        const updatedItems = currentItems.map(item => item._id === itemId ?
            {
                ...item,
                quantity: type === 'INCREMENT' ?
                    item.quantity + 1
                    :
                    type === 'DECREMENT' ?
                        Math.max(1, item.quantity - 1)
                        :
                        quantity ?? item.quantity
            }
            :
            item
        );

        set({ cartItems: updatedItems })

        // update db cart item quantity 
        if (status) {
            try {
                await updateDBItemQty({ itemId, type })
            } catch (error) {
                console.log(error);
            }
        }

    },
    clearCart: (userId) => {
        set({ cartItems: [] })
    },
    // mergeCartWithDb: async () => {


    //     const localCart = get().cartItems;

    //     const res = await getCartData();

    //     const dbCart = res?.data?.items ?? [];

    //     console.log(dbCart);

    //     const modifiedDbCart = dbCart.map((item: CartItemType<ProductType>) => ({
    //         _id:
    //         slug: item?.product?.slug,
    //         title: item?.product?.title,
    //         image: item?.product?.images[0],
    //         price: item?.product?.price,
    //         quantity: item?.quantity
    //     }))

    //     console.log({ modifiedDbCart });


    //     // maping local cart items and database cartItems without duplicate
    //     const mergedMap = new Map();

    //     [...localCart, ...modifiedDbCart].forEach(item => {
    //         const existing = mergedMap.get(item.slug);

    //         if (existing) {
    //             mergedMap.set(item.slug, {
    //                 ...item,
    //                 quantity: existing.quantity + item.quantity
    //             });
    //         } else {
    //             mergedMap.set(item.slug, item);
    //         }
    //     })

    //     // making an arry with mergedMap values 
    //     const mergedCart = Array.from(mergedMap.values())

    //     console.log({ mergedCart });

    //     // set({ cartItems: mergedCart });

    //     // const items = mergedCart.map(cart => ({
    //     //     product: cart._id,
    //     //     quantity: Number(cart.quantity),

    //     // }))

    //     // const finalCart: CartType = {
    //     //     user: userId,
    //     //     items
    //     // }
    //     // try {

    //     //     await mergeCartDb(items)
    //     // } catch (error: any) {
    //     //     console.log(error.message);
    //     // }

    // }
})


export const useCartStore = create<CartState>()(
    persist(
        devtools(store),
        { name: "cart" }
    )
)
