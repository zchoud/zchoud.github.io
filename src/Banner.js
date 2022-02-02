import { Container, Row } from 'react-bootstrap'
import './Banner.css';
import imgBanner from './Cyber-security_ccexpress.jpeg'

function Banner() {
  return (
    <div className="Banner">
        <img src={imgBanner} alt="tech" id="img-banner"/>
    </div>
  );
}

export default Banner;
