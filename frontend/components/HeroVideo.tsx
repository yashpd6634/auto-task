export const HeroVideo = () => {
  return (
    <div className="flex justify-center pt-8">
      <video
        src="https://res.cloudinary.com/zapier-media/video/upload/q_auto:best,f_auto/v1745864783/aiworkflowshomepage.mp4"
        className="max-w-4xl"
        controls={false}
        autoPlay={true}
      />
    </div>
  );
};
