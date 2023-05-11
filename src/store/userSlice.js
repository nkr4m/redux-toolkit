import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name:'user',
  initialState:{
    userDtls:{
      id:null,
      name:null,
      email:null,
      phno:null,
      address:{
        houseNo:null,
        street:null,
        city:null,
        state:null,
        country:null
      }
    }
  },
  reducers:{
    addUserDtls:(state, action) =>{
      state.userDtls = { ...state.userDtls, ...action.payload }
    },
    addUserAddress:(state, action)=>{
      state.userDtls.address = { ...state.userDtls.address, ...action.payload }
    }
  }
})


// for dispatch
export const {addUserDtls, addUserAddress} = userSlice.actions;

// for configure store
export default userSlice.reducer;