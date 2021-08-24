// data layer logic

export const initialState = {
    basket: [],
};

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
            return { state }
        default :
        return state;
    }
}

export default reducer;