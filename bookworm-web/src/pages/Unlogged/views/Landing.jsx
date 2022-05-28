import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PicLandingArch from "../../../assets/images/pic_landing_arch.png";
import PicGooglePlay from "../../../assets/images/pic_google_play.svg";
import PicAppleStore from "../../../assets/images/pic_apple_store.svg";
//Services
import { fetchLogin } from "../../../services/auth/userAuth"
import { UserContext } from "../../../context/UserContext";

export function Landing() {
  const user = useContext(UserContext)

  return (
    <div className="self-center">
      <div className="landing__container-top flex flex-row justify-between items-end px-48">
        <div className="landing__container__col self-center">
          <h2 className="big-web-titles font-semibold text-8xl">Find new adventures.</h2>
          <p className="headline-5 py-12">Share your favourites titles with your friends, follow other bookworms, save the most eyecatching stories... You wont ever find yourself wondering what to read next.</p>
          <Link to="/login"><span className="bg-primary rounded-full p-4 px-8">Tell me more</span></Link>
        </div>
        <img className="m-0" src={PicLandingArch} alt="Picture of the book: They both die at the end" />
      </div>
      <div className="landing__container-bot flex flex-row justify-between items-center pl-48">
        <div className="landing__container-bot__col">
          <div className="content">
            <h3 className="big-web-titles font-semibold text-8xl">Join to monthly  Giveaway</h3>
            <p className="headline-5 py-12">We are giving once a month a surprise box, with the most popular book of the month among other small surprises. You will join by leaving your readings reviews :)</p>
            <p className="headline-5">Soon available on:</p>
            <div className="py-12 flex flex-row justify-between ">
              <img src={PicAppleStore} alt="Apple Store Logo" />
              <img src={PicGooglePlay} alt="Google Play Logo" />
            </div>
          </div>
        </div>
        <div className="landing__container-bot__col-darkbrown p-24"></div>
      </div>
    </div>
  );
}
