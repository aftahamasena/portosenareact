const Profile = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-20 pt-40 sm:pt-32 md:pt-28 px-4 sm:px-6 md:px-8 lg:px-10"
      id="profile.section"
    >
      <div className="text-center">
        <p className="pb-2 xs:text-xs sm:text-sm md:text-base lg:text-lg font-merriweather">
          Muhammad Aftah Amasena
        </p>
        <h1 className="font-gloock text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Front-end Website
          <br />
          Developer
        </h1>
        <img
          src="assets/img/profilesena.jpg"
          alt="Profile"
          className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 transition-transform transform hover:scale-105 hover:shadow-lg rounded-full mx-auto"
        />
        <p className="pt-6 xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto font-merriweather">
          A website developer with a specialization in front-end programming and
          a proven track record of three years of experience.
        </p>
      </div>
    </div>
  );
};

export default Profile;
