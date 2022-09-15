import Spinner from 'react-bootstrap/Spinner';
import "./style.css"

const Spn = () => {
  return (
    <div className='text-center cl'>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default Spn;