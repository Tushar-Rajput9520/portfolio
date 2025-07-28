import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Password Generator",
    label: "React App",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
     "Secure & Stylish Password Generator Built with ⚛️ React & 🌬️ Tailwind CSS. Customize length, include 🔢 numbers & 🔣 symbols, and copy with one click 📋. Fast ⚡, responsive 📱, and perfect for strong password creation.",
    github: "https://github.com/Tushar-Rajput9520/Password-Generator",
    demo: "https://password-generator-tushar.vercel.app/",
    image: "/projects/curr.jpg",
  },
  {
    title: "Scrolling_Coffee_site",
    label: "JavaScript, and GSAP for animations. ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "",
    github: "https://github.com/Tushar-Rajput9520/Scrolling_Coffee_site",
    demo: "https://cofffee-cafe.netlify.app/",
    image: "/projects/image.png",
  },
  {
    title: "StayBooking",
    label: "MERN",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "A secure digital Booking with user authentication and full CRUD features, built using React, Node.js, Express, and MongoDB.",
    github: "https://github.com/Tushar-Rajput9520/StayBooking",
    demo: "https://mystaybooking-cms7.onrender.com/",
    image: "/projects/booking.jpg",
  },
  {
    title: "Currency Calculator",
    label: "JS Utility",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Developed a real-time currency converter using JavaScript, Fetch API, and external exchange data APIs.",
    github: "https://github.com/Tushar-Rajput9520/Currency_Convertor",
    demo:"https://currency-convertor-jade-beta.vercel.app/",
    image: "/projects/=cal.jpg",
  },
  {
    title: "WANDERLUST",
    label: "MERN",
     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "Wanderlust is a travel ✈️ website🎧built using the MEEN stack🏝️ (MongoDB🍹, Express⛱️, EJS🌞, Node.js🌊). It allows users to explore exciting travel destinations 🛍️, create 📸 and manage itineraries🎫, and share travel experiences 🧳through blogs. With user authentication🧑🏻‍💻 and a responsive design.",
    github: "https://github.com/Tushar-Rajput9520/WANDERLUST",
    demo: "https://wanderlust-002.onrender.com/listings",
    image: "/projects/WANDER.jpg",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    const scroll = () => {
      if (!isHovered.current) {
        container.scrollLeft += 2; // adjust speed here
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 15);
    return () => clearInterval(interval);
  }, []);

  const scrollingProjects = [...projects, ...projects]; // duplicate for infinite effect

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-3 text-center">
          Projects
        </h2>
<h4 className="text-center text-gray-600 mb-8">
  15+ projects crafted with love 🩶 Here are a few highlights..
</h4>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          {scrollingProjects.map(
            ({ title, description, github, demo, image, label, icon }, idx) => (
              <div
                key={`${title}-${idx}`}
                className="group relative min-w-[300px] max-w-[300px] bg-[var(--color-navbar-scrolled)] border-2 border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0 overflow-hidden"
              >
                {/* Image */}
                <div className="p-4 pb-0">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>

                {/* Hover overlay with description + badge */}
                <div className="absolute inset-0 bg-[var(--color-navbar-scrolled)] bg-opacity-90 text-[var(--color-primary)] text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-center">
                  <p className="mb-3">{description}</p>
                  {label && icon && (
                    <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      <img src={icon} alt={label} className="w-4 h-4" />
                      {label}
                    </span>
                  )}
                </div>

                {/* Title and links */}
                <div className="p-4 pt-3 z-20 relative">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                    {title}
                  </h3>
                  <div className="flex space-x-4 text-sm text-[var(--color-primary)]">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
