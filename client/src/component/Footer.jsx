import React from "react";
import {
 FaFacebook,
 FaTwitter,
 FaLinkedinIn,
 FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07153b] text-white mt-10 ">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="
        grid
        grid-cols-2
        md:grid-cols-5
        gap-10">

          {/* Logo */}

          <div className="col-span-2 md:col-span-1">

            <div className="flex items-center gap-2">

              <img
                src="/job-portal.png"
                alt=""
                className="h-10 w-10"
              />

              <h1 className="font-bold text-2xl">
                JobFinder
              </h1>

            </div>


            <p className="text-gray-300 mt-4 text-sm leading-7">

              Connecting talent with opportunity.
              Find your dream job today.

            </p>


            <div className="flex gap-5 mt-5 text-xl">

              <FaFacebook className="cursor-pointer hover:text-blue-400"/>

              <FaTwitter className="cursor-pointer hover:text-blue-400"/>

              <FaLinkedinIn className="cursor-pointer hover:text-blue-400"/>

              <FaInstagram className="cursor-pointer hover:text-pink-400"/>

            </div>

          </div>


          {/* Job Seekers */}

          <div>

            <h1 className="font-bold text-lg mb-5">
              Job Seekers
            </h1>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>Browse Jobs</li>
              <li>Create Resume</li>
              <li>Job Alerts</li>
              <li>Career Resources</li>
              <li>Salary Guide</li>

            </ul>

          </div>



          {/* Employers */}

          <div>

            <h1 className="font-bold text-lg mb-5">
              Employers
            </h1>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Pricing Plans</li>
              <li>Employer Resources</li>
              <li>Company Login</li>

            </ul>

          </div>



          {/* Company */}

          <div>

            <h1 className="font-bold text-lg mb-5">
              Company
            </h1>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Help Center</li>

            </ul>

          </div>


          {/* Legal */}

          <div>

            <h1 className="font-bold text-lg mb-5">
              Legal
            </h1>

            <ul className="space-y-3 text-gray-300 text-sm">

              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
              <li>Accessibility</li>

            </ul>

          </div>

        </div>


        {/* Bottom */}

        <div className=" border-t border-gray-700 mt-10 pt-6 ">

          <p className="text-center text-gray-400 text-sm">

            © 2026 JobFinder. All rights reserved.

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;