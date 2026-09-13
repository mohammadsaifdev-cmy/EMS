import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex h-10 items-end justify-between'>

      <h1 className='text-2xl'>
        Hello <br />

        <span className='text-3xl'>
          {props.data ? props.data.firstName : 'Admin'} 👋
        </span>

      </h1>

      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg text-white px-4 py-2 rounded-md'
      >
        LogOut
      </button>

    </div>
  )
}

export default Header