import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Email"
          class="input input-bordered w-full max-w-4xl my-10"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          class="input input-bordered w-full max-w-4xl"
        />
        <input
          type="submit"
          value="Sign In"
          class="btn btn-secondary text-white w-full max-w-4xl mt-10"
        />
      </form>
    </div>
  );
};

export default LoginForm;
