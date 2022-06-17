import React from "react"
import { useNavigate } from "react-router-dom";

//Assets
import IcLeftArrow from '../../assets/icons/ic_left_arrow.svg'

export function GoBackBtn() {
    const navigate = useNavigate();
    const navigation = () => {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }

    return (
        <div className="px-10">
            <button className="back__button bg-white shadow-md rounded-xl flex flex-row px-4 py-1  hover:opacity-70" onClick={() => navigation()}>
                <img src={IcLeftArrow} alt="Arrow icon" className="back__button__icon" />
                <span className="text-primary ml-2">Back</span>
            </button>
        </div>
    )
}