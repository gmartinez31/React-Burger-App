export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

// action creator //
export const add_Ingredient = () => {
    return {
        type: ADD_INGREDIENT
    }
}

export const delete_Ingredient = () => {
    return {
        type: DELETE_INGREDIENT
    }
}