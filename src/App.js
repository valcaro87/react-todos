import './App.css';
import { Button } from 'antd';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/* <Button type="primary">Button</Button> */}
      <TodoList />
    </div>
  );
}

export default App;
