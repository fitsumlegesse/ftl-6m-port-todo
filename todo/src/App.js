import './App.css';
import {FaPlusCircle} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h3 className='title'>ToDo List App</h3>
        <form className='form-todo'>
          <input type="text" className='form-control' placeholder='Enter Your ToDo' name="text"/>
          <button type="button" className='btn'><FaPlusCircle className='icon'/></button>
        </form>
      </div>
    </div>
  );
}

export default App;
