import React from "react";
import ScreenShot1 from "../../../assets/images/pic_screenshot_1.png";
import ScreenShot2 from "../../../assets/images/pic_screenshot_2.png";

export function Login() {
  return (
    <div className="login__container flex flex-row justify-between items-center px-48">
      <div className="login__container__col-form self-center w-5/12">
        <h2 className="big-web-titles font-semibold text-8xl py-6 ">Login</h2>

        <form action="">
          <div className="flex flex-col py-2 w-9/12">
            <label htmlFor="mail">Email</label>
            <input className="rounded-xl my-3 p-2" type="text" id="mail" />
          </div>

          <div className="flex flex-col pt-3 pb-6 w-9/12">
            <label htmlFor="mail">Password</label>
            <input className="rounded-xl my-3 p-2" type="text" id="mail" />
          </div>
          <input
            className="bg-primary p-2 px-12 rounded-lg"
            type="submit"
            value="Login"
          />
        </form>
      </div>

      <div className="login__container__col-images flex flex-row justify-between w-5/12">
        <img
          src={ScreenShot1}
          alt="Captura de pantalla de Bookworm Android 1"
          className="col__image-1 w-6/12 pb-20 px-2"
        />
        <img
          src={ScreenShot2}
          alt="Captura de pantalla de Bookworm Android 2"
          className="col__image-2 w-6/12 pt-20 px-2"
        />
      </div>
      <div className="login__bg"></div>
    </div>
  );
}
