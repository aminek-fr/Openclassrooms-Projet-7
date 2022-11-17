import Vector from '../assets/Vector.svg'
import '../sass/Layout/_dropdown.scss'
import { useState } from "react";

const Dropdown = ({title, description}) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="containerDropdown">
        <div className='dropdown'>
            <div className='titleDropdown'>{title}</div>
            <img className='vector' src={Vector} alt='' onClick={handleOpen} />
        </div>
        {open ? (
          <p className='textDropdown'>{description}</p>
        ) : null}
      </div>
    );
  };
  
  export default Dropdown;