import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { HOME_MAIN } from '../api/Home'
import { Container, Header, Title, Subtitle, Movies } from '../style/Home'
import { Loading } from '../style/Loading'
import Movie from "../components/Movie";


const Home = () => {

    const { loading, data, error } = useQuery(HOME_MAIN);

    if(loading){
        return <Loading>Loading...</Loading>
    }

    if(error){
        return <Loading>{error}</Loading>
    }

    return (
        <Container>  
            <Header>
                <Title>MOVIES</Title>
                <Subtitle>Introdue Movies</Subtitle>
            </Header>
            <Movies>
            {data?.moviesByAPI?.map(m => (
                <Movie
                    key={m.id}
                    id={m.id}
                    isLiked={m.isLiked}
                    bg={m.medium_cover_image}
                />
            ))}
            </Movies>
        </Container>
    ) 

  
}

export default Home;