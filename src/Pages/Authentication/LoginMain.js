import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LoginMain = ({ keyword }) => {
  let query = useQuery();
  keyword = query.get("keyword");
  console.log("Keyword", keyword);
  const [key, setKey] = useState(keyword);
  console.log("key", key);

  const [visibleLoginItem, setVisibleLoginItem] = useState(true);
  const [visibleRegisterItem, setVisibleRegisterItem] = useState(false);

  useEffect(() => {
    setKey(keyword);
    if (keyword === null) {
      setVisibleRegisterItem(false);
      setVisibleLoginItem(true);
    } else {
      setVisibleRegisterItem(true);
      setVisibleLoginItem(false);
    }
  }, [keyword]);

  const loadRegisterForm = () => {
    setVisibleLoginItem(false);
    setVisibleRegisterItem(true);
    setKey("register");
  };

  const loadLoginForm = () => {
    setVisibleRegisterItem(false);
    setVisibleLoginItem(true);
    setKey("login");
  };

  return (
    <div className="min-h-[50vh] max-w-4xl mx-auto my-20 px-8 flex flex-col justify-center">
      <div class="btn-group">
        <button
          class="btn btn-primary w-1/2 text-white"
          onClick={loadLoginForm}
        >
          Login
        </button>
        <button class="btn w-1/2" onClick={loadRegisterForm}>
          Create Account
        </button>
      </div>
      {key === "register" ? (
        <div>
          {visibleRegisterItem && !visibleLoginItem && <RegisterForm />}
        </div>
      ) : (
        <div>{visibleLoginItem && !visibleRegisterItem && <LoginForm />}</div>
      )}
    </div>
  );
};

export default LoginMain;
