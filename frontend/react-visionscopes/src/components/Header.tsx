import { Link } from "react-router-dom";
import "../styles/Header.css";

// Define the shape of the props this component accepts.
// string[] means "an array of strings" — correct syntax (not <string>[])
// ✅ Fix it to this

interface NavLink {
  label: string;
  path: string;
}

interface HeaderProps {
  title: string;
  username?: string;
  navLinks?: NavLink[];
}

// Destructure props directly in the function signature.
// No need to redeclare them with const inside — they're already variables here

function Header({ title, username, navLinks }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Title */}
        <h1 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h1>

        {/* Nav + User */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {navLinks?.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-white/60 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Username pill */}
          {username && (
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full pl-2 pr-4 py-1.5">
              {/* Avatar circle */}
              <div className="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center text-xs font-semibold text-white">
                {username.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-white/80 font-medium">
                {username}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
