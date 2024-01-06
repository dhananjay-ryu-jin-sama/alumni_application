import "../styles/gallery.css";
import Imagecard from "../styles/imagecard.jsx";
const Gallery = () => {
  const showAlert = () => {
    alert('This will take back to previous page');
  };
  const imageList = [
    {url:"src/assets/futuristic-adult-virtual-reality-handsfree-headset-generated-by-ai.jpg",imagtitle:"image1"},
    {url:"homepage-OpenStack-SFAs.png",imagtitle:"image2"},
    {url:"network hardware upgrades.png",imagtitle:"image3"},
    {url:"packetloss.png",imagtitle:"image4"},
    {url:"logo192.png"},
    {url:"20231215_142109.jpg"}
  ];
  
  const urlcomp = imageList.map((data) =>{
      return (
        <Imagecard image1={data.url}
                  headings={data.imagtitle}
        />
      )
  })
  return (
    <div className="main_div">
      <div className="header">
        <div className="headings">
        <div className="gallery"><h1>Gallery</h1></div>
        <div className="back">
          <button className="backbutton" onClick={showAlert}>Back {">"}</button>
        </div>
        </div> 
        <div className="underline"><h1>______</h1></div>
      </div>
      
      <div>
        <div className="flexboxcontainer">

        {urlcomp}

        {/*
        <Imagecard headings="flexbox1" image1="futuristic-adult-virtual-reality-handsfree-headset-generated-by-ai.jpg"/>
        <Imagecard headings="flexbox2" image1="logo192.png"/>
        */}
      </div>
      </div>
      
    </div>
    
  );
}

export default Gallery;