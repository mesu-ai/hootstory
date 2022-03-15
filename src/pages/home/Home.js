import React from 'react';
import Container from '@mui/material/Container';
import Header from './header/Header';
import RecentPost from './recent/RecentPost';
import OldPost from './old/OldPost';


const Home = () => {
    return (
        <Container sx={{minHeight:'100vh',maxHeight:'auto'}}>
           <Header/>
           <RecentPost/>
           <OldPost/>
        </Container>
    );
};

export default Home;