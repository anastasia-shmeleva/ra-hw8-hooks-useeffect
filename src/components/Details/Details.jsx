import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Details = (props) => {
  const {
    id,
    name,
  } = props.children;

  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    if(id) loadUser(id);
  }, [id]);

  const loadUser = (id) => {
    setLoading(true)
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    .then((response) => response.json())
    .then(data => {
      setUser(data);
      setLoading(false)
    })
    .catch((error) => setError(error));
  }

  return (
    <div className='detais'>
      {error && <p>Something went wrong...</p>}
      {isLoading ? <p className='loading'>Loading...</p> :
        user && (
          <ul className='detais__container'>
          <li className='detais__avatar'>
            <img src={user.avatar} alt='profile pic'/></li>
          <li className=' detais__item detais__name'>{name}</li>
          <li className='detais__item'>City: {user.details.city}</li>
          <li className='detais__item'>Company: {user.details.company}</li>
          <li className='detais__item'>Position: {user.details.position}</li>
        </ul>
        )}
    </div>
  )
}

Details.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
}

export default Details;