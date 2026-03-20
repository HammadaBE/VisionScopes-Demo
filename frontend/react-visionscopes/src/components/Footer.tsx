import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-tech-purple to-tech-teal"></div>
              <span className="text-xl font-bold">VisionScapes</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your 2D videos into immersive 3D scenes with our
              cutting-edge AI technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-tech-purple"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#examples"
                  className="text-gray-400 hover:text-tech-purple"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-tech-purple"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  API Access
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-tech-purple"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-tech-purple">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm order-2 md:order-1">
            &copy; {year} VisionScapes. All rights reserved.
          </p>
          <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-2">
            <a href="#" className="text-gray-400 hover:text-tech-purple">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-tech-purple">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
