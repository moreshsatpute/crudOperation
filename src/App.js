
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListingTask from './components/ListingTask';
import CreateTask from './components/CreateTask';
import DetailsTask from './components/DetailsTask';
import EditTask from './components/EditTask';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListingTask />}></Route>
          <Route path='/employee/create' element={<CreateTask />}></Route>

          <Route path='/employee/detail/:empid' element={<DetailsTask />}></Route>
          <Route path='/employee/edit/:empid' element={<EditTask />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
