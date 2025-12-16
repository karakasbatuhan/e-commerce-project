import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE, LOGIN_USER, GET_ROLES } from "../actions/clientActions";

const initialState = {
    user: {},
    adressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "tr",
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user:action.payload};
        case SET_ROLES:
            return {...state, roles: action.payload};
        case GET_ROLES:
            return {...state, roles: action.payload};
        case SET_THEME:
            return {...state, theme: action.payload};
        case SET_LANGUAGE:
            return {...state, language: action.payload};
        case LOGIN_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
};