import { useGoogleLogin } from "@react-oauth/google";
import Google from "../Assets/google.png";

const LoginForm = (props) => {
  const setUser = props.setUser;
  const setSwitcher = props.setSwitcher;
  const switcher = props.switcher;

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      setSwitcher(!switcher);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="text-xl font-primary text-white underline underline-offset-4">Login with:</h1>
        <div className="hover:text-[#ff5253] transition ease-in-out">
          <button onClick={login} className="p-3 bg-white flex justify-center items-center rounded-lg font-primary">
            <img src={Google} alt="" className="w-8 me-2" />
            GOOGLE
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
