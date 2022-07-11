import './App.css';
import { Button, Stack } from '@chakra-ui/react';

// importamos componentes 
import Table from './components/Table/Table';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

// importamos el router 
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={ <Table /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/edit/:id' element={ <Edit /> } />
        </Routes>
      </div>
  );
}

export default App;