import React, { createContext, useEffect, useState } from 'react';
// data
import { roomData } from '../data';
// import { FaUserAstronaut } from 'react-icons/fa';
// import axios
import axios from 'axios';
// create context
export const RoomContext = createContext();

const RoomProvider = ({children}) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [fullName, setFullName] = useState('');
  const [guestDni, setGuestDni] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleInputName = (event) => {
    setFullName(event.target.value);
  };

  const handleInputDni = (event) => {
    setGuestDni(event.target.value);
  }

  const handleSubmit = async (event) => {
    const data = {
      guestName: fullName,
      guestDni: guestDni,
    };

    try {
      const response = await axios.post('http://localhost:5000/bookings', data);
      console.log(response.data.message);
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  };
  
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  }, [adults, kids]);
  
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // Filter rooms based on total persons
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson
    })
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000)
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, fullName, setFullName, guestDni,
        setGuestDni, handleClick, loading, handleSubmit, handleInputName, handleInputDni }}
    >
      {children}
    </RoomContext.Provider>
  )
};

export default RoomProvider;
