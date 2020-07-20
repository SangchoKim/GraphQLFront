import React from 'react';
import { Container, Column, Title, Subtitle, Description, Poster } from '../style/Detail';
import { Loading } from '../style/Loading';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIE } from '../api/Home';
import { Movies } from '../style/Home';
import Movie from '../components/Movie';

const Detail = () => {

    const { id } = useParams();
    const { loading, data, error } = useQuery(GET_MOVIE, {
        variables: { id: parseInt(id) }
    })

    if(loading){
        return <Loading>Loading...</Loading>
    }

    if(error){
        return <Loading>{error}</Loading>
    }

    console.log(data.getSuggestedMovie)

    return (
    <Container>
        <Column>
            <Title>
                {data.getMovie.title}
            </Title>
            <Subtitle>
                {data?.getMovie?.language} · {data?.getMovie?.rating}
            </Subtitle>
            <Description>{data?.getMovie?.description_full}</Description>
            {/* <Movies>
            {data?.getSuggestedMovie?.map(m => (
                <Movie
                    key={m.id}
                    id={m.id}
                    bg={m.medium_cover_image}
                />
            ))}
            </Movies> */}
        </Column>
        <Poster bg={data?.getMovie?.medium_cover_image}></Poster>
    </Container>
    )
}

export default Detail;  