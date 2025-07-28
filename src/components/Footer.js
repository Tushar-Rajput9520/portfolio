import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-about-bg)] py-6 mt-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        
        {/* Left: Logo + Text */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
         
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Tushar Singh. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons using external SVG URLs */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Tushar-Rajput9520"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/217753/github.svg"
              alt="GitHub"
              className="h-6 w-6"
              title="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-singh-068426257/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/138936/linkedin.svg"
              alt="LinkedIn"
              className="h-6 w-6"
              title="LinkedIn"
            />
          </a>
          <a
            href="mailto:tusharsinghkrj@gmail.com"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            <img
              src="https://icongr.am/feather/mail.svg?size=24&color=4b5563"
              alt="Email"
              className="h-6 w-6"
              title="Email"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
