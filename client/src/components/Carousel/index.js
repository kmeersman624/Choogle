import React from 'react'
import {Carousel} from "react-materialize";
import Resources from "../Card"
export default function Slider(){
return(
<Carousel
  carouselId="Carousel-2"
  images={[
    <Resources/>,
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2',
    'https://picsum.photos/200/300?image=3',
    'https://picsum.photos/200/300?image=4'
  ]}
  options={{
    dist: -100,
    duration: 200,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    numVisible: 5,
    onCycleTo: null,
    padding: 0,
    shift: 0
  }}
/>
)
}
