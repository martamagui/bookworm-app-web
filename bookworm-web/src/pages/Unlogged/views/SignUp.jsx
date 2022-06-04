import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../../../hooks/useSignUp";

export function SignUp() {
  const { validateData,
    validateEmail,
    validatePassword,
    validateUserName,
    isSuccess,
    isError,
    errorMsg,
    data,
    setAddress,
    setEmail,
    setCountry,
    setCity,
    setDay,
    setMonth,
    setPassword1,
    setPassword2,
    setYear,
    setFullName,
    setUserName } = useSignUp()



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("🕵️‍♀️")
    validateData()
  }

  return <>
    <div className="signUp__container flex flex-row justify-between items-center w-full px-12 md:px-32 xl:px-48">
      <div className="signUp__container__col-form self-center w-full">
        <h2 className="big-web-titles font-semibold text-8xl py-6 ">Sign Up</h2>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="signUp__cols__wrapper flex flex-col sm:flex-row">

            <div className="signUp__col w-full sm:w-4/12 lg:w-3/12">
              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="fullName" className="title-large text-primary-container font-bold">Full Name</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  type="text"
                  value={data.fullName}
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  onChange={({ target }) => setFullName(target.value)}
                />
              </div>

              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="userName" className="title-large text-primary-container font-bold">User Name</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  type="text"
                  value={data.userName}
                  id="userName"
                  name="userName"
                  placeholder="User Name"
                  required
                  onChange={({ target }) => setUserName(target.value)}
                />
              </div>

              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="userName" className="title-large text-primary-container font-bold">Email</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  type="text"
                  value={data.email}
                  id="email"
                  name="email"
                  placeholder="@ Email"
                  onChange={({ target }) => setEmail(target.value)}
                />
              </div>

            </div>

            <div className="signUp__col w-full sm:w-4/12 lg:w-3/12 sm:px-2 lg:px-0">
              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="country" className="title-large text-primary-container font-bold">Country</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  type="text"
                  value={data.country}
                  id="country"
                  name="country"
                  placeholder="Country"
                  required
                  onChange={({ target }) => setCountry(target.value)}
                />
              </div>

              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="city" className="title-large text-primary-container font-bold">City</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  type="text"
                  value={data.city}
                  id="city"
                  name="city"
                  placeholder="City"
                  required
                  onChange={({ target }) => setCity(target.value)}
                />
              </div>

              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="address" className="title-large text-primary-container font-bold">Address</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  type="text"
                  value={data.address}
                  id="address"
                  name="address"
                  placeholder="Address"
                  required
                  onChange={({ target }) => setAddress(target.value)}
                />
              </div>
            </div>

            <div className="signUp__col w-full sm:w-4/12 lg:w-3/12">
              <div className="flex  py-2 flex-col justify-start">
                <label htmlFor="day" className="title-large text-primary-container  font-bold">Date of Birth</label>

                <div className="flex flex-row justify-between w-full lg:w-9/12">
                  <input
                    className="rounded-xl my-3 p-2 text-gray-700 w-3/12"
                    value={data.day}
                    type="number"
                    id="day"
                    name="day"
                    placeholder="Day"
                    required
                    onChange={({ target }) => setDay(target.value)}
                  />
                  <input
                    className="rounded-xl my-3 p-2 text-gray-700 w-3/12"
                    value={data.month}
                    type="number"
                    id="month"
                    name="month"
                    placeholder="Month"
                    onChange={({ target }) => setMonth(target.value)}
                  />
                  <input
                    className="rounded-xl my-3 p-2 text-gray-700 w-3/12"
                    value={data.year}
                    type="number"
                    id="year"
                    name="year"
                    placeholder="Year"
                    required
                    onChange={({ target }) => setYear(target.value)}
                  />
                </div>


              </div>

              <div className="flex flex-col py-2 w-full lg:w-9/12">
                <label htmlFor="password" className="title-large text-primary-container  font-bold">Password</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  value={data.password1}
                  type="password"
                  id="password1"
                  name="password1"
                  placeholder="Password"
                  required
                  onChange={({ target }) => setPassword1(target.value)}
                />
              </div>
              <div className="flex flex-col py-2 pb-6 w-full lg:w-9/12">
                <label htmlFor="password" className="title-large text-primary-container  font-bold">Repeat Password</label>
                <input
                  className="rounded-xl my-3 p-2 text-gray-700"
                  value={data.password2}
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Password"
                  required
                  onChange={({ target }) => setPassword2(target.value)}
                />
              </div>
            </div>

          </div>

          <input
            className="bg-primary p-2 px-12 rounded-lg"
            type="submit"
            value="SigUp"
          />
        </form>
        <p className="py-10 text-primary-container">Have an account? <Link to="/login"><span className="text-primary-dark"> Log in</span></Link></p>
      </div>
    </div>
    <div className="login__bg w-full"></div>

  </>;
}
