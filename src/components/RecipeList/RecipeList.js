import { Recipe } from "components/Reciepe/Recipe";
import PropTypes from 'prop-types';




export const RecipeList = ({recipes}) => {
    return (
        <ul>
            {recipes.map(recipe =>
                <li key={recipe.id}>
                    <Recipe recipe={recipe}/>
                </li>)}
        </ul>
    )
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),).isRequired,
}