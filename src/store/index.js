import { createStore } from "redux";

const INITIAL_STATE = {};

// eslint-disable-next-line default-param-last
function list(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_BOOK":
            return {
                // ...state,
                // books: [
                //     ...state.books,
                //     {
                //         id: action.id,
                //         numero_exemplar: action.numero_exemplar,
                //         classificacao: action.classificacao,
                //         tipo_obra: action.tipo_obra,
                //         volume: action.volume,
                //         titulo: action.titulo,
                //     },
                // ],
            };
        case "REMOVE_BOOK":
            return {
                // ...state,
                // books: state.books.filter((item) => item.id !== action.id),
            };
        case "SEARCH_COLLECTION":
            return {
                // ...state,
                // collection: action.collection,
            };
        case "CLEAR":
            return INITIAL_STATE;
        default:
            return state;
    }
}

const store = createStore(list);

export default store;
