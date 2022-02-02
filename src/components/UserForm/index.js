import React, { useState, useEffect } from 'react';
import User from '../User';
import { getApi, postApi, deleteApi } from '../../utils/api';
import './index.css'


function UserForm() {

  const [users, setUsers] = useState('');
  const [value, setValue] = useState('Date of Birth');
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
          return response
        }, (error) => {
          console.log(error);
        });
      }
      
  //handles multiple form input changes------->
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
        />
      
      <label>Last name</label>
        <input
          placeholder='Last name'
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
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
        />
  
      <label> Date of Birth</label>
        <input
          placeholder={ value }
          type="text"
          name="dob"
          onClick={ () => setValue('DD/MM/YYYY')}
          value={state.dob}
          onChange={handleChange}
        />    
      </div>

      <div>
          <button 
            onClick={ handleSubmit }
            className='input-button'>
              Submit
          </button>
      </div>
      
    </form>

    <User users={users} deleteUser={deleteUser} /> 

    </div>
  );
}

export default UserForm;