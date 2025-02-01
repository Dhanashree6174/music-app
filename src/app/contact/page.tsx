'use client'
import{FormEvent, useState} from 'react';
import { BackgroundBeams } from "../../components/ui/background-beams";


function page() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", {email, message}); // an object
  }
  return (
    <div className="bg-gray-900 w-full h-screen">
      <BackgroundBeams className='absolute z-0 w-full h-full' />
      {/* Add relative and z-10 to bring content to the front */}
      <div className="flex flex-col relative z-10">
        <h1 className="text-center mt-40 text-lg md:text-5xl font-bold"> CONTACT US </h1>
        <p className="py-10 px-5 md:px-80 text-center text-gray-500">
          We are here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>

        <form className='space-y-5 flex flex-col items-center justify-center'
        onSubmit={handleSubmit}
         >
          <input
          type = "email"
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          placeholder = "Your email address"
          className='rounded-md focus:ring-2 focus:ring-teal-900 w-full max-w-md md:max-w-2xl p-3 bg-gray-700 placeholder:text-gray-400'
          required
          />
          <textarea
          value = {message}
          onChange = {(e) => setMessage(e.target.value)}
          placeholder='Your message'
          rows = {5}
          className='w-full max-w-md md:max-w-2xl p-3 rounded-lg focus:ring-2 focus:ring-teal-900 bg-gray-700 placeholder:text-gray-400'
          required
          ></textarea>
          <button
          type = "submit"
          className='bg-teal-500 rounded-lg px-4 md:px-6 py-2 text-white font-medium hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
