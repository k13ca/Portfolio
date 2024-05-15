// import "../App.css";
// import "../style.css";
// import { useState, forwardRef } from "react";
// import GalleryView from "./galleryview";
// import Title from "../title";
// import { gallery } from "../consts/consts";

// const Gallery = forwardRef(function Gallery(props, ref) {
//   const [showPhoto, setShowPhoto] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState(null);

//   const dividedArrayIntoColumns = (array) => {
//     const dividedArray = [];
//     for (let i = 0; i < 6; i++) {
//       dividedArray.push([array[i], array[i + 6], array[i + 12]]);
//     }
//     console.log(dividedArray);
//     return dividedArray;
//   };

//   const galleryOutput = dividedArrayIntoColumns(gallery);

//   return (
//     <>
//       {showPhoto && (
//         <GalleryView
//           isShown={showPhoto}
//           close={setShowPhoto}
//           photo={currentPhoto}
//         ></GalleryView>
//       )}

//       <section className="gallerybox" id="gallery" ref={ref}>
//         <Title title={"Gallery"}></Title>

//         <div className="gallery">
//           <div className="obj3"></div>
//           {galleryOutput.map((column, index) => (
//             <div key={index} class="column">
//               {column.map((element, innerIndex) => (
//                 <img
//                   onClick={() => {
//                     setShowPhoto(true);
//                     setCurrentPhoto(element);
//                   }}
//                   key={innerIndex}
//                   src={element}
//                 />
//               ))}
//             </div>
//           ))}
//           <div className="footer">
//             <h5></h5>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// });
// export default Gallery;
