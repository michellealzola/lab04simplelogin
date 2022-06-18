import './App.css';
import Form from './components/Form';
import UsersList from './components/UsersList';


function App() {
  return (
    <div className='container'>
      <h1>Sign In</h1>
      <Form/>
      <UsersList/>
      
    </div>
  );
}

export default App;
