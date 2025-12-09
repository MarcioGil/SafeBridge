import React from "react";
import AsyncImage from "../AsyncImage";

export default function AsyncImageExample() {
  return (
    <AsyncImage
      src="/banner-topo.jpg"
      alt="Banner do topo"
      fallback="/loading.gif"
      className="w-full h-48 object-cover rounded-lg"
    />
  );
}
