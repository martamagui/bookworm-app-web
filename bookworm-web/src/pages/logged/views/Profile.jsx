import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ICPlusDark from '../../../assets/icons/ic_plus_dark.svg'
import ICBookmarkDark from '../../../assets/icons/ic_bookmark_dark.svg'
import { useProfile } from "../../../hooks/useProfile";

export function Profile() {
  const { isSuccess, data, fetchProfileInfo } = useProfile();

  useEffect(() => {
    fetchProfileInfo("0")
  }, [])

  return (
    <>
      {
        data != null ?
          <div className="profile__wrapper px-10">
            <div className="profile__block-top bg-white">
              <div className="block-top__image__container">
                <img src="" alt="" className="banner" />
                <img src="" alt="" className="profile__avatar" />
                <Link to="/saved-reviews">
                  <div className="p-3 bg-white rounded-full shadow-md inline-block">
                    <img src={ICBookmarkDark} alt="Plus Icon" />
                  </div>
                </Link>
                <button className="btn-follow p-3 bg-white rounded-full shadow-md inline-block">
                  <img src={ICPlusDark} alt="Plus Icon" />
                </button>

              </div>
              <div className="block-top__content__container">
                <h2 className="profile__username px-1"></h2>
                <p className="profile__description p-1"></p>
                <div className="profile__stats flex flex-row">
                  <p className="p-1">Reviews:</p>
                  <p className="p-1">Followers:</p>
                  <p className="p-1">Following:</p>
                </div>
              </div>

            </div>
            <div className="profile__reviews__container">

            </div>
          </div>
          :
          <></>
      }
    </>
  );
}
