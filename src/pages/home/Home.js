import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './header/Header';
import RecentPost from './post/postTime/recent/RecentPost';
import OldPost from './post/postTime/old/OldPost';
import useStories from '../../hooks/useStories';
import axios from 'axios';
import Alert from '@mui/material/Alert';



const Home = () => {
    const [stories,setStories]= useStories();

    const [success,setSuccess]=useState(false);
    const [warning,setWarning]=useState(false);
  



    const [checkedLong, setCheckedLong] = useState(true);
    const [checkedShort, setCheckedShort] = useState(true);


    const handleLong=()=>{
      checkedLong?setCheckedLong(false):setCheckedLong(true);

     }
    const handleShort=()=>{
      checkedShort?setCheckedShort(false):setCheckedShort(true);

     }

     const handleDelete=()=>{
       if(stories.length){
       const proceed=window.confirm('Are you sure delete all stories?');
      if(proceed){
        axios.delete('https://enigmatic-thicket-12068.herokuapp.com/hootstory')
        .then(result=>{
        setStories([]);
        setSuccess(true);

        });
      }
    }
    else{
      setWarning(true);

    }

    }

    setTimeout(()=>setWarning(false),1000);
    setTimeout(()=>setSuccess(false),1000);


    const longStories=stories.filter(story=>story.type==='long');
    const shortStories=stories.filter(story=>story.type==='short');

     const recentPost= stories.filter(story=>new Date(story.datetime).getFullYear() ===2022);

     const oldPost= stories.filter(story=>new Date(story.datetime).getFullYear() !==2022);


    return (
        <Container sx={{minHeight:'100vh',maxHeight:'auto',pb:3}}>

           <Header longStories={longStories} shortStories={shortStories} checkedLong={checkedLong} handleLong={handleLong} checkedShort={checkedShort} handleShort={handleShort} handleDelete={handleDelete}/>

           { warning &&
            <Alert sx={{mt:2}} onClose={() => setWarning(false)} severity="error">There is not any story !</Alert>
            }

           { success &&
            <Alert sx={{mt:2}} onClose={() => setWarning(false)} severity="success">Successfully Deleted All Stories ! !</Alert>
            }

           <RecentPost stories={recentPost} checkedLong={checkedLong} checkedShort={checkedShort}/>
           <OldPost stories={oldPost} checkedLong={checkedLong} checkedShort={checkedShort}/>
        </Container>
    );
};

export default Home;