import {useState, useEffect} from 'react';
import {useNavigate, useNvigate, useParams} from 'react-router-dom';
import {getDoc, updateDoc, doc} from 'firebase/firestore';
import {db} from '../../firebaseConfig/firebase';

import { Heading, FormLabel, Input, Button } from '@chakra-ui/react'

const Edit = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState(0)
  const [mail, setMail] = useState('')

  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault();
    const user = doc(db, "users", id)
    const data = {name: name, lastname: lastname, age: age, mail: mail}
    await updateDoc(user, data)
    navigate('/')
  }

  const getProductById = async (id) => {
    const user = await getDoc(doc(db, "users", id))
    if(user.exists()) {
      setName(user.data().name)
      setLastname(user.data().lastname)
      setAge(user.data().age)
      setMail(user.data().mail)
    } else {
      console.log('El producto no existe');
    }
  }

  useEffect(() => {
    getProductById(id)
  },[])

  return (
    <div>
      <Heading color="#6c6d6e" mb="25px">Edit user</Heading>
      <form onSubmit={update}>
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
          Update
        </Button>
      </form>
    </div>
  )
}

export default Edit