import React from "react";
import { Link } from "react-router-dom";


export function Landing() {
  return (
    <div className=" w-6/12 self-center">
      <div className="landing__container-top">
        <h2 className="font-semibold text-8xl">Find new adventures.</h2>
        <span>Share your favourites titles with your friends, follow other bookworms, save the most eyecatching stories... You wont ever find yourself wondering what to read next.</span>
        <Link to="/login"><span>Tell me more</span></Link>
      </div>
      <div className="landing__container-bot">
        <h3>Join to monthly  Giveaway</h3>
        <p>We are giving once a month a surprise box, with the most popular book of the month among other small surprises. You will join by leaving your readings reviews :)</p>
        <p>Soon available on:</p>
        <div>
          <span>Apple</span>
          <span>Android</span>
        </div>
      </div>
    </div>
  );
}
