import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import ProfileData from '../../store/actions/profileData';
import ApiProfile from '../../api/apiProfile';

const NavBar = () => {
    const user = useSelector(state => state.userData);
    const dispatch = useDispatch();
    console.log(user, "in user");

    useEffect(async() => {
        const response = await ApiProfile()
        console.log(response, "from useEffect");
        dispatch(ProfileData(response));
    }, []);
        
        return (
            <div> 
            </div>
        )
    }

export default NavBar;
