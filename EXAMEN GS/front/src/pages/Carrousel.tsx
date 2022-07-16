import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, {useState } from 'react';
import Carousel from "react-simply-carousel";
import { CluthFrenos } from '../core/interface/CluthFrenos';
import Tarjeta from './Tarjeta';

type propsData = {
  arrayData: CluthFrenos[]
}

function Carrusel(props: propsData) {
  const itemData = props.arrayData;
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(itemData)
  return (
     <Carousel
       containerProps={{
         style: {
           width: "100%",
           height: '100%',
           justifyContent: "center",
           userSelect: "auto"
         }
       }}
       activeSlideIndex={activeSlide}
       onRequestChange={setActiveSlide}
       itemsToShow={10}
       itemsToScroll={1}
       activeSlideProps={{
         style: {
           background: "blue"
         }
       }}
       forwardBtnProps={{
         children: <ChevronRightIcon/> ,
         style: {
           width: 60,
           height: 60,
           minWidth: 60,
           alignSelf: "center"
         }
       }}
       backwardBtnProps={{
         children: <ChevronLeftIcon/>,
         style: {
           width: 60,
           height: 60,
           minWidth: 60,
           alignSelf: "center"
         }
       }}
       dotsNav={{
         show: true,
         itemBtnProps: {
           style: {
             height: 16,
             width: 16,
             borderRadius: "50%",
             border: 0
           }
         },
         activeItemBtnProps: {
           style: {
             height: 16,
             width: 16,
             borderRadius: "50%",
             border: 0,
             background: "black"
           }
         }
       }}
       speed={300}
     >
    {itemData.map((item, i) => (
       <Tarjeta arrayData={[item]} key={i}/>
     ))}
     </Carousel>
  );
}

export default Carrusel;