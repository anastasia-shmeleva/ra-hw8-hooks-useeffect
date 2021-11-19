import PropTypes from 'prop-types';

const Details = (props) => {
  const { 
    avatar, 
    name 
  } = props.children;

  const {
    city,
    company,
    position
  } = props.children.details;

  return (
    <div className='detais'>
      <ul className='detais__container'>
        <li className='detais__avatar'>
          <img src={avatar} alt='profile pic'/></li>
        <li className=' detais__item detais__name'>{name}</li>
        <li className='detais__item'>City: {city}</li>
        <li className='detais__item'>Company: {company}</li>
        <li className='detais__item'>Position: {position}</li>
      </ul>
    </div>
  )
}

Details.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string,
}

export default Details;