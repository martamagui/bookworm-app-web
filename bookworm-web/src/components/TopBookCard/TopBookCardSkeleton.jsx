import IcRightArrow from "../../assets/icons/ic_right_arrow.svg"

export function TopBookCardSkeleton() {

    return (
        <div className="top-card p-3 my-4 shimmer">
            <div className="flex flex-row justify-between">
                <div className="top-card__title py-1 px-2 bg-outline rounded-2xl opacity-50 w-5/12"></div>
                <img src={IcRightArrow} alt="Arrow icon" className="icon-arrow" />
            </div>
            <div className="top-card__container flex flex-row justify-between pt-1">
                <div className="top-card__image bg-outline opacity-60" />
                <div className="top-card__image bg-outline opacity-60" />
                <div className="top-card__image bg-outline opacity-60" />
            </div>
        </div>)
}