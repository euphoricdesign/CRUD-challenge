import './App.css';

// importamos componentes 
import Table from './components/Table/Table';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

// importamos el router 
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()

  return (
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path='/' element={ <Table /> } />
            <Route path='/create' element={ <Create /> } />
            <Route path='/edit/:id' element={ <Edit /> } />
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;