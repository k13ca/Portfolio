import "../App.css";
import "../style.css";
import { useState } from "react";
import GalleryView from "./galleryview";
import Title from "../title";
import { gallery } from "../consts/consts";
function Gallery() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const dividedArrayIntoColumns = (array) => {
    const dividedArray = [];
    for (let i = 0; i < 6; i++) {
      dividedArray.push([array[i], array[i + 6], array[i + 12]]);
    }
    console.log(dividedArray);
    return dividedArray;
  };

  const galleryOutput = dividedArrayIntoColumns(gallery);
  return (
    <>
      {/* 
    <div className='photoviev'></div> */}

      {showPhoto && (
        <GalleryView
          isShown={showPhoto}
          close={setShowPhoto}
          photo={currentPhoto}
        ></GalleryView>
      )}

      <section className="gallerybox" id="gallery">
        <Title title={"Gallery"}></Title>
        {/* <div className='gallery'>
            <div class="column">
                <img src={pjcbg}  onClick={() => {setShowPhoto(true); setCurrentPhoto(pjcbg)}}></img>
                <img src={p4}></img>
                <img src={photoshop}></img>

             
            </div>
            <div class="column">
                <img src={p1} onClick={() => {setShowPhoto(true); setCurrentPhoto(p1)}}></img>
                <img src={pjcbg}></img>
                <img src={pjcbg}></img>
           
            </div>
            <div class="column">
                <img src={html} onClick={() => {setShowPhoto(true); setCurrentPhoto(html)}}></img>
                <img src={pjcbg}></img>
                <img src={p5}></img>
         
            </div>
            <div class="column">
                <img src={pjcbg}></img>
                <img src={p5}></img>
                <img src={pjcbg}></img>
            </div>
            <div class="column">
                <img src={p3}></img>
                <img src={figma}></img>
                <img src={css}></img>
            </div>
            <div class="column">
                <img src={pjcbg}></img>
                <img src={react}></img>
                <img src={p2}></img>
            </div>

        </div> */}
        <div className="gallery">
          <div className="obj3"></div>
          {galleryOutput.map((column, index) => (
            <div key={index} class="column">
              {column.map((element, innerIndex) => (
                <img key={innerIndex} src={element} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
