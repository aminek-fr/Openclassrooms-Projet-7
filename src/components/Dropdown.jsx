import { useState } from "react";
import Vector from '../assets/Vector.svg'
import '../styles/Layout/_dropdown.scss'

const Dropdown = ({title, description}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  let newContent;
  (typeof description === 'string') ? newContent = [description] : newContent = description;

  return (
    <div className="dropdownContainer">
      <div className='dropdown'>
          <div className='dropdownTitle'>{title}</div>
          <img className='dropdownVector' src={Vector} alt='' onClick={handleOpen} />
      </div>
      {open ? (
        <div className='dropdownText'>
          {
          newContent.map(item => (
            <p className='dropdownText' key={item}>{item}</p>
          ))
          }
          
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;

/*<p>{description}</p>*/