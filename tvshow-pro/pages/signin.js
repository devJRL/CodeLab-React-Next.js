import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cookies from "nookies";
import Link from "next/link";

import validatorUtils from "../utils/validators";
import CustomInput from "../components/CustomInput";

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(initialState);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit_toGetToken = async (event) => {
    event.preventDefault();

    const { email, password } = signinInfo;
    if (!email || !password) {
      setError("Please fill the form.");
      return;
    }

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
      setError(error.message);
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
          onBlur={validatorUtils.isValidEmail}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Insert Password"
          value={signinInfo.password}
          onChange={handleInputChange_withState}
          onBlur={validatorUtils.isNotEmpty}
        />

        <Link href="/signup">
          <a>Join us</a>
        </Link>
        <button onClick={handleSubmit_toGetToken}>Sign In</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signin;
