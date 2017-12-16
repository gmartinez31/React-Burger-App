import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    error: false,
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

// const addIngredient = (state, action) => {
//     return {
//         ...state,
//         ingredients: {
//             ...state.ingredients,
//             [action.ingredientName]: state.ingredients[action.ingredientName] + 1
//         },
//         totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
//     };
// }

// const deleteIngredient = (state, action) => {
//     return {
//         ...state,
//         ingredients: {
//             ...state.ingredients,
//             [action.ingredientName]: state.ingredients[action.ingredientName] + 1
//         },
//         totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
//     }
// }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            // return addIngredient();
        case actionTypes.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
            // return deleteIngredient();
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false
            }
            // return setIngredients();
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
            // return fetchIngredientsFailed();
        default:
            return state;
    }
};

export default reducer;