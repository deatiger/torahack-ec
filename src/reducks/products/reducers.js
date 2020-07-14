import * as Actions from './actions'
import initialState from '../store/initialState'

export const ProductsReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case Actions.DELETE_PRODUCTS:
            return {
                ...state,
                list: [...action.payload]
            };
        case Actions.FETCH_PRODUCTS:
            return {
                ...state,
                /**
                 * ここでリストにしているのはコンポーネントが変化をキャッチするため
                 * 仮にlistを使わないとメモリ上の情報が更新されずコンポーネントも変化に気がつけない
                 */
                list: [...action.payload]
            };
        default:
            return state
    }
}