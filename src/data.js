// rooms images
import Room1Img from './assets/img/rooms/1.jpeg';
import Room1ImgLg from './assets/img/rooms/1-lg.jpeg';
import Room2Img from './assets/img/rooms/2.jpeg';
import Room2ImgLg from './assets/img/rooms/2-lg.jpeg';
import Room3Img from './assets/img/rooms/3.jpeg';
import Room3ImgLg from './assets/img/rooms/3-lg.jpeg';
import Room4Img from './assets/img/rooms/4.jpeg';
import Room4ImgLg from './assets/img/rooms/4-lg.jpeg';
import Room5Img from './assets/img/rooms/5.jpeg';
import Room5ImgLg from './assets/img/rooms/5-lg.jpeg';
import Room6Img from './assets/img/rooms/6.jpeg';
import Room6ImgLg from './assets/img/rooms/6-lg.jpeg';

// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Cabaña 1',
    description:
      'Cabaña con parqueadero, wifi, zona BBQ, zona de camping.\nEstá completamente equipada para 18 personas, tiene acceso a piscinas, Jacuzzi, Turco y demás atracciones de la finca',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 18,
    price: 1400000,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Cabaña Maderos',
    description:
      'Cabaña con parqueadero, wifi, zona BBQ, zona de camping.\nEstá completamente equipada para 12 personas, tiene acceso a piscinas, Jacuzzi, Turco y demás atracciones de la finca',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 12,
    price: 1050000,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Cabaña 2',
    description:
    'Cabaña con parqueadero, wifi, zona BBQ, zona de camping.\nEstá completamente equipada para 8 personas, tiene acceso a piscinas, Jacuzzi, Turco y demás atracciones de la finca',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 8,
    price: 400000,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Cabaña 3',
    description:
    'Cabaña con parqueadero, wifi, zona BBQ, zona de camping.\nEstá completamente equipada para 8 personas, tiene acceso a piscinas, Jacuzzi, Turco y demás atracciones de la finca',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 8,
    price: 400000,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Habitación Individual',
    description:
    'Cabaña con parqueadero, wifi, zona BBQ, zona de camping.\nEstá completamente equipada para 3 personas, tiene acceso a piscinas, Jacuzzi, Turco y demás atracciones de la finca',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 3,
    price: 220000,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Centro Recreativo',
    description:
    'Cabaña con parqueadero, wifi, zona BBQ, zona de camping.\nEstá completamente equipada para 34 personas, tiene acceso a piscinas, Jacuzzi, Turco y demás atracciones de la finca',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    maxPerson: 34,
    price: 1650000,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
];
