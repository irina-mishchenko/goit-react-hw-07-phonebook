import { useSelector, useDispatch } from "react-redux";
import {deleteContact} from "./../../redux/operations";
import { getVisibleContacts } from "./../../redux/selectors";

import ContactListItem from './ContactListItem/ContactListItem';

import s from './ContactList.module.css';

function ContactList () {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactListItem
            contact={name}
            number={number}
            key={id}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;