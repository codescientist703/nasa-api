import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
min-height: 150vh;
background: url("https://i.pinimg.com/originals/a4/2c/b2/a42cb26495634c596ece8be79b510f88.jpg") no-repeat center center fixed;
font-family: 'Libre Franklin', sans-serif;
color: #79D9D1;
  
`
const Layout = (props) =>(
	<Styles className="container-fluid padding"> 
	  {props.children}
	</Styles>
)
export default Layout

