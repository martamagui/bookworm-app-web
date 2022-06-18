import React from "react";
import { Link } from "react-router-dom";

//Assets
import IcStar from "../../assets/icons/ic_star.svg"
import IcShopBag from "../../assets/icons/ic_shop_bag.svg"
import IcLikeFilled from "../../assets/icons/ic_like_filled.svg"
import IcBookMarkOutlined from "../../assets/icons/ic_bookmark_outlined.svg"
import IcBookMarkFilled from "../../assets/icons/ic_bookmark.svg"
import IcLikeOutlined from "../../assets/icons/ic_like_outlined.svg"
import { useCards } from "../../hooks/useCards";

export function FeedCard({ feedResponse }) {

    const { likeAction, saveAction, liked, saved, isSucess, isError, data, } = useCards({ feedResponse })

    const parseUrl = () => {
        let bookSearch = (feedResponse.bookTitle).normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        return bookSearch.replace(" ", "+")
    }

    const handleAmazonClick = () => {
        const search = parseUrl()
        window.open(`https://www.amazon.es/s?k=${search}&i=stripbooks&crid=3O2NDILPX41PI`, '_blank');
    }

    const handleLikeClick = () => {
        likeAction(feedResponse.id)
    }

    const handleSaveClick = () => {
        saveAction(feedResponse.id)
    }

    return (
        <div className="py-2">
            <div className="card-feed__container">
                <div className="card-feed__block-top flex flex-row justify-between items-center p-3">
                    <Link to={"/profile/" + feedResponse.userId._id}>
                        <div className="card-feed__user-info flex flex-row items-center px-2 hover:opacity-80">
                            <img className="card-feed__user-photo rounded-full" src={feedResponse.userId.avatar} alt="User avatar" />
                            <span className="font-medium text-on-primary-container px-4 text-base">@{feedResponse.userId.userName}</span>
                        </div>
                    </Link>
                    <div className="card-feed__score flex flex-row items-center px-2">
                        <span className="text-primary pt-1 px-2">{feedResponse.score}</span>
                        <img className="score__star" src={IcStar} alt="Star icon" />
                    </div>
                </div>
                <div className="card-feed__image__wrapper">
                    <img className="card-feed__image" src={feedResponse.image} alt="Review photography" />
                    <div className="card-feed__container-buttons flex flex-row justify-between  px-3 ">
                        <button onClick={handleAmazonClick} className="card-feed__button flex justify-center items-center rounded-full ">
                            <img className="card-feed__button__ic" src={IcShopBag} alt="Shop bag icon" />
                        </button>
                        <button onClick={handleLikeClick} className="card-feed__button flex justify-center items-center rounded-full mx-2">
                            <img className="card-feed__button__ic" src={liked ? IcLikeFilled : IcLikeOutlined} alt="Like icon" />
                        </button>
                        <button onClick={handleSaveClick} className="card-feed__button flex justify-center items-center rounded-full">
                            <img className="card-feed__button__ic " src={saved ? IcBookMarkFilled : IcBookMarkOutlined} alt="Bookmark icon" />
                        </button>
                    </div>
                </div>
                <div className="card-feed__block-bot p-5">
                    <h3 className="poppins text-xl font-semibold text-secondary py-1">{feedResponse.bookTitle}</h3>
                    <h4 className="text-base font-semibold text-secondary py-3">{feedResponse.bookAuthor}</h4>
                    <p className="text-sm text-surface-variant-foreground">{feedResponse.reviewDescription}</p>
                </div>
            </div>
            <div className="tags__container flex flex-row py-2">
                {
                    feedResponse.hastags.map((element) =>
                        <Link className="bg-primary p-0.5 px-2 mx-1 rounded-lg opacity-90 hover:opacity-80" to={"/search/hashtag/" + element}>
                            <span className="text-white font-medium text-sm"># {element}</span>
                        </Link>
                    )
                }
            </div>
        </div>

    );
}