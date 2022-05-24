import React from "react";
import PicArch from "../../../assets/images/pic_about_arch.svg"

export function AboutUs() {
  return (
    <div className="landing__container-top flex flex-row justify-between items-end px-48">
      <div className="landing__container__col self-center">
        <h2 className="big-web-titles font-semibold text-8xl">Behind the idea.</h2>
        <p className="headline-5 pt-12 pb-6">My name is Marta, I'm a Software Development student and a book worm</p>
        <p className="headline-5">Moved by my passion for reading and the book-side of Instagram... I thought it migth be a good idea to develop this application.</p>
        <p className="headline-5 py-6">It always feels good to talk about your favourites book with your friends and family... And of course reading with you cat resting on your lap. :)</p>
      </div>
      <img src={PicArch} alt="Picture of the long utopia" />
    </div>
  );
}
