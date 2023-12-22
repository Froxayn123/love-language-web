const Profile = (props) => {
  const profileName = props.profileName;
  const profilePicture = props.profilePicture;

  return (
    <>
      <div className="flex justify-center items-center text-white space-x-2 ">
        <span id="name" className="max-md:hidden font-primary select-none">
          {profileName}
        </span>
        <img src={profilePicture} alt="" className="md:me-2 w-12 rounded-full" />
      </div>
    </>
  );
};

export default Profile;
