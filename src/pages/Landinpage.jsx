
import delivery from '../pictures/delivery.png';
import MultipleSelectPlaceholder from '../components/manager/select';
import BasicButtons from '../components/manager/buttons';


function Landinpage() {
  return <section className="landing">
      <div className="landElem">
        <img className='landimage' src={delivery} alt="delivery" />
      </div>
      <div className="landElem role">
          <h1>Welcome To MarocShip</h1>
          <h3>Please select your role:</h3>
          < MultipleSelectPlaceholder />
          <BasicButtons />
      </div>
  </section>;
}

export default Landinpage;
