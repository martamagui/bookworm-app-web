import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { storage } from "../services/firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//Service
import { postReview } from "../services/reviewsService";
//Context
import { UserContext } from "../context/UserContext";

export function useNewReview() {
    const { userToken } = useContext(UserContext);
    const [reviewState, setReviewState] = useState({
        isLoading: false,
        isSuccess: false,
        isError: false,
        bookTitle: "",
        bookAuthor: "",
        score: 5,
        image: "",
        imageFile: null,
        reviewDescription: "",
        hashtagText: "",
        hashtags: [],
    });

    // -------------------- SET state
    const setBookTitle = (value) => {
        setReviewState({ ...reviewState, bookTitle: value });
    };

    const setBookAuthor = (value) => {
        setReviewState({ ...reviewState, bookAuthor: value });
    };

    const setScore = (value) => {
        setReviewState({ ...reviewState, score: value });
    };

    const setReviewDescripition = (value) => {
        setReviewState({ ...reviewState, reviewDescription: value });
    };

    const setHashTag = (value) => {
        setReviewState({ ...reviewState, hashtagText: value });
    };

    const addHashTag = () => {
        let tagsArray = reviewState.hashtags;
        tagsArray.push(reviewState.hashtagText);
        setReviewState({ ...reviewState, hashtags: tagsArray, hashtagText: "" });
    };

    // --------------------

    const uploadToFireBase = (file) => {
        if (file == null) return;
        const imageRef = ref(
            storage,
            `images/review/${Math.floor(Math.random() * 1000000).toString() + file.name
            }`
        );
        uploadBytes(imageRef, file).then((response) => {
            getDownloadURL(response.ref).then((url) => {
                setReviewState({ ...reviewState, image: `${url}` });
                console.log("Your link " + url);
                imageAsBg(url);
            });
        });
    };

    const uploadImage = (event) => {
        setReviewState({ ...reviewState, imageFile: event.target.files[0] });
        uploadToFireBase(event.target.files[0]);
    };

    const imageAsBg = (url) => {
        document.getElementById("image__container").style.backgroundImage = `url('${url}')`;
        document.getElementById("image__container").style.border = "1px solid rgba(175, 175, 175, 0.862)";
    };

    const createPost = (event) => {
        event.preventDefault();
        if (document.activeElement != document.getElementById('submit')) {
            return
        }
        setReviewState({ ...reviewState, isLoading: true })
        if (
            reviewState.bookTitle.length > 0 &&
            reviewState.bookAuthor.length > 0 &&
            reviewState.image.length > 0 &&
            reviewState.reviewDescription.length > 0
        ) {
            const body = {
                bookTitle: reviewState.bookTitle,
                bookAuthor: reviewState.bookAuthor,
                score: reviewState.score,
                image: reviewState.image,
                reviewDescription: reviewState.reviewDescription,
                hashtags: reviewState.hashtags,
            };
            postReview(userToken, body);
            setReviewState({ ...reviewState, isSuccess: true })
        } else {
            setReviewState({ ...reviewState, isError: true })
        }
    };

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
        addHashTag,
    };
}
