// About.js - Styled About Page for Notes App

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">About This App</h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          This Notes App is a user-friendly platform that allows individuals to securely manage their personal notes. With a clean and intuitive interface, users can easily log in and perform key actions such as adding, editing, and deleting notes.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Each note contains a title and a detailed description, making it simple to keep track of important information. Notes are stored securely and only accessible to the logged-in user, ensuring privacy and data integrity.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          The app is built using modern web technologies including React for the frontend, and supports real-time interactions with seamless data updates. Whether for daily tasks, reminders, or quick ideas, this app helps keep everything organized in one place.
        </p>

        <p className="text-gray-600 text-sm text-center mt-6">
          Built with ❤️ using React, Tailwind CSS, and secure backend technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
