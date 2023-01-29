import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import requests from '../requset';
import axios from '../axios';

function Home () {
    const dispatch = useDispatch();

    async function fetchData() {
        const request = await axios.get(requests.fetchTrendingMovie);
        console.log(">>>>request",request)
        let tempMovies = request.data.results.map(item => {
            return { id: item.id, ...item}
        })
        dispatch(setMovies(tempMovies))
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <Container>
            <ImgSlider />
            <Viewers/>
            <Movies/>
            <Footer>
                ----------------    EDUCATIONAL PURPOSES ONLY   ----------------
            </Footer>
        </Container>
    )
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Footer = styled.footer`
    padding: 50px 0 10px 0;
    text-align: center;
    color: darkgrey; 
`