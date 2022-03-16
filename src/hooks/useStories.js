import { useEffect, useState } from 'react';

const useStories = () => {
    const [stories,setStories]=useState([]);

    useEffect(()=>{
        fetch('https://enigmatic-thicket-12068.herokuapp.com/hootstory')
        .then(res=>res.json())
        .then(data=>setStories(data));

    },[]);

    return [stories,setStories];
};

export default useStories;