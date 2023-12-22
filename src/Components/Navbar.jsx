import Logo from "../Assets/logo.jpg";
import User from "../Assets/user.jpeg";
import Profile from "./Profile";

const Navbar = (props) => {
  const Nswitcher = props.switcher;
  const PprofileName = props.PprofileName;
  const PprofilePicture = props.PprofilePicture;

  return (
    <>
      <div className="p-5 flex justify-between items-center bg-slate-700">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="" className="w-14 rounded-full text-white" />
          <h1 className="ms-2 text-lg md:text-xl font-primary text-white">Love Language Quiz</h1>
        </div>
        <div>{Nswitcher ? <img src={User} alt="" className="md:me-2 w-12 rounded-full" /> : <Profile profileName={PprofileName} profilePicture={PprofilePicture} />}</div>
      </div>
    </>
  );
};

export default Navbar;
