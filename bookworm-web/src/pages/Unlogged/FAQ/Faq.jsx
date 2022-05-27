import React from "react";
import PicFaqArch from "../../../assets/images/pic_faq_arch.png"

export function Faq() {
    return (
        <div className="landing__container-top flex flex-row justify-between items-end px-48">
            <div className="landing__container__col self-center">
                <h2 className="big-web-titles font-semibold text-8xl">F.A.Q.</h2>
                <p className="headline-5 pt-12 pb-6">TODO</p>
            </div>
            <img src={PicFaqArch} alt="Picture of the long utopia" />
        </div>
    );
}
