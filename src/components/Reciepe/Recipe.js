import PropTypes from 'prop-types';
import { BsAlarm } from "react-icons/bs";
import { HiOutlineChartPie,HiOutlineChartBar } from "react-icons/hi";


export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li><BsAlarm/> {time} ms </li>
        <li><HiOutlineChartPie/>{servings} servings</li>
        <li><HiOutlineChartBar/> {calories} calories</li>
          </ul>
          <div>
              <h3>Difficulty</h3>
              <div>
                  <span>Easy</span>
                  <span>Medium</span>
                  <span>Hard</span>
              </div>
          </div>
    </div>
  );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
}