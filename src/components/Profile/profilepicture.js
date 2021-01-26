import React, { useRef } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'


  //   axios({
  //     method: 'post',
  //     url: newurl,
  //     data: {
  //         aboutPetText: petBoxInfo.aboutPetText,
  //         name: petBoxInfo.name
  //     }

  // })  


function ProfilePicture() {
    const UploadedImage = useRef(null);
    const ImageUploader = useRef(null);

    const handleImageUpload = e => {
      //possibly putting axios request here
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = UploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={ImageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        onClick={() => ImageUploader.current.click()}
      >
        <img
          ref={UploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute"
          }}
        />
      </div>
      Click to upload Image
    </div>
  );
}


export default ProfilePicture;