import { useState } from "react";
import axios from "axios";
import cookies from "nookies";
import { useRouter } from "next/router";
import Link from "next/link";

import validatorUtils from "../utils/validators";
import CustomInput from "../components/CustomInput";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState(initialState);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit_toSignup = async (event) => {
    event.preventDefault();

    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      setError("Please fill the signup form.");
      return;
    }

    try {
      const response = await axios.post(
        // REST API URL
        "https://iwallet-api.herokuapp.com/api/auth/signup",
        // Payload
        { ...signupInfo }
      );
      cookies.set(null, "token", response.data.token, { path: "/" });
      router.replace("/[country]", "/us");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange_withState = (event) => {
    const { name, value } = event.target;
    setSignupInfo({
      ...signupInfo,
      [name]: `${value}`,
    });
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit_toSignup}>
        <CustomInput
          name="name"
          placeholder="Insert Your Name"
          value={signupInfo.name}
          onChange={handleInputChange_withState}
          onBlur={validatorUtils.isNotEmpty}
        />
        <CustomInput
          type="email"
          name="email"
          placeholder="Insert Email"
          value={signupInfo.email}
          onChange={handleInputChange_withState}
          onBlur={validatorUtils.isValidEmail}
        />
        <CustomInput
          type="password"
          name="password"
          placeholder="Insert Password"
          value={signupInfo.password}
          onChange={handleInputChange_withState}
          onBlur={validatorUtils.isNotEmpty}
        />

        <Link href="/signin">
          <a>Already have an account?</a>
        </Link>
        <button type="submit" onClick={handleSubmit_toSignup}>
          Sign Up
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
