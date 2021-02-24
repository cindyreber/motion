import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import axios from 'axios';

const baseURL = "https://motion.propulsion-home.ch/backend/";

const NavBar = () => {
    const user = useSelector(state => state.user)
    
    useEffect(async () => {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
        const result = await axios.get(
        `${baseURL}api/users/me/`, config
        );

        console.log(result, "from navbar");
        /* setData(result.data); */
        // empty dependency array means it will only be called once on mount
      }, []);
   
    return (
        <div>
            
        </div>
    )
}

export default NavBar;
