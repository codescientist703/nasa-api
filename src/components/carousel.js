import React from 'react'
import {Carousel} from 'react-bootstrap'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
const Styles = styled.div`
background: url('https://i.pinimg.com/originals/73/1f/55/731f55b90a452f13e6b8983df1bd9860.jpg') no-repeat center center fixed ;
padding: 0;
margin: 0;
min-height: 150vh;
h2{
	padding: 30px;
	text-align: center;
	color: tan;
}
  
`

const Gallery = () => {
	const location = useLocation();
	const [images,setImages] = useState('')
	useEffect(() => {
    setImages(location.state.data)
    },[])
    if (images.length === 0) return <Styles><h2>Sorry Please try again!</h2></Styles>
	return(
		<Styles>
		<h2>Enjoy the magnificent images</h2>
		<div class="col-12">  
		<Carousel >
		  { images.map(image => (
		  	<Carousel.Item >
		    <img
		      src={image.img_src}
		      alt="First slide"
		      className="mx-auto d-block img-fluid w-65"
		    />
		  </Carousel.Item>
		  )) }
		</Carousel>
		 </div>
		</Styles>
	)

}

export default Gallery