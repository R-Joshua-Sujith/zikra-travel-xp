import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const loginReducer = (state = { user: false, user_type: "hi", user_email: "hi" }, action) => {
    if (action.type === 'login') {
        return {
            user: true,
            user_type: action.user_type,
            user_email: action.user_email
        }
    } else if (action.type === 'logout') {
        return {
            user: null,
            user_type: "",
            user_email: ""

        }
    } else {
        return state;
    }
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, loginReducer);

const dataStore = createStore(persistedReducer);
const persistor = persistStore(dataStore);

export { dataStore, persistor }