import React from "react";
const Contact = () => {
  return (
    <div className="w-full py-10 text-slate-600" id="contact">
      <p className="flex justify-center mx-auto border-slate-500 border-b-2 w-[10rem] mb-10 font-pacifico font-extrabold md:text-3xl sm:text-2xl  text-2xl">
        Contact Me
      </p>
      <div className="grid md:grid-cols-1 max-w-[800px] mx-auto">
        <div className="flex justify-center">
          <p className="p-2">
            Feel free to contact me at{" "}
            <a
              className="underline font-bold"
              href="mailto:aanandakhadka12@gmail.com"
            >
              aanandakhadka12@gmail.com
            </a>{" "}
            or give a call <span className="font-bold">+16479393389</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
