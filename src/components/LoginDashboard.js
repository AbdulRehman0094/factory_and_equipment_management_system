import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { addUser, getAllUsers, isUserExist } from '../interactions/usersContract'

function LoginDashboard() {

  const [input, setVal] = useState('');

  useEffect(() => {
    getAllUsers();
  })



  const handleInput = (event) => {
    setVal(event.target.value);
  };


  const loginFunc =async () => {
    debugger;
 
    const result = await isUserExist(input);
 
 
     if(!result){
 
       addUser(input);
       localStorage.setItem("userAddress",input);
     }
     else{
       localStorage.setItem("userAddress",input);
 
     }
   
 
   }
  return (
    <>
      <div className='header'>
        <div className='text'>Factory Managment System</div>
      </div>

      <div className='cards1'>
        <div className='cardchild'>
          <div className='text1'>Dashboard Login</div>
          <div>
            <p>Enter User ID:</p>
            <input className=''
              type="text"
              value={input}
              onChange={handleInput}
            />
          </div>
          <Link to='/dashboard'>
            <button onClick={loginFunc} disabled={input.length === 0}>Login</button>
          </Link>


        </div></div>

    </>
  )
}

export default LoginDashboard