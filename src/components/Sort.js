// Assets
import down from '../assets/angle-down-solid.svg'

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__select">
        <p>Selecter uw genre</p>
        <img src={down} alt="Dropdown" />
      </div>

      <div className="sort__select">
        <p>Selecteer uw data</p>
        <img src={down} alt="Dropdown" />
      </div>

      <div className="sort__select">
        <p>Selecter uw afstand</p>
        <img src={down} alt="Dropdown" />
      </div>
    </div>
  );
}

export default Sort;