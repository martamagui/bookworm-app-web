import { useState } from "react";
import { storage } from "../services/firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


export function useNewReview() {
    const [reviewState, setReviewState] = useState({
        bookTitle: "",
        bookAuthor: "",
        score: 5,
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

    const uploadToFireBase = (file) => {
        console.log(file == null ? "true" : "false")
        if (file == null) return;
        const imageRef = ref(storage, `images/review/${Math.floor((Math.random() * 1000000)).toString() + file.name}`);
        uploadBytes(imageRef, file).then((response) => {
            getDownloadURL(response.ref).then((url) => {
                setReviewState({ ...reviewState, image: `${url}` })
                console.log("Your link " + url)
                imageAsBg(url)
            })
        })
    }

    const uploadImage = (event) => {
        setReviewState({ ...reviewState, imageFile: event.target.files[0] })
        console.log("🍕🍕🍕")
        uploadToFireBase(event.target.files[0])
    }

    const imageAsBg = (url) => {
        document.getElementById("image__container").style.backgroundImage = `url('${url}')`;
        document.getElementById("image__container").style.border = "1px solid rgba(175, 175, 175, 0.862)"
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