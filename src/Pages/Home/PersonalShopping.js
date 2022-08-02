import React from "react";
import {
  ArrowRightIcon,
  MicrophoneIcon,
  PhoneIcon,
  VideoCameraIcon,
  ChatIcon,
} from "@heroicons/react/outline";

const PersonalShopping = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-100 py-8 px-4 my-8 lg:my-16">
      <div className="bg-base-100 lg:mx-36 p-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-down-left" className="lg:ml-12">
            <div className="lg:flex">
              <div className="lg:pr-2">
                <div className="avatar">
                  <div className="w-72 lg:w-48 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80://placeimg.com/192/192/people"
                      alt=""
                    />
                  </div>
                </div>
                <div className="avatar hidden lg:block">
                  <div className="w-48 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="lg:pr-2 hidden lg:block">
                <div className="avatar">
                  <div className="w-48 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-48 rounded">
                    <img
                      src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between lg:flex-col lg:space-y-8">
                  <MicrophoneIcon className="w-8 h-8 text-black"></MicrophoneIcon>
                  <PhoneIcon className="w-8 h-8 text-black"></PhoneIcon>
                  <VideoCameraIcon className="w-8 h-8 text-black"></VideoCameraIcon>
                  <ChatIcon className="w-8 h-8 text-black"></ChatIcon>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-down-right">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
              Personal Shopping‍ One-to-One
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              possimus ex quia impedit, laudantium eum saepe vero quisquam nobis
              expedita natus, sed et amet aspernatur magni. Inventore assumenda
              molestiae fugit.
            </p>
            <div className="flex justify-center lg:mb-8">
              <button className="btn btn-primary text-white mr-4">
                Get Started
              </button>
              <button className="btn btn-outline">
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2 text-black"></ArrowRightIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalShopping;
