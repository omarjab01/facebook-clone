import React from 'react'
import Left from './Left'
import Right from './Right'

const Top = () => {
  return (
    <div className='w-screen h-4/5 bg-gray-200 flex flex-row justify-center'>
        <div className='max-w-5xl mx-auto grid grid-cols-2'>
            <Left/>
            <Right />
        </div>
    </div>
  )
}

export default Top