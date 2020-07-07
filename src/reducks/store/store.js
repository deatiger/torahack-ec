import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';

import {UsersReducer} from "../users/reducers";

// 現在どこのページにいるのか？というような情報を持っているのがhistory
export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            // stateのプロパティ(users)がここでkeyに入ってくる
            users: UsersReducer
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

