import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";

//Asssets
import IcStar from "../../../assets/icons/ic_star.svg";
import IcPlus from "../../../assets/icons/ic_plus.svg";
import IcGallery from "../../../assets/icons/ic_gallery_ligth.svg";

//Hooks
import { useNewReview } from "../../../hooks/useNewReview";

//Components
import { Loader } from "../../../components/Loader/Loader";

export function CreateReview() {
    const [imageUploadState, setImageUploadState] = useState(null);
    const {
        reviewState, uploadImage,
        createPost, setBookAuthor,
        setBookTitle, setHashTag,
        setReviewDescripition,
        setScore, addHashTag } = useNewReview();

    const addChip = () => {
        addHashTag(reviewState.hashtagText)
    }

    return (
        <div className="createReview px-2 pb-12">
            {
                reviewState.isSuccess ?
                    <Navigate to="/" replace></Navigate> : ""
            }
            <form onSubmit={(event) => createPost(event)}>
                <div className="createReview__container">
                    <div className="createReview__wrapper-top">
                        <div id="image__container" className="createReview__image__container bg-surface-variant rounded-t-2xl border-outline">
                        </div>
                        <div className="input__wrapper-image">
                            <div className="bg-primary p-4 py-2 rounded-3xl w-32 relative" id="image-input__container">
                                <div className="flex flex-row justify-center items-center z-10">
                                    <span className="text-white">Gallery</span>
                                    <img className="ml-1" src={IcGallery} alt="Gallery Icon" />
                                </div>
                                <input onChange={(event) => {
                                    uploadImage(event)
                                }}
                                    type="file" name="image" id="image-input"
                                    className="w-full h-full absolute top-0 opacity-0 z-20"
                                    accept="image/png, image/jpeg, image/jpg" />
                            </div>
                        </div>
                    </div>

                    <div className="createReview__wrapper-bot bg-surface shadow-md rounded-b-2xl p-8">
                        <div className="slidecontainer py-2">
                            <div className="flex flex-row justify-between">
                                <label htmlFor="score" className="text-primary">Score</label>
                                <div className="createReview__score flex flex-row">
                                    <span className="text-primary px-1">{(reviewState.score).toString()}</span>
                                    <img src={IcStar} alt="Star Icon" />
                                </div>
                            </div>
                            <input type="range" min="1" max="10" step="0.1"
                                className="slider w-full " id="score"
                                value={reviewState.score}
                                onChange={(event) => setScore(event.target.value)} />
                        </div>
                        <div className="createReview__row flex flex-row py-2">
                            <div className="flex flex-col w-6/12 p-1">
                                <label htmlFor="bookTitle"><span className="text-primary px-3">Title</span></label>
                                <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                    id="bookTitle" type="text" value={reviewState.bookTitle}
                                    placeholder="Title" onChange={(event) => {
                                        setBookTitle(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col w-6/12 p-1">
                                <label htmlFor="bookAuthor"><span className="text-primary px-3">Author</span></label>
                                <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                    id="bookAuthor" type="text" value={reviewState.bookAuthor}
                                    placeholder="Author"
                                    onChange={(event) => { setBookAuthor(event.target.value) }} />
                            </div>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="description"><span className="text-primary px-3">Review</span></label>
                            <textarea className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                placeholder="Review Description" name="description"
                                id="description" cols="30" rows="10"
                                onChange={(event) => { setReviewDescripition(event.target.value) }} />
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="hashtags"><span className="text-primary px-3">HashTags</span></label>
                            <div className="flex flex-row">
                                <input className="createReview__input-text p-1 px-3 rounded-xl bg-inverse-on-surface"
                                    id="hashtags" type="text" value={reviewState.hashtagText}
                                    placeholder="Hashtag" onChange={(event) => { setHashTag(event.target.value) }} />
                                <button type="button" onClick={addChip} className="hover:opacity-75 bg-primary px-2 rounded-full mx-2"><img src={IcPlus} alt="Addiion icon" /></button>
                            </div>
                        </div>

                        <div className="createReview__hashtag__container my-1">
                            {
                                reviewState.hashtags.map((hashtag) => <span className="text-white text-sm p-1 px-3 mx-1 bg-primary rounded-full opacity-90">#{hashtag}</span>)
                            }
                        </div>

                    </div>
                </div>
                <div className="createReview__input-submit">
                    <input id="submit" className="bg-primary mt-5 text-white p-2 px-5 rounded-full " type="submit" value="Publish" />
                    {
                        reviewState.isLoading ?
                            <div className="absolute ml-48 bg-primary rounded-xl opacity-60 py-3 self-center px-0 m-4 inline-block"> <Loader></Loader></div>
                            :
                            ""
                    }
                </div>
            </form>

        </div>
    )
}