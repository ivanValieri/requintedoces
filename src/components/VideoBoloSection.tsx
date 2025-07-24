import React from "react";

const VideoBoloSection = () => {
  return (
    <section className="w-full py-12 flex justify-center">
      <video
        src="/lovable-uploads/videoBolo.mp4"
        controls
        className="w-full max-w-2xl rounded-xl shadow-lg"
        poster="/lovable-uploads/1.png"
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>
  );
};

export default VideoBoloSection; 