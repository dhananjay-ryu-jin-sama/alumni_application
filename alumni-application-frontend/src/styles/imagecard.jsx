import React from "react";


const Imagecard =({headings,image1})=>{
    return(
        <div className="flexbox">
            
        <div className="imageheading">{headings?headings:"NO TITLE"}</div>
        
        {image1 ?
        <img className="image" src={image1} alt="" />
        :<img src="emptyimg.webp" alt=""/>
        }
        
        

        
        
        </div>
    );
}
export default Imagecard;