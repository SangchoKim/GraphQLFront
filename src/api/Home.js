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

const GET_MOVIE = gql`
    query getMovieDetails($id: Int!){
        getMovie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_full
          }
        getSuggestedMovie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_full
        }
    }
`;

export {
    HOME_MAIN,
    GET_MOVIE 
}