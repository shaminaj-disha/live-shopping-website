import React from "react";
import {
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 mt-16 mb-32 lg:mb-52 container mx-auto">
      <div
        data-aos="flip-left"
        className="card lg:card-side shadow-xl bg-primary"
      >
        <figure className="pl-5 pt-5">
          <ClockIcon className="h-24 w-24 text-white"></ClockIcon>
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title text-left uppercase font-bold">
            24 hours Online Shopping
          </h2>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div
        data-aos="flip-up"
        className="card lg:card-side shadow-xl bg-secondary"
      >
        <figure className="pl-5 pt-5">
          <CurrencyDollarIcon className="h-24 w-24 text-white"></CurrencyDollarIcon>
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title text-left uppercase font-bold">
            100% Money Back Guarantee
          </h2>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div
        data-aos="flip-right"
        className="card lg:card-side shadow-xl bg-accent"
      >
        <figure className="pl-5 pt-5">
          <PhoneIcon className="h-24 w-24 text-white"></PhoneIcon>
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title text-left uppercase font-bold">
            24/7 Online and Phone Support
          </h2>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
