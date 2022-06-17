import React, { useCallback, useEffect } from "react";

//Hooks
import { useProfile } from "../../../hooks/useProfile";
//Componentes
import { SearchCard } from "../../../components/SearchCard/SearchCard";
import { ProfileTopBlock } from "../../../components/ProfileTopBlock/ProfileTopBlock";

export function Profile() {
  const { isSuccess, data, fetchProfileInfo } = useProfile();

  useEffect(() => {
    fetchProfileInfo("0")
  }, [])

  return (
    <>
      {
        data != null ?
          <div className="profile__wrapper px-10 ">
            <ProfileTopBlock data={data}></ProfileTopBlock>
            <div className="profile__reviews__container p-2 mt-4 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
              {
                data.reviews.map((element) => <SearchCard id={element._id} image={element.image} title={element.bookTitle} />)
              }
            </div>
          </div>
          :
          <></>
      }
    </>
  );
}
