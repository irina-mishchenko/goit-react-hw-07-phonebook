import {
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteContactRequest, 
    deleteContactSuccess, 
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from "./actions";
import axios from "axios";

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('http://localhost:4040/contacts')
    .then(({data}) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

export const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    axios
    .post('http://localhost:4040/contacts', contact)
    .then(({data}) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`http://localhost:4040/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
}

