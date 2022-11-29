import { Recipe } from "components/Reciepe/Recipe";
import PropTypes from 'prop-types';
import { List } from "./RecipeList.styled";



export const RecipeList = ({recipes}) => {
    return (
        <List>
            {recipes.map(recipe =>
                <li key={recipe.id}>
                    <Recipe recipe={recipe}/>
                </li>)}
        </List>
    )
};

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),).isRequired,
}