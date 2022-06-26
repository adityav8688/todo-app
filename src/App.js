import './App.css';
import TodoList from './TodoList';
function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    <ul>
      <button className='list'>Logout</button>
      <button className='list'>SignUp </button>
      <button className='list'>Login </button>
    </ul>
      
    </div>
  );
}

export default App;
