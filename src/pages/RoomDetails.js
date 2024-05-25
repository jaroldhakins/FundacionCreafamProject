import React, {useContext } from 'react';
import { useParams } from 'react-router-dom';
// components
// import AdultsDropdown from '../components/AdultsDropdown';
// import KidsDropdown from '../components/KidsDropdown';
import FullName from '../components/FullName';
import GuestDni from '../components/GuestDni';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
// scroll top component
import ScrollToTop from '../components/ScrollToTop';
// context
import { RoomContext } from '../context/RoomContext';
// icons
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const {rooms, handleSubmit } = useContext(RoomContext);
  const {id} = useParams();

  // get room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  })

  // destructure room
  const {name, description, facilities, imageLg, price} = room;

  return (
    <section>
      <ScrollToTop />
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[600px] lg:h-[560px] relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Detalles</h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* left */}
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='' />
            {/* facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p mb-12>{description}</p>
              {/* grid */}
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  // desctructure item
                  const {name, icon} = item
                  return (
                    <div className='flex items-center gap-x-3 flex-1' key={index}>
                      <div className='text-3xl'>{icon}</div>
                      <div className='text-base'>{name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-full lg:w-[40%]'>
            {/* reservation */}
            <div className='py-8 px-6 bg-blue-400 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Tu Reserva</h3>
                <div className='h-[60px]'>
                  <FullName />
                </div>
                <div className='h-[60px]'>
                  <GuestDni />
                </div>
                <div className='h-[60px]'>
                  <CheckIn />
                </div>
                <div className='h-[60px]'>
                  <CheckOut />
                </div>
                <button onClick={handleSubmit} className='btn btn-lg btn-primary w-full'>
                  Reserva Ahora Por ${price}
                </button>
              </div>
            </div>
            {/* rules */}
            <div>
              <h3 className='h3'>Reglas Del Centro Recreativo</h3>
              <p className='mb-6'>{description}</p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-blue-400'/>
                  Hora Ingreso: 3:00 - 9:00 PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-blue-400'/>
                  Hora Salida: 10:30 AM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-blue-400'/>
                  No se permiten mascotas en las zonas humedas
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-blue-400'/>
                  Prohibido Fumar, fuera de la zona de fumadores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default RoomDetails;
