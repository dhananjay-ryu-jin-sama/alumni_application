import React from 'react'
import '../styles/contact.css'
import Footer from '../components/Footer'

class Graph extends React.Component {
render() {
  return (
    <div>
      <div className='one'>
          <h1>Contact Us</h1>
      </div>
      <div className='content'>
          <h2>
          <b>PSG Institute of Technology and Applied Research </b><br></br>
          Avinashi Road, Neelambur<br></br>
          Coimbatore - 641 062<br></br>
          Tamilnadu.<br></br>
          <b>Phone No :</b> 0422 3933 666<br></br>
          <b>Mobile No :</b> +9187540 42807 , +9187540 42808<br></br>
          <b>Fax No :</b> 0422 3933456<br></br>
        </h2> 
      </div> 
    <Footer/>
</div>
  );
}
}
export default Graph