import React from "react";
import { Link } from "react-router-dom";
import { Container, Poster } from '../style/Movie'

export default ({ id, bg, isLiked }) => {
//   const [toggleMovie] = useMutation(LIKE_MOVIE, {
//     variables: { id: parseInt(id), isLiked }
//   });
  return (
    <Container>
      <Link to={`/detail/${id}`}>
        <Poster bg={bg} />
      </Link>
      {/* <button onClick={toggleMovie}>{isLiked ? "Unlike" : "Like"}</button> */}
    </Container>
  );
};