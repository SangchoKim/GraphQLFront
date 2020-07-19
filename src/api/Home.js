import gql from 'graphql-tag';

const HOME_MAIN = gql`
    {
        moviesByAPI(limit:30, rating:7){
            id
            title
            rating
            medium_cover_image
        }
    }  
`;

export {
    HOME_MAIN 
}