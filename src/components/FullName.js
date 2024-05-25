import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext';

const FullName = () => {
    const {handleInputName} = useContext(RoomContext);
    
    return (
        <div className='relative flex items-center justify-end h-full'>
            <input 
                type='text' 
                placeholder='Nombre y Apellido' 
                className='bg-white w-full h-full text-center'
                onChange={handleInputName}
            />
        </div>
    )
}

export default FullName;