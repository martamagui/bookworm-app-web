import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";

//Hooks
import { useProfile } from "../../../hooks/useProfile";
//Componentes
import { SearchCard } from "../../../components/SearchCard/SearchCard";
import { SearchCardSkeleton } from "../../../components/SearchCard/SearchCardSkeleton";
import { ProfileTopBlock } from "../../../components/ProfileTopBlock/ProfileTopBlock";
import { ProfileTopBlockSkeleton } from "../../../components/ProfileTopBlock/ProfileTopBlockSkeleton";
import { GoBackBtn } from "../../../components/GoBackBtn/GoBackBtn";

export function Profile() {
  const { id } = useParams();
  const { isSuccess, data, fetchProfileInfo } = useProfile();

  useEffect(() => {
    if (id == null) {
      fetchProfileInfo("0")
    } else {
      fetchProfileInfo(id)
    }
  }, [])

  return (
    <>
      <GoBackBtn />
      {
        data != null ?
          <div className="profile__wrapper px-10 py-4">
            <ProfileTopBlock data={data}></ProfileTopBlock>
            <div className="profile__reviews__container p-2 mt-4 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
              {
                data.reviews.map((element) => <SearchCard id={element._id} image={element.image} title={element.bookTitle} />)
              }
            </div>
          </div>
          :
          <div className="profile__wrapper px-10 p-4">
            <ProfileTopBlockSkeleton></ProfileTopBlockSkeleton>
            <div className="profile__reviews__container p-2 mt-4 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
              <SearchCardSkeleton></SearchCardSkeleton>
              <SearchCardSkeleton></SearchCardSkeleton>
              <SearchCardSkeleton></SearchCardSkeleton>
              <SearchCardSkeleton></SearchCardSkeleton>
              <SearchCardSkeleton></SearchCardSkeleton>
            </div>
          </div>
      }
    </>
  );
}
