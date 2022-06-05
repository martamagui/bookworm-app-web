import { React, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//---------Inner
import ScreenShot1 from "../../../assets/images/pic_screenshot_1.png";
import ScreenShot2 from "../../../assets/images/pic_screenshot_2.png";
//Services
import { fetchLogin } from "../../../services/auth/userAuth";
//Hooks
import { useUser } from "../../../hooks/useUser";
//Components
import { Loader } from "../../../components/Loader/Loader";



export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const { login, isSuccess, isLoading,
    isError, errorMsg, isLogged } = useUser()

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(email, password).then(useNavigate('/'))
  };

  //TODO add forgot your password to the server
  return (
    <>
      <div className="login__container">
        <div className="login__container__col-form ">
          <h2 className="big-web-titles font-semibold text-8xl py-6 ">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2 w-9/12">
              <label htmlFor="mail" className="title-large text-primary-container font-bold">Email</label>
              <input
                className="rounded-xl my-3 p-2 text-gray-700"
                type="text"
                value={email}
                id="mail"
                name="mail"
                placeholder="@ Email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>

            <div className="flex flex-col pt-3 pb-6 w-9/12">
              <label htmlFor="password" className="title-large text-primary-container  font-bold">Password</label>
              <input
                className="rounded-xl my-3 p-2 text-gray-700"
                value={password}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={({ target }) => setPasword(target.value)}
              />
            </div>
            <div className="flex flex-row items-center">
              <input
                className="bg-primary p-2 px-12 rounded-lg"
                type="submit"
                value="Login"
              />
              {isLoading ? <Loader /> : ""}
            </div>

          </form>
          <p className="py-10 text-primary-container">Not a membar yet? <Link to="/sign-up"><span className="text-primary-dark"> Sign up</span></Link></p>
        </div>

        <div className="login__container__col-images z-20 hidden sm:flex flex-row justify-between w-5/12">
          <img
            src={ScreenShot1}
            alt="Captura de pantalla de Bookworm Android 1"
            className="col__image-1 w-6/12 pb-20 px-2 hidden lg:inline"
          />
          <img
            src={ScreenShot2}
            alt="Captura de pantalla de Bookworm Android 2"
            className="col__image-2 w-full hidden sm:inline lg:w-6/12 pt-20 px-2"
          />
        </div>
      </div>
      <div className="login__bg w-full"></div>

    </>

  );
}
