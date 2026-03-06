import React, { useState } from "react";

export default function VideoThumbnail() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Video and thumbnail URLs
  const thumbnailUrl = "";
  const videoUrl = "/v-1.mp4";

  return (
    <div className="">
      <video
          src={videoUrl}
          controls
          loop
          playsInline
          poster="/tum.webp"    
          className="w-[400px] h-[400px] rounded-lg"
        />
    </div>
  );
}