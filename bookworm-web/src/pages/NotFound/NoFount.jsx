import React from "react";

import NotFoundImage from "../../assets/images/pic_not_found.png";

export function NotFound() {
  return (
    <div className="h-screen px-10">
      <div className="pb-3">
        <h2 className="text-9xl font-semibold text-primary">404</h2>
        <p className="text-2xl text-primary py-2">Page not found</p>
        <p className="text-sm text-primary ">Maybe it's time to start a new book :)</p>
      </div>
      <img id="image-404" src={NotFoundImage} alt="Not found image" />
    </div>
  );
}
