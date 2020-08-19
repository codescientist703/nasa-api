import React, { useState } from 'react'; 
import styled from 'styled-components'
import { Row, Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
const Styles = styled.div`
background: url('https://i.pinimg.com/originals/73/1f/55/731f55b90a452f13e6b8983df1bd9860.jpg') no-repeat center center fixed ;
padding: 0;
margin: 0;
min-height: 150vh;
font-family: 'Libre Franklin', sans-serif;
color: white;
h3{
	text-align: center;
	padding: 30px;
	color: wheat;

}
.form-control{
	width: 90%;
	margin-left: 20px;
}
label{
	margin-left: 20px;
}

`

export default function Mars(props) {
	const [rover,setRover] = useState({
		model : 'curiosity',
		camera: 'fhaz',
		year : '2018-02-02'
	})
	const history = useHistory()
	const handleChange = async(e) =>{
		e.preventDefault()
		const API_KEY = "nF4OG94II0ddNJs44tEt30GdBZ4wbZQegJaK7ytX"
		const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.model}/photos?earth_date=${rover.year}&camera=${rover.camera}&api_key=${API_KEY}`
        const response = await fetch(URL)
        const dataa = await response.json()
      
        history.push('/mars/gallery',{
        	data: dataa.photos
		})
	}
	
	return(
		<Styles className="container-fluid padding">
		<h3> Get amazing pictures of Mars taken by opportunity, spirit and curiosity rovers.</h3>
        <Row className="justify-content-center">

        <Form onSubmit={handleChange}>
     
        <div class="form-group col-12 padding">
        <label for="exampleFormControlSelect1">Enter the rover model</label>
	     <select class="form-control" name="cameras"
	       onChange={e => setRover({...rover,model:e.target.value})}>
	      <option value="curiosity">Curiosity</option>
	      <option value="opportunity">Opportunity</option>
	      <option value="spirit">Spirit</option>
	   
        </select>
        </div>
	    <div className="form-group col-12">
	      <label for="years">Enter the Year</label>
	      <input type="date" className="form-control" 
	            onChange={e => setRover({...rover,year:e.target.value})}/>
	    </div>
	    <div class="form-group col-12">
        <label for="exampleFormControlSelect1">Enter the camera</label>
	    <select class="form-control" name="cameras"
	       onChange={e => setRover({...rover,camera:e.target.value})}>
	      <option value="fhaz">Front Hazard Avoidance Camera</option>
	      <option value="rhaz">Rear Hazard Avoidance Camera</option>
	      <option value="navcam">Navigation Camera</option>
	      <option value="mast">Mast Camera( only for Curiosity )</option>
	      <option value="chemcam">Chemistry and Camera Complex( only for Curiosity )</option>
	      <option value="mahli">Mars Hand Lens Image( only for Curiosity )</option>
	      <option value="mardi">Mars Descent Image( only for Curiosity )</option>
        </select>
        </div>
        <div className="col-12">
	    <button type="submit" className="btn btn-primary m-3" >Submit</button>
	    </div>
	    </Form>
        </Row>
        </Styles>
	)
}