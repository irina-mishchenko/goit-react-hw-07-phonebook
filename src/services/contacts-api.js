import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

// export async function fetchContacts() {
//     const { data } = await axios.get('/contacts');
//     return data;
// };

const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
};

const addContact = contact => {
    return axios.post('/contacts', contact).then(({data}) => data);
};

const deleteContact = contactId => {
    return axios.delete(`/contacts/${contactId}`);
};

const updateContact = (contactId, update) => {
    return axios.patch(`/contacts/${contactId}`, update).then(({data}) => data);
};

export default {fetchContacts, addContact, deleteContact, updateContact};
