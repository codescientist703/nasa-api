import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components'
import { Row, Col} from 'react-bootstrap'
const Styles = styled.div`
min-height: 150vh;
background: url("https://i.pinimg.com/originals/a4/2c/b2/a42cb26495634c596ece8be79b510f88.jpg") no-repeat center center fixed;
font-family: 'Libre Franklin', sans-serif;
color: #79D9D1;
h2{
	padding: 30px;
	text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.exp-box{
	background-color: #B030B0;
	opacity: 0.7;
	font-weight: bold;
	color: white;
	border: 4px solid #621724;
	font-size: 18px;
	border-radius: 14px;
} 
img{
	border: 4px solid #2253D1;
	border-radius: 14px;

}
h3{
	padding-bottom: 10px;
}
iframe{
  border: 4px solid #2253D1;
	border-radius: 14px;

}
`
export default function Picofday(props) {

  const [data,setData] = useState('')
  const API_KEY = "nF4OG94II0ddNJs44tEt30GdBZ4wbZQegJaK7ytX"
  const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&hd=true`

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setData(data)
  }
  return(

    <Styles className="container-fluid padding">
    <Row className="text-center">
      <div className="col-12">
        <h2>Astronomy Picture of The Day</h2>
      </div>
      <Col md={12} lg={8}>
        {data.hdurl ? 
          <img src={data.hdurl} className="img-fluid" alt='picofday'/> :
          <div class="embed-responsive embed-responsive-4by3">
            <iframe src={data.url} allowFullScreen title='video of the day'>
            </iframe> 
          </div>
        }
      </Col>
      <Col md={12} lg={4} className="jumbotron fluid exp-box">
        <h3>Explanation</h3>
        {data.explanation}
      </Col>
    </Row>
    </Styles>
    
  )
}

