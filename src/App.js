import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Anims from "./Components/Anims";
import Footer from "./Components/Footer";
import LoginForm from "./Components/LoginForm";
import Result from "./Components/Result";
import Logout from "./Assets/logout.jpg";
import dataAnswers from "./Data/DataAnswers";
import userAnswers from "./Data/UserAnswers";
import axios from "axios";
import { useState, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";

const App = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [switcher, setSwitcher] = useState(true);
  const [soal, setSoal] = useState(0);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    window.open(`mailto:froxayn123@gmail.com?subject=${profile.name}&body=${userAnswers}`);
    googleLogout();
    setProfile("");
    setSoal(0);
    userAnswers.length = 0;
  };

  if (dataAnswers[soal].numb >= dataAnswers.length) {
    document.getElementById("result").style.display = "block";
    document.getElementById("logout").style.display = "flex";
    document.getElementById("form").style.display = "none";
  }

  return (
    <>
      <header>
        <Navbar profile={profile} PprofileName={profile.name} PprofilePicture={profile.picture} switcher={switcher} />
      </header>
      <main>
        <div className="flex flex-col justify-center items-center bg-slate-600">
          <div className="m-5 w-[23rem] flex justify-center items-center">
            <Anims id="love" dot={225} className="p-1 max-md:m-[5px] flex flex-wrap justify-center items-center" />
          </div>
          {switcher ? (
            <LoginForm setUser={setUser} setSwitcher={setSwitcher} switcher={switcher} />
          ) : (
            <>
              <div className="w-full" id="form">
                <Form no={dataAnswers[soal].numb} pilihan1={dataAnswers[soal].options[0]} pilihan2={dataAnswers[soal].options[1]} setSoal={setSoal} Soal={dataAnswers.length - 1} Jawaban={userAnswers} />
              </div>
              <div className="hidden space-y-3" id="result">
                <Result profile={profile} />
              </div>

              <div
                className="mt-3 hidden justify-center items-center space-x-2 text-xl font-primary text-white cursor-pointer hover:text-[#ff5253] transition ease-in-out"
                onClick={() => {
                  logOut();
                  setSwitcher(!switcher);
                }}
                id="logout"
              >
                <img src={Logout} alt="" className="w-12 me-2 rounded-full cursor-pointer" />
                LOGOUT
              </div>
            </>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
