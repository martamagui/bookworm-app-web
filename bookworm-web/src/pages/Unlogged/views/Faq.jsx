import React from "react";
import PicFaqArch from "../../../assets/images/pic_faq_arch.png";

export function Faq() {
    return (
        <div className="landing__container-top flex flex-row justify-between items-end px-48">
            <div className="landing__container__col self-center">
                <h2 className="big-web-titles font-semibold text-8xl">F.A.Q.</h2>
                <ul className="faq__list py-12">
                    <li className="faq__item">
                        <div>
                            <p className="item__question headline-5 font-bold">How do I join on the monthly GiveAway?</p>
                            <p className="item__answer headline-5 pl-6">You just need to make a monthly review :)</p>
                        </div>
                    </li>
                    <li className="faq__item py-12">
                        <div>
                            <p className="item__question headline-5 font-bold">When will be BookWorm available?</p>
                            <p className="item__answer headline-5 pl-6">You just need to make a monthly review :)</p>
                        </div>
                    </li>
                    <li className="faq__item">
                        <div>
                            <p className="item__question headline-5 font-bold">Can I join the team?</p>
                            <p className="item__answer headline-5 pl-6">You can apply for the oppen positions via Linkedin</p>
                        </div>
                    </li>
                </ul>
            </div>
            <img src={PicFaqArch} alt="Picture of the long utopia" />
        </div>
    );
}
