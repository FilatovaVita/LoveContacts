import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import {
  PhonebookContainer,
  DefoltMassege,
} from '../components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContact,
  getError,
  getIsLoading,
} from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import { fetchContacts } from '../redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookContainer>
      <h1>Add contact here!</h1>
      <ContactForm />

      {contacts.length ? (
        <>
          <h2>Contacts</h2>
          {isLoading && !error && <Loader />}
          <Filter />
        </>
      ) : (
        <DefoltMassege>
          You dont have contacts! Please, field this Contact Form!
        </DefoltMassege>
      )}
      <ContactList />
    </PhonebookContainer>
  );
}
