import { useState } from "react";
import { storage } from "../services/firebase/firebaseConfig";


export function useNewReview() {
    const [reviewState, setReviewState] = useState({
        bookTitle: "",
        bookAuthor: "",
        score: 5.0,
        image: "",
        imageFile: null,
        reviewDescription: "",
        hashtagText: "",
        hashtags: []
    });

    // --------- SET state
    const setBookTitle = (value) => {
        setReviewState({ ...reviewState, bookTitle: value })
    }

    const setBookAuthor = (value) => {
        setReviewState({ ...reviewState, bookAuthor: value })
    }

    const setScore = (value) => {
        setReviewState({ ...reviewState, score: value })
    }

    const setReviewDescripition = (value) => {
        setReviewState({ ...reviewState, reviewDescription: value })
    }

    const setHashTag = (value) => {
        setReviewState({ ...reviewState, hashtagText: value })
    }

    const addHashTag = (value) => {
        let tagsArray = reviewState.hashtags
        tagsArray.push(value)
        setReviewState({ ...reviewState, hashtags: tagsArray })
    }
    // --------------------

    const uploadToFireBase = () => {
        console.log(reviewState.imageFile == null ? "true" : "false")
        if (reviewState.imageFile == null) return;
        const imageRef = ref(storage, `images/review/${Math.floor((Math.random() * 1000000)).toString() + reviewState.imageFile.name}`);
        uploadBytes(imageRef, reviewState.imageFile).then((response) => {
            getDownloadURL(response.ref).then((url) => {
                setReviewState({ ...reviewState, image: `${url}` })
                console.log("Your link " + url)
            })
        })
    }

    const uploadImage = (event) => {
        console.log(event.target.files[0].name);
        setImageUploadState(event.target.files[0]);
        setReviewState({ ...reviewState, imageFile: event.target.files[0] })
        uploadToFireBase()
    }

    const createPost = (event) => {
        event.preventDefault()
    }

    return {
        reviewState,
        uploadImage,
        createPost,
        setBookAuthor,
        setBookTitle,
        setHashTag,
        setReviewDescripition,
        setReviewState,
        setScore,
        addHashTag
    }
}