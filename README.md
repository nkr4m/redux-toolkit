# redux-toolkit

redux toolkit setup

1. setup slice
	-import { createSlice } from '@reduxjs/toolkit';
	-createSlice and provide name, initialState, reducer
		1. initial state will hold the initial state of the slice
		2. reducer will hold methods which will be used to manupulate the state
		3. name is just for reference
	-export the functions for the usage of dispatch and to register in store
	
2. setup store
	-import configureStore and reducer from slice
	export default configureStore({
    reducer: {
      user: userReducer,
		},
	});

3. setup dispatch
	-import useDispatch 
		import { useDispatch } from 'react-redux';
		const dispatch = useDispatch();
	
	-use reducer method with dispatch to change the state


4. provider setup for index.js

5. to view the value of the state - const user = useSelector((state) => state.user);



refer - https://dev.to/raaynaldo/redux-toolkit-setup-tutorial-5fjf
