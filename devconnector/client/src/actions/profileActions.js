import axios from 'axios'
import {GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER} from './types'

//GET CURRENT PROFILE
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading())
    axios.get('/api/profile')
        .then(res => dispatch({type: GET_PROFILE, payload: res.data}))
        .catch(err => dispatch({type: GET_PROFILE, payload: {}}))
}


// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios
      .post('/api/profile', profileData)
      .then(res => history.push('/dashboard'))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

// Add Experience

export const addExperience = (expData, history) => dispatch => {

    axios
        .post('api/profile/experience', expData)
        .then((res) => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

export const addEducation = (eduData, history) => dispatch => {
    axios
        .post('/api/profile/education', eduData)
        .then(res => history.push('/dashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}


// Delete Exerpeince 

export const deleteExperience = (expId) => dispatch => {

    axios
        .delete(`api/profile/experience/${expId}`)
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

// Delete Education
export const deleteEducation = (eduId) => dispatch => {
    axios
        .delete(`api/profile/education/${eduId}`)
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}

// Get all Profiles

export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading())
    axios
        .get('/api/profile/all')
        .then(res => {
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_PROFILES,
                payload: null
            })
        })
}

// Get profile based on handle id

export const getProfileByHandle = (handle) => dispatch => {
    dispatch(setProfileLoading())
    axios
        .get(`/api/profile/handle/${handle}`)
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        })
}

// DELETE account and profile

export const deleteAccount = () => dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone!')){
        axios
            .delete('/api/profile')
            .then(res => 
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            )
    }
}




//PROFILE LOADING
export const setProfileLoading = () => {
    return{
        type: PROFILE_LOADING,
        payload: {}
    }
}

//Clear Profile
export const clearCurrentProfile = () => {
    return{
        type: CLEAR_CURRENT_PROFILE
    }
}