import IcRightArrow from "../../assets/icons/ic_right_arrow.svg"

export function TopBookCard({ id, reviews }) {
    const link = `${reviews[0].image}`
    const link2 = `${reviews.length > 1 ? reviews[1].image : reviews[0].image}`
    const link3 = `${reviews.length > 2 ? reviews[2].image : reviews[0].image}`
    return (
        <div className="top-card p-3 my-4">
            <div className="flex flex-row justify-between">
                <span className="top-card__title text-tertiary font-semibold text-base">{id}</span>
                <img src={IcRightArrow} alt="Arrow icon" className="icon-arrow" />
            </div>
            <div className="top-card__container flex flex-row justify-between pt-1">
                <img className="top-card__image" src={link} alt={id} />
                <img className="top-card__image" src={link2} alt={id} />
                <img className="top-card__image" src={link3} alt={id} />
            </div>
        </div>)
}