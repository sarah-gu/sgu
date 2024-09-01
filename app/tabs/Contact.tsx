import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";

export const Contact = ({ theme }: { theme: string }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("movaraek");

  if (state.succeeded) {
    return <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>;
  }

  return (
    <form
      action="https://formspree.io/f/movaraek"
      method="post"
      className={`${
        theme === "light" ? "bg-gray-200" : "bg-gray-700"
      }  rounded-lg drop-shadow-xl p-4 md:p-8 gap-4 md:gap-6 text-md md:text-2xl flex flex-col justify-center items-left w-full`}
      onSubmit={handleSubmit}
    >
      Contact Me!
      <div className="text-sm flex flex-col justify-center items-left w-full">
        <label htmlFor="name">Name</label>
        <input
          className="bg-slate-50 rounded-lg py-1 px-2 outline-none w-full"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="text-sm flex flex-col justify-center items-left w-full">
        <label htmlFor="email">Email</label>
        <input
          className="bg-slate-50 rounded-lg py-1 px-2 outline-none w-full"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="text-sm flex flex-col justify-center items-left w-full">
        <label htmlFor="message">Message</label>
        <textarea
          className="bg-slate-50 rounded-lg py-1 px-2 outline-none w-full"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        disabled={state.submitting}
        className="text-white text-sm bg-pantone hover:bg-pantone-dark transition-all duration-300 py-2 px-4 rounded-lg"
        type="submit"
      >
        Send
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};
