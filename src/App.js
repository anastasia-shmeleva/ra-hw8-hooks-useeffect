import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List/List';
import Details from './components/Details/Details';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);
  const [id, setID] = useState(null);

  useEffect(() => {
    loadUsers();
  });
 
  useEffect(() => {
    if(id) loadUser(id);
  }, [id]);


  const loadUsers = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((response) => response.json())
    .then(data => {
      setList(data);
      if(isLoading) setLoading(false);
    });
  }

  const loadUser = (id) => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    .then((response) => response.json())
    .then(data => setUser(data));
  }

  const onCLickHandler = (info) => {
    setID(info.id);
  }

  return (
    <div className="container">
      {isLoading ? <p className='loading'>Loading...</p> : <List clickHandler={onCLickHandler}>{list}</List>}
      {user ? <Details>{user}</Details> : ''} 
    </div>
  );
}

export default App;
