import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../services/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//Asssets
import IcStar from "../../../assets/icons/ic_star.svg"

export function CreateReview() {
    const [imageUploadState, setImageUploadState] = useState(null);
    const [reviewState, setReviewState] = useState({
        bookTitle: "",
        bookAuthor: "",
        score: 5.0,
        image: "",
        reviewDescription: "",
        hashtagText: "",
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
        const imageRef = ref(storage, `images/review/${Math.floor((Math.random() * 1000000)).toString() + imageUploadState.name}`);
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
    const createPost = (event) => {
        event.preventDefault()
    }
    //TODO añadir las chips de la reseña
    return (
        <div className="createReview">

            <form onSubmit={(event) => createPost(event)}>
                <div className="createReview__container">
                    <div className="createReview__wrapper-top">
                        <div className="createReview__image__container">

                        </div>
                        <div className="w-34 h-34" id="image-input__container">
                            <input onChange={(event) => { uploadImage(event) }} type="file" name="image" id="image-input" className="w-full h-full" accept="image/png, image/jpeg, image/jpg" />
                        </div>
                    </div>

                    <div className="createReview__wrapper-bot">
                        <div class="slidecontainer">
                            <div className="flex flex-row justify-between">
                                <label htmlFor="score" className="text-primary">Score</label>
                                <div className="createReview__score flex flex-row">
                                    <span className="text-primary px-1">{reviewState.score}</span>
                                    <img src={IcStar} alt="Star Icon" />
                                </div>
                            </div>
                            <input type="range" min="1" max="10" value="5" class="slider" id="score" />
                        </div>
                        <div className="createReview__row flex flex-row">
                            <div className="flex flex-col w-6/12 p-1">
                                <label htmlFor="bookTitle"><span>Title</span></label>
                                <input id="bookTitle" type="text" value={reviewState.bookTitle} placeholder="Title" />
                            </div>
                            <div className="flex flex-col w-6/12 p-1">
                                <label htmlFor="bookAuthor"><span>Author</span></label>
                                <input id="bookAuthor" type="text" value={reviewState.bookAuthor} placeholder="Author" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description">Review</label>
                            <textarea placeholder="Review Description" name="description" id="description" cols="30" rows="10" />
                        </div>
                        <div className="flex flex-col w-6/12 p-1">
                            <label htmlFor="hashtags"><span>Author</span></label>
                            <input id="hashtags" type="text" value={reviewState.hashtagText} placeholder="Hashtag" />
                        </div>
                        <div className="createReview__hashtag__container">

                        </div>

                    </div>
                </div>

                <input type="submit" value="Publish" />
            </form>

        </div>
    )
}