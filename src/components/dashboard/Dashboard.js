import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUserDtls, addUserAddress } from '../../store/userSlice'

export default function Dashboard() {


    // to fetch value from store
    //const user = useSelector((state) => state.user);
    // const [userData, setUserData] = useState(user);

    // useEffect(() => {
    //   console.log(userData)
    // }, [])


    // to set value in the store
    
    const dispatch = useDispatch();
    const setUserDtls = ()=>{
      dispatch(addUserDtls(
        {
          id:1,
          name:'amit',
          email:'am@abc',
          phno:'6654'
        }
      ))
    }

    const setUserAddress = ()=>{
      dispatch(addUserDtls(
        {
          address:{
            city:'nashville',
            state:'random-state',
            country:'country',
            hno:'123',
            street:'qwertyu'
          }
          
        }
      ))
    }

  


  return (
    <>
    
    <h3>Dashboard</h3>

    <button type="button" className="btn btn-primary btn-sm" onClick={setUserDtls}>setUserDtls</button>
    <button type="button" className="btn btn-secondary btn-sm" onClick={setUserAddress}>setUserAddress</button>
    
    </>
  )
}
