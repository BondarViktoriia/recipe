import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import {
  ReciepeInfo,
  ReciepeItem,
  Badge,
  BadgeList,
  RecipeContainer,
  Image,
  TitleRecipe
} from './Reciepe.styled';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficulty, image },
}) => {
  return (
    <RecipeContainer>
      <TitleRecipe>{name}</TitleRecipe>
      <Image src={image} alt={name} width="340" />
      <ReciepeInfo>
        <ReciepeItem>
          <BsAlarm /> <span>{time} ms</span>{' '}
        </ReciepeItem>
        <ReciepeItem>
          <HiOutlineChartPie />
          <span>{servings} servings</span>
        </ReciepeItem>
        <ReciepeItem>
          <HiOutlineChartBar /> <span>{calories} calories</span>
        </ReciepeItem>
      </ReciepeInfo>
      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge isActive={difficulty === 'easy'}>Easy</Badge>
          <Badge isActive={difficulty === 'medium'}>Medium </Badge>
          <Badge isActive={difficulty === 'hard'}>Hard </Badge>
        </BadgeList>
      </div>
    </RecipeContainer>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
    image: PropTypes.string,
  }).isRequired,
};
