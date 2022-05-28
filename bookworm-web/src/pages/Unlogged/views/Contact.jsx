import React from "react";
import PicArch from "../../../assets/images/pic_contact_arch.png"

export function Contact() {
  //TODO action
  return (
    <div className="landing__container-top flex flex-row justify-between items-end px-48">
      <div className="landing__container__col self-center">
        <h2 className="big-web-titles font-semibold text-8xl py-6">Contact</h2>

        <form action="">
          <div className="flex flex-col py-2">
            <label htmlFor="mail">Email</label>
            <input className="rounded-xl my-3 p-2" placeholder="@ Email" type="text" id="mail" />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="mail-content">Mail content</label>
            <textarea className="rounded-xl my-3 p-2" placeholder="Tell Us" name="mail-content" id="mail-content" cols="30" rows="10"></textarea>
          </div>
          <input className="bg-primary p-2 px-12 rounded-full" type="submit" value="Send" />
        </form>
      </div>
      <img src={PicArch} alt="Picture of the long utopia" />
    </div>);
}
