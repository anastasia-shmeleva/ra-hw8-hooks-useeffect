import { useState } from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const { clickHandler } = props;

  const [isOpenList, setOpen] = useState(false);
  
  const list = `${isOpenList ? 'type_hidden' : 'type_active'}`

  return (
    <div className='list'>
      <ul className='list__container' style={{height: isOpenList ? '' : '150px'}}>
        {props.children.map(child => {
          return <li className='list__item' key={child.id} onClick={() => clickHandler(child)}>{child.name}</li>
        })}
      </ul>
      <div className={`list__item ${list}`} onClick={() => isOpenList ? setOpen(false) : setOpen(true)}>{'...'}</div>
    </div>
  )
}

List.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default List;