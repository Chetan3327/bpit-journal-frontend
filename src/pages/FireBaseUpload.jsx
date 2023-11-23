import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function FireBaseUpload({title='UploadFile', setFirebaseUrl}) {
  const [Image, SetImage] = useState(null);
  function UploadImage() {
    if (Image == null) return;
    const imageref = ref(storage, `images/${Image.name + v4()}`);

    uploadBytes(imageref, Image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log("Download URL:", url);
          setFirebaseUrl(url)
        });
    });
  }

  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
        <div className='flex flex-col p-5 my-32 bg-white rounded-xl max-w-[80%] min-h-[40%] shadow-2xl border-2 border-black'>
            <h1 className='text-black text-3xl font-bold mb-3'>{title}</h1>  
            <div className="input-container ic2 mb-4">
                <input
                    id="email"
                    className="input"
                    type="file"
                    onChange={(event) => {
                    SetImage(event.target.files[0]);
                    }}
                />

            </div>

            <button type="text" className="p-2 px-4 border-1 bg-purple-500 text-white" onClick={UploadImage}>submit</button>
      </div>
    </div>
  );
}

export default FireBaseUpload;