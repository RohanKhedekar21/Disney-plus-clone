import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { API_KEY, base_url } from '../requset';
import movieTrailer from 'movie-trailer';

function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState()
    
    async function fetchData() {
        const request = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
        console.log(">>>>request", request);
        setMovie(request.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const playTrailer = () => {
        movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
            .then(url => {
                window.open(url)
            }).catch(error => console.log(error))
        
    }

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={`${base_url}${movie.poster_path}`} />
                    </Background>
                    {/* <ImageTitle>
                        <img src={`${base_url}${movie.backdrop_path}`} />
                    </ImageTitle> */}
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton onClick={() => playTrailer()}>
                            <img src="/images/play-icon-white.png" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.title}
                    </SubTitle>
                    <Description>
                        {movie.overview}
                    </Description>
                </>
            )
            }
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: revert;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    padding-top: 250px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px
`