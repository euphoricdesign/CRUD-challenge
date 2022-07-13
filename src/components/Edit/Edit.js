import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/firebase';
import { motion } from 'framer-motion';

import { Heading, FormLabel, Input, Button } from '@chakra-ui/react';

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

const Edit = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [mail, setMail] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const user = doc(db, 'users', id);
    const data = { name: name, lastname: lastname, age: age, mail: mail };
    await updateDoc(user, data);
    navigate('/');
  };

  const getProductById = async (id) => {
    const user = await getDoc(doc(db, 'users', id));
    if (user.exists()) {
      setName(user.data().name);
      setLastname(user.data().lastname);
      setAge(user.data().age);
      setMail(user.data().mail);
    } else {
      console.log('El producto no existe');
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Heading color="#6c6d6e" mb="25px">
        Edit user
      </Heading>
      <form onSubmit={update}>
        <FormLabel color="#6c6d6e">Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          style={{ outline: '1px solid #c7c7c7' }}
        />

        <FormLabel color="#6c6d6e">Lastname</FormLabel>
        <Input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          style={{ outline: '1px solid #c7c7c7' }}
        />

        <FormLabel color="#6c6d6e">Age</FormLabel>
        <Input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          style={{ outline: '1px solid #c7c7c7' }}
        />

        <FormLabel color="#6c6d6e">Mail</FormLabel>
        <Input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          type="text"
          style={{ outline: '1px solid #c7c7c7' }}
        />
        <Button
          width="100px"
          color="white"
          background="#957FEF"
          _active={{ background: '#7966ca' }}
          _hover={{ background: '#7966ca' }}
          mt="30px"
          type="submit"
        >
          Update
        </Button>
      </form>
    </motion.div>
  );
};

export default Edit;
