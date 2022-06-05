import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Hooks
import { useFeed } from "../../../hooks/useFeed";
//Feed
import { FeedCard } from "../../../components/FeedCard/FeedCard";
import { FeedCardSkeleton } from "../../../components/FeedCard/FeedCardSkeleton";

export function Feed() {
  const { fetchFeed, isSuccess, isLoading, errorMsg, data } = useFeed();

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return (
    <div className="feed_container px-10">
      {
        isLoading ?
          <div><FeedCardSkeleton /><FeedCardSkeleton /></div>
          :
          ""
      }
      {
        data.map((element) => <FeedCard key={element.id} feedResponse={element}></FeedCard>)
      }
    </div>
  )
}
