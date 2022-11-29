import recipes from '../recipes.json'
import{ Layout }from './Layout/Layout';
import { RecipeList } from './RecipeList/RecipeList'

export const App = () => {
  return (
    <Layout>
    <RecipeList recipes={recipes}/>
</Layout>
  );
};

