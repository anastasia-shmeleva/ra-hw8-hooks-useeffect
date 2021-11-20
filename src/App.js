import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List/List';
import Details from './components/Details/Details';

function App() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    loadUsers();
  }, []);
 
  const loadUsers = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((response) => response.json())
    .then(data => setList(data))
    .catch((error) => setError(error));
  }

  return (
    <div className="container">
      {error && <p>Something went wrong...</p>}
      {!error && <List clickHandler={(info) => setUser(info)}>{list}</List>}
      {user && <Details >{user}</Details>}
    </div>
  );
}

export default App;
