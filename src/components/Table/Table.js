import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../../firebaseConfig/firebase';

import { Button, Stack } from '@chakra-ui/react'
import './Table.css'

import { SpinnerDotted } from 'spinners-react';

import { motion } from 'framer-motion';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

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

const Table = () => {
  // 1. configuramos los hooks 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  // 2. referenciamos a la DB firestore

  const usersCollection = collection(db, "users");

  // 3.Función para mostrar todos los usuarios 
  const getUsers = async () => {
    const data = await getDocs(usersCollection)
    setUsers(
      data.docs.map((doc) => ( {...doc.data(), id: doc.id } ))
    )
    setLoading(false)
  }

  // 4. Función para eliminar un usuario 
  const deleteUser = async (id) => {
    const userDoc = doc(db,"users",id)
    await deleteDoc(userDoc)
    getUsers()
  };

  // 5. Función de confirmación para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: 'Remove this user?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#60D394',
      cancelButtonColor: '#EE6055',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  // 6. Usamos useEffect
  useEffect( () => {
    getUsers() // eslint-disable-next-line
  },[])

  // 7. Retornamos vista de nuestro componente 

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {
        loading ? (
          <div className="loader">
            <SpinnerDotted color="#7161EF" />
          </div>
        ) : (
          <>
          <Button 
            width="100px" 
            color="white" 
            background="#957FEF" 
            _active={{"background":"#7966ca"}} 
            _hover={{"background":"#7966ca"}}
            mb="30px"
          >
            <Link to="/create">Add user</Link>
          </Button>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Age</th>
                  <th>Mail</th>
                  <th>Actions</th>
                </tr>
              </thead>    
              <tbody>
                { users.map( user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.age}</td>
                    <td>{user.mail}</td>
                    <td>
                      <Stack direction="row">
                        <Button 
                          fontWeight="400" 
                          _active={{"background":"#54b27f"}} 
                          _hover={{"background":"#54b27f"}} 
                          fontSize="14px" 
                          background="#60D394" 
                          color="white" 
                          width="60px" 
                          height="30px"
                        >
                          <Link to={`/edit/${user.id}`}>Edit</Link>
                        </Button>
                        <Button 
                          fontWeight="400" 
                          _active={{"background":"#c5584f"}} 
                          _hover={{"background":"#c5584f"}} 
                          fontSize="14px" 
                          background="#EE6055" 
                          color="white" 
                          width="60px" 
                          height="30px"
                          onClick={() => confirmDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </>
        )
      }
    </motion.div>
  )
}

export default Table;