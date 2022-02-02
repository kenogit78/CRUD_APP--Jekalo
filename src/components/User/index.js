import React from 'react';
import './index.css'
import Trash from '../../assets/trash.svg'


function User({users, deleteUser}) {
  return (
  <div className='user'>  
    <div className='user_header'>
        <p> Users</p>
    </div>
    {
        users ?  users.map((user) => ( 
        <div className='user_content'>
            <section className='name_details'>        
                <ul >
                    <li className='name_prefix'>{user.name_prefix} </li>
                    <li className='name' >{user.username}</li>
                    <li className='name'> {`${user.first_name} ${user.last_name}`}</li>
                </ul>
            </section> 

            <section className='date_delete'>
                <ul >
                    <li  className='name'>{user.date_of_birth}</li>
                    <li 
                    className='trash'
                    onClick={ () =>{ deleteUser(user.username) }}
                    ><img src={Trash} alt={Trash} /></li>
                </ul>
            </section>

    </div>
    ) 
    ): "Loading data"
}      
  </div>
  )
}

export default User;
