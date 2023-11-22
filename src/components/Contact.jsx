import React, { useState } from "react";
const Contact = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [feed, setFeed] = useState();

  const nameControl = (e) => {
    setFullName(e.target.value);
  };

  const mailControl = (e) => {
    setEmail(e.target.value);
  };

  const feedControl = (e) => {
    setFeed(e.target.value);
  };

  const formControl = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setFeed("");
    alert("Thank you! Your response has been recorded!");
  };

  return (
    <div className="w-full py-10 text-slate-600" id="contact">
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[10rem] mb-10 font-pacifico font-extrabold md:text-3xl sm:text-2xl  text-2xl">
        Contact Me
      </p>
      <div className="grid md:grid-cols-1 max-w-[800px] mx-auto">
        <div className="flex justify-center">
          <form onSubmit={formControl} method="POST">
            <div className="form-group">
              <div className="form-items">
                <input
                  type="text"
                  name="fullname"
                  value={fullName}
                  placeholder="Fullname...."
                  className="rounded-full md:p-3 sm:p-3 p-2 outline-none w-[20rem] shadow-lg"
                  onChange={nameControl}
                  required
                />
              </div>
              <div className="form-items">
                <input
                  type="email"
                  name="mail"
                  value={email}
                  placeholder="Gmail...."
                  className="mt-5 rounded-full md:p-3 sm:p-3 p-2 outline-none w-[20rem] shadow-lg"
                  onChange={mailControl}
                  required
                />
              </div>
              <div className="form-items  ">
                <textarea
                  name="thought"
                  cols="34"
                  rows="4"
                  value={feed}
                  placeholder="Share your thoughts here...."
                  className="mt-5 rounded-md md:p-3 sm:p-3 p-2 w-[20rem] outline-none shadow-lg"
                  onChange={feedControl}
                  required
                ></textarea>
              </div>
              <button className="rounded-full outline-none flex mx-auto mt-5 w-[8rem] p-3 font-bold justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-80 shadow-2xl">
                Ping Me
              </button>
            </div>
          </form>
          {/* <p className="p-2 text-center">
            Feel free to contact me at{" "}
            <a
              className="underline font-bold"
              href="mailto:aanandakhadka12@gmail.com"
            >
              aanandakhadka12@gmail.com
            </a>{" "}
            or give a call <span className="font-bold">+16479393389</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
