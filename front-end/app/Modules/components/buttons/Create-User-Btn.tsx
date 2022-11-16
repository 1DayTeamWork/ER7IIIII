import React, { useState } from 'react'
import UserAddForm from '../forms/user/UserAddForm';
import tw from 'tailwind-styled-components'

const Wrapper = tw.div`
lg:ml-40
ml-10
space-x-8
`


const CreateUserBtn = () => {
  const [show, setshow] = useState(false)
  const handleShowChange = (e: any) => {
    e.preventDefault();
    return setshow(!show)
  }
  return (
    <div>
      <Wrapper />
      
              <button className='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer' onClick={(e)=> {handleShowChange(e)}}>
                Creat New User
              </button>
              {show ? <UserAddForm show={setshow}/> : <></>}
            
      
      
    </div>
  )
}

export default CreateUserBtn
