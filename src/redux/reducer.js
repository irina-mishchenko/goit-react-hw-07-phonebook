import {combineReducers} from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError, 
    changeFilter,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from "./actions";

const items = createReducer([], {
    [fetchContactsRequest]: (state, {payload}) => payload,
    [addContactSuccess]: (state, {payload}) => [payload, ...state],
    [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
});

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items,
    filter,
    loading,
});