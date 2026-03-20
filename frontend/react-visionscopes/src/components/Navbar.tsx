import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/VisionScapesLogo-big.png";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <nav className="py-4 px-6 lg:px-12 fixed top-0 left-0 right-0 bg-indigo-500/20 backdrop-blur-lg z-50">
      <div className="max-w-9/10 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to={location.pathname === "/" ? "#" : "/"}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="VisionScapes Logo"
              className="mr-2 w-12 h-12 rounded-full"
            />
            <span className="text-4xl font-bold tracking-tight">
              VisionScapes
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {location.pathname === "/" && (
            <>
              <a
                href="#features"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </a>
              <a
                href="#examples"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Examples
              </a>
              <a
                href="#pricing"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
            </>
          )}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              type="button"
              className="border-tech-purple text-tech-purple hover:bg-tech-purple/10 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log In
            </Button>
            <Button
              className="bg-tech-purple hover:bg-tech-violet text-white cursor-pointer"
              type="button"
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-tech-blue border-t border-gray-800 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#examples"
              className="text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                className="border-tech-purple text-tech-purple w-full"
                type="button"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button
                className="bg-tech-purple hover:bg-tech-violet text-white w-full"
                type="button"
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
