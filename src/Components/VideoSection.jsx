import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 w-full">
        {/* Wrapper for the video, set its size */}
        <div className="w-full h-full   ">
          <ReactPlayer
            className="w-full h-full "
            url={"https://youtu.be/e5lMqMSh7FQ"}
            playing
            controls
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;