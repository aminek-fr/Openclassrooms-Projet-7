import footerLogo from '../assets/LogoWhite.svg';
import '../styles/Layout/_footer.scss';

function Footer (){
  return (
    <footer>
      <div className="footerContainer">
        <img src={footerLogo} alt="footer-logo" />
        <p>&#xA9; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer
