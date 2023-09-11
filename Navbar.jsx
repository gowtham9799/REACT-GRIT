import React from 'react'
import { FaFilter } from 'react-icons/fa';



function Navbar() {
  return (
    <container-fluid className="nav" style={{}}>
  <div
    className="navbar"
    style={{
      display: "flex",
      backgroundColor: "white",
      width: "100%",
      height: 80
    }}
  >
    <div>
      <h1
        style={{
          width: 130,
          fontSize: 32,
          color: "#0084ff",
          paddingLeft: 80,
          paddingTop: 10
        }}
      >
     
        <a href="./intex.html">EDYODA</a>
      </h1>
      <h6
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          font: "raleway",
          margin: 0,
          paddingLeft: 110,
          paddingTop: 1,
          fontSize: 20
        }}
      >
        stories
      </h6>
    </div>
   <p style={{marginLeft:"700px"}} >EdYoda is a learning and knowledge<br />
sharing platform for techies</p>
<button className='navbutton'>Go to my main website</button>
  </div>
   
 <div style={{display:'flex',backgroundColor:' #f2f6ff'}}>
 <div style={{marginTop:'125px',marginLeft:'200px'}}>
    <img style={{height:"500px"}} src='https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg'></img>
</div>
<div style={{marginTop:'125px',marginLeft:'20px'}}>
    <img  style={{height:'250px',height:'250px'}} src='https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg'></img>
    <img style={{height:'250px',height:'250px',width:'374px'}} src='https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg' ></img>
</div>

 </div>


  


  <container-fluid className="nav" style={{}}>
  <div
    style={{
      display: "flex",
      backgroundColor: "#f2f6ff",
      paddingTop: 120
    }}
  >
    <h1 style={{ width: 70, fontSize: 32, color: "#0084ff", paddingLeft: 80 }}>
    <div><FaFilter/></div> 
    </h1>
    <h1 style={{ fontSize: 14, fontWeight: 600, paddingTop: 8 }}>
      Filter By Category
    </h1>
  </div>
  <div
    className=""
    style={{
      display: "flex",
      backgroundColor: "#f2f6ff",
      width: "100%",
      height: 80,
      paddingTop: 10
    }}
  >
    <div className="dropdown" style={{ marginLeft: 50, marginTop: 15 }}>
      <a className="fill" href="./intex.html">
        All
      </a>
      <a className="fil" href="./nav1.html">
        Artificial Intelligence
      </a>
      <a className="fil" href="./nav2.html">
        Cloud Computing
      </a>
      <a className="fil" href="./nav3.html">
        DevOps
      </a>
      <a className="fil" href="./nav4.html">
        Programming Languages
      </a>
      <a className="fil" href="./nav5.html">
        Mobile Application Development
      </a>
      <a className="fil" href="./nav6.html">
        Technology And Tools
      </a>
      <a className="fil" href="./nav7.html">
        Get a JOB in a Tech Company
      </a>
    </div>
  </div>
</container-fluid>

</container-fluid>

  )
}

export default Navbar