import styled from "styled-components";
 

export const RecipeContainer = styled.div`
    padding: 8px;
    border-radius: 8px;
     box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`

export const TitleRecipe = styled.h2`
    margin: 0;
`

export const ReciepeInfo = styled.ul`
    display: flex;
    gap:16px;
    list-style: none;
    padding: 8px;
    border:1px solid green;
    border-radius:4px;
`
export const ReciepeItem = styled.li`
     display: flex;
    gap:12px;
    align-items:center;

    svg{
        color: green;
    }
`
export const Badge = styled.span`
    padding:8px;
    border-radius: 25px;

     background-color: ${p => {
    return p.isActive ? 'green' : ' lightgray'
}};

     color:  ${p => {
    return p.isActive ? 'white' : ' black'
     }}
`

export const BadgeList = styled.div`
    display: flex;
    gap: 12px;
`




     /* background-color: ${p => {
    switch(p.difficulty) {
        case 'easy':
            return 'green';
        case 'medium':
            return 'yellow';
        case 'hard':
            return 'red';
        default:
            throw new Error('Unexpected value prop difficulty')
    }
}} */

export const Image = styled.img`
display:block;
    width: 100%;
    height: 240px;
    object-fit:cover;
     
`