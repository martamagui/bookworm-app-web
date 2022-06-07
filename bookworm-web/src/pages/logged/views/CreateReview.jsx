import React, { useState } from "react";
import { Link } from "react-router-dom";

//Asssets
import IcStar from "../../../assets/icons/ic_star.svg";

//Hooks
import { useNewReview } from "../../../hooks/useNewReview";

export function CreateReview() {
    const [imageUploadState, setImageUploadState] = useState(null);
     const {reviewState, uploadImage} =  useNewReview();

    const imageAsBg = (inputId, container) => {
        document.getElementById(container).style.backgroundImage = `url('${imageUploadState}')`;
        document.getElementById(container).style.border = "1px solid rgba(175, 175, 175, 0.862)"
        document.getElementById(inputId).style.opacity = "0";
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

                    <div className="createReview__wrapper-bot bg-surface rounded-b-xl p-3">
                        <div class="slidecontainer">
                            <div className="flex flex-row justify-between">
                                <label htmlFor="score" className="text-primary">Score</label>
                                <div className="createReview__score flex flex-row">
                                    <span className="text-primary px-1">{reviewState.score}</span>
                                    <img src={IcStar} alt="Star Icon" />
                                </div>
                            </div>
                            <input type="range" min="1" max="10" value="5" className="slider" id="score" />
                        </div>
                        <div className="createReview__row flex flex-row">
                            <div className="flex flex-col w-6/12 p-1">
                                <label htmlFor="bookTitle"><span className="text-primary px-3">Title</span></label>
                                <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface" id="bookTitle" type="text" value={reviewState.bookTitle} placeholder="Title" />
                            </div>
                            <div className="flex flex-col w-6/12 p-1">
                                <label htmlFor="bookAuthor"><span className="text-primary px-3">Author</span></label>
                                <input  className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface" id="bookAuthor" type="text" value={reviewState.bookAuthor} placeholder="Author" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description"><span className="text-primary px-3">Review</span></label>
                            <textarea  className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface" placeholder="Review Description" name="description" id="description" cols="30" rows="10" />
                        </div>
                        <div className="flex flex-col p-1">
                            <label htmlFor="hashtags"><span className="text-primary px-3">Author</span></label>
                            <input  className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface" id="hashtags" type="text" value={reviewState.hashtagText} placeholder="Hashtag" />
                        </div>
                        <div className="createReview__hashtag__container">

                        </div>

                    </div>
                </div>

                <input className="bg-primary text-white p-2 px-5 rounded-full" type="submit" value="Publish" />
            </form>

        </div>
    )
}