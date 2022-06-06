import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../services/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export function CreateReview() {
    const [imageUploadState, setImageUploadState] = useState(null);
    const [reviewState, setReviewState] = useState({
        bookTitle: "",
        bookAuthor: "",
        score: 5.0,
        image: "",
        reviewDescription: "",
        hashtags: []
    })



    const uploadImage = (event) => {
        console.log(event.target.files[0].name)
        let link = URL.createObjectURL(event.target.files[0]);
        setImageUploadState(event.target.files[0]);
        //imageAsBg("image-input", "image-input__container")
        uploadToFireBase()
    }

    const uploadToFireBase = () => {
        console.log(imageUploadState == null ? "true" : "false")
        if (imageUploadState == null) return;
        const imageRef = ref(storage, `images/review/${Math.floor((Math.random() * 1000)).toString() + imageUploadState.name}`);
        uploadBytes(imageRef, imageUploadState).then((response) => {
            getDownloadURL(response.ref).then((url) => {
                setReviewState({ ...reviewState, image: `${url}` })
                console.log("Your link " + url)
            })
        })
    }

    const imageAsBg = (inputId, container) => {
        document.getElementById(container).style.backgroundImage = `url('${imageUploadState}')`;
        document.getElementById(container).style.border = "1px solid rgba(175, 175, 175, 0.862)"
        document.getElementById(inputId).style.opacity = "0";
    }

    return (
        <div className="createReview__container">

            <div className="w-34 h-34" id="image-input__container">
                <input onChange={(event) => { uploadImage(event) }} type="file" name="image" id="image-input" className="w-full h-full" accept="image/png, image/jpeg, image/jpg" />
            </div>

        </div>
    )
}