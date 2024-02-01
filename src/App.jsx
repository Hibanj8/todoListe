import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import AddNewTodoForm from './Components/AddNewTodoForm'
import TodoList from './Components/TodoList';
import Read from './Components/Read';
import Update from './Components/Update';


function App() {
 
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TodoList/>}></Route> 
      <Route path='/create' element={<AddNewTodoForm/>}></Route>
      <Route path='/Read/:id' element={<Read/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App