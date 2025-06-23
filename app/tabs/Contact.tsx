import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";

export const Contact = ({ theme }: { theme: string }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [state, handleSubmit] = useForm("movaraek");

  if (state.succeeded) {
    return (
      <div
        className={`${
          theme === "light" ? "bg-gray-200" : "bg-gray-700"
        } rounded-lg drop-shadow-xl p-4 md:p-8 text-md md:text-2xl flex flex-col justify-center items-center w-full`}
      >
        <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
      </div>
    );
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
      Send me a message, I&apos;d love to connect!
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
        className="text-white text-sm bg-pantone hover:bg-pantone-dark transition-all duration-300 py-2 px-4 rounded-lg flex items-center justify-center"
        type="submit"
      >
        {state.submitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send"
        )}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};
