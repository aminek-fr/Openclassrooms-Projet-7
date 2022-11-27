import { useState } from "react";
import Vector from '../assets/Vector.svg'
import '../styles/Layout/_dropdown.scss'

const Dropdown = ({title, description}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  /*On test le "type" de contenu. Si c'est une string on met dans un tableau sinon on ne change pas.*/
  let newContent;
  (typeof description === 'string') ? newContent = [description] : newContent = description;

  return (
    <div className="dropdownContainer">
      <div className='dropdown'>
          <div className='dropdownTitle'>{title}</div>
          <img className='dropdownVector' src={Vector} alt='' onClick={handleOpen} />
      </div>
      {/*Ouverture du dropdown, affichage de la balise "p" et son contenu.*/}
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