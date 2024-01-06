import React from 'react';


function Gallery(){
/*
  useEffect(() => {
    document.title = 'Alumni';
  }, []);
*/
  return (
    <div>
      <div className='container'>
        <div className='title'>
          <h2>GALLERY</h2>
        </div>
        <div className='view-more'>
          <a href='../pages/Gallery.js' >VIEW MORE {">"}</a>
        </div>
        <div className='items'>
          <div className='item'>Item 1</div>
          <div className='item'>Item 2</div>
          <div className='item'>Item 3</div>
          <div className='item'>Item 4</div>
          <div className='item'>Item 5</div>
        </div>
      </div>
    </div>
  );
}


export default Gallery;
