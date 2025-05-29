import React from "react";
import { Link } from "react-router-dom";

const courses = [
 
];

function CoursePage() {
  return (
    <div className="h-135 bg-blue-50 px-6 py-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
          Our Courses
        </h1>
        <p className="text-center text-blue-800 text-lg mb-12">
          Empowering nurses for a global career. Browse our expert-designed training modules.
        </p>
        <p className="text-center text-6xl text-blue-500">Coming soon</p>
      </div>
    </div>
  );
}

export default CoursePage;
