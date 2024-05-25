import React, {useContext} from 'react'
import { RoomContext } from '../context/RoomContext';

const GuestDni = () => {
    const {handleInputDni} = useContext(RoomContext);

    return (
        <div className='relative flex items-center justify-end h-full'>
            <input 
                type='number'
                placeholder='DNI' 
                className='bg-white w-full h-full text-center' 
                onChange={handleInputDni}
            />
        </div>
    )
}

export default GuestDni;