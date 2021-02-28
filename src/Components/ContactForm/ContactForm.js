import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {addContact, fetchContacts} from "./../../redux/operations";
import {getContacts} from "./../../redux/selectors";

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const identicalName = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (identicalName) {
      alert(`${name} is already in contacts!`);
      return;
    };

    dispatch(addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Phonebook</h2>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            type="number"
            name="number"
            value={number}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" className={s.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
};
