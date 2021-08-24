// data layer logic

export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            // return what data layer will look like
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if ( index >= 0 ){
                // item exists in basket
                newBasket.splice(index, 1)
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as uts `)
            }
            return { 
                ...state,
                basket: newBasket
            }
        default :
        return state;
    }
}

export default reducer;