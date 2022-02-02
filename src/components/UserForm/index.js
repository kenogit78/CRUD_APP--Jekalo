import React, { useState, useEffect } from 'react';
import User from '../User';
import { getApi, postApi, deleteApi } from '../../utils/api';
import './index.css'


function UserForm() {

  const [users, setUsers] = useState('');
  const [state, setState] = React.useState({
    firstName: "", lastName: "", username: "", dob: ""
  });

  useEffect(() => {
    getUsers()
    }, []);

  //get, post and delete function ------->

  const getUsers = async() =>{ 
    await getApi('users').then(data => {
      let response = data.data;
      console.log(response)
      setUsers(response)
    })
  }

  const postUser = () => {
    postApi('user', { first_name: state.firstName, last_name: state.lastName, username: state.username, date_of_birth: state.dob })
    .then((response) => {
          window.location.reload(false); //reload window to get the current data
          return response
        }, (error) => {
          console.log(error);
        });
      }
  
  const deleteUser = (username) => {
    deleteApi(username)
    .then((response) => {
          console.log(response);
          return response
        }, (error) => {
          console.log(error);
        });
      }
      
  //handles multiple form input changes   
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    postUser();
    setState({ firstName: "", lastName: "", username: "", dob: "" });
  };

  
  return (

    <div className='user_list'>

    <form className='input-form'>
    
      <div className='input-div'>

      <label> First name</label>
        <input
          placeholder='First name'
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
          className='input'
        />
      
      <label>Last name</label>
        <input
          placeholder='Last name'
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          className='input'
        />      
      </div>

      <div className='input-div'>
      <label> Username</label>
        <input
          placeholder='Username'
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          className='input'
        />
  
      <label> Date of Birth</label>
        <input
          placeholder='Date of Birth'
          type="text"
          name="dob"
          value={state.dob}
          onChange={handleChange}
          className='input'
        />    
      </div>

          <button 
            onClick={ handleSubmit }
            className='input-button'>
              Submit
          </button>
    
      
    </form>


    <User users={users} deleteUser={deleteUser} /> 

    </div>
  );
}

export default UserForm;