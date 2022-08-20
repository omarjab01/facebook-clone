import React from 'react'

const Right = () => {
  return (
    <div className='p-6 flex justify-center items-center'>
        <div className='mx-12'>
            <div className='bg-white p-3 flex flex-col rounded-lg gap-3 shadow-xl'>
                <input type="text" placeholder='E-mail o numero di telefono'
                    className='p-2 rounded border'            
                />
                <input type="password" placeholder='Password' 
                    className='p-2 rounded border' 
                />
                <button className='bg-blue-500 py-2 rounded-lg text-white text-xl my-2 font-medium'>Accedi</button>
                <span className='text-blue-500 text-xs text-center'>Password dimenticata?</span>
                <hr />
                <button className='bg-green-500 text-white py-2 rounded-lg mx-12 text-sm font-medium my-2'>Crea nuovo account</button>
            </div>
            <p className='text-sm font-base mx-2 my-2 text-center'>
                <strong>Crea una Pagina</strong> per un personaggio famoso, un brand o un'azienda.
            </p>
        </div>
        
    </div>
  )
}

export default Right