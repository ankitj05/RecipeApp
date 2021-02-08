import {
    SEARCH_RECIPES,
    SET_LOADING,
} from '../../types'

export default (state, action) => {
    switch (action.types) {

        case SEARCH_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}