import React from "react";

export default function Conctact() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("Error sending message"))
  }

  return (
    <section id="contact" className="relative bg-gray-800">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe src="https://maps.google.com/maps?q=venizelosova%2058&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder={0}
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)"}} 
           />
           <div className="bg-gray-900 relative flex flex-wrap py-6 pr-6 rounded shadow-md">
             <div className="lg:w-1/2 px-6">
               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                 ADDRESS
               </h2>
               <p className="mt-1">
                 Venizelosova 58 <br />
                 11000, Belgrade
               </p>
             </div>
             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
               <h2 className="title-font font-semibold text-white tracking-tracking-widest text-xs">
                 E-MAIL
               </h2>
               <a className="text-indigo-400 leading-relaxed">
                 jbabic999@gmail.com
               </a>
               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                 PHONE NUMBER
               </h2>
               <p className="leading-relaxed">+381 69 131-2555</p>
             </div>
           </div>
        </div>
        <form 
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact me
            </h2>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                E-mail
              </label>
              <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea name="message" id="message" onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

            <button type="submit" onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
        </form>
      </div>
    </section>
  );
}
