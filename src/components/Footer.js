import React from "react";
import { copyright } from "../data";

export default function Footer(){

  return(
    <footer id="footer" className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {copyright}
        </p>
        <div className="flex justify-center">
          Social Media
        </div>
      </div>
    </footer>
  );
}