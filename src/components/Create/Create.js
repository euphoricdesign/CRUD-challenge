import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../firebaseConfig/firebase';

import { Heading, FormLabel, Input, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Heading color="#6c6d6e" mb="25px">Create new user</Heading>
      <form onSubmit={store}>
        <FormLabel color='#6c6d6e'>Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          style={{"outline":"1px solid #c7c7c7"}} 
        />

        <FormLabel color='#6c6d6e'>Lastname</FormLabel>
        <Input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type='text'
          style={{"outline":"1px solid #c7c7c7"}} 
        />

        <FormLabel color='#6c6d6e'>Age</FormLabel>
        <Input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type='text'
          style={{"outline":"1px solid #c7c7c7","color":"gray"}}
        />

        <FormLabel color='#6c6d6e'>Mail</FormLabel>
        <Input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          type='text'
          style={{"outline":"1px solid #c7c7c7"}}
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
    </motion.div>
  )
}

export default Create