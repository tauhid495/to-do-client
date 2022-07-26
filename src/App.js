import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import ToDo from "./components/ToDo";
import Calander from "./components/Calander";
import Completed from "./components/Completed";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import EditToDo from "./components/EditToDo";



function App() {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    const toDo = { task: e.target.name.value, completed: '' };

    if (e.target.name.value === '') {
      return;
    } else {
      axios.post('http://localhost:5000/tasks', toDo)
        .then(data => {
          if (data.statusText) {
            setAddTask(data);
            toast.success('Task Added....');
          }
        })
    }
    e.target.reset();
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(data => {
        toast('Task deleted...')
      })
  };




  useEffect(() => {
    const getTasks = async () => {
      const { data } = await axios.get('http://localhost:5000/tasks');
      setTasks(data);
    }
    getTasks();
  }, [addTask, handleDelete]);

  return (
    <div className="">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/calander" element={<Calander />} />
        <Route path="/todo" element={<ToDo handleAdd={handleAdd} tasks={tasks} handleDelete={handleDelete} />} />
        <Route path="/completed" element={<Completed tasks={tasks} />} />
        <Route path='/edittodo/:id' element={<EditToDo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
