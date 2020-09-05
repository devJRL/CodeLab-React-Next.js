import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "nookies";
import CustomInput from "../components/CustomInput";

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);
  const router = useRouter();

  const handleSubmit_toGetToken = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        // REST API URL
        "https://iwallet-api.herokuapp.com/api/auth/signin",
        // Payload
        { ...signinInfo }
      );
      cookies.set(null, "token", "token", response.data.token, { path: "/" });
      router.replace("/");
    } catch (error) {
      console.error("handleSubmit_toGetToken -> error", error);
      alert("something wrong!");
    }
  };

  const handleInputChange_withState = (event) => {
    const { name, value } = event.target;
    setSigninInfo({
      ...signinInfo,
      [name]: `${value}`,
    });
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit_toGetToken}>
        <CustomInput
          type="email"
          name="email"
          placeholder="Insert Email"
          value={signinInfo.email}
          onChange={handleInputChange_withState}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Insert Password"
          value={signinInfo.password}
          onChange={handleInputChange_withState}
        />
        <button onClick={handleSubmit_toGetToken}>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
