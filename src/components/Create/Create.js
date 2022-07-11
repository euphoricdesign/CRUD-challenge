import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../firebaseConfig/firebase';

import { Heading, FormLabel, Input, Button } from '@chakra-ui/react'

const Create = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState(0)
  const [mail, setMail] = useState('')

  const navigate = useNavigate();

  const usersCollection = collection(db, "users")

  const store = async (e) => {
    e.preventDefault()
    await addDoc(usersCollection, {name: name, lastname: lastname, age: age, mail: mail})
    navigate('/');
  }


  return (
    <div>
      <Heading color="#6c6d6e" mb="25px">Create new user</Heading>
      <form onSubmit={store}>
        <FormLabel color='#6c6d6e'>Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text' 
        />

        <FormLabel color='#6c6d6e'>Lastname</FormLabel>
        <Input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type='text' 
        />

        <FormLabel color='#6c6d6e'>Age</FormLabel>
        <Input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type='text'
        />

        <FormLabel color='#6c6d6e'>Mail</FormLabel>
        <Input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          type='text'
        />
        <Button 
          width="100px" 
          color="white" 
          background="#957FEF" 
          _active={{"background":"#7966ca"}} 
          _hover={{"background":"#7966ca"}}
          mt="30px"
          type='submit'
        >
          Add
        </Button>
      </form>
    </div>
  )
}

export default Create