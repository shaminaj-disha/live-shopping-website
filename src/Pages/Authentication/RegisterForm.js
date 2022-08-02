import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <form>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 mx-auto mt-10">
          <input
            type="text"
            placeholder="Fist Name"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            class="input input-bordered w-full mt-10 lg:mt-0"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          class="input input-bordered w-full my-10"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          class="input input-bordered w-full"
        />
        <input
          type="submit"
          value="Sign Up"
          class="btn btn-secondary text-white w-full max-w-4xl mt-10"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
