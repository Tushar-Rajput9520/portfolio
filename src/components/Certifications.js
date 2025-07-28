import { useEffect, useRef } from "react";

export default function Certifications() {
  const certifications = [
    {
      title: "Machine learning ",
      issuer: "skillUp",
      date: "May 2025",
      image: "/certifications/ml.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
   
    
   
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 2023",
      image: "/certifications/cyber.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
   
    {
      title: "Technology  job Submission",
      issuer: "Deloite ",
      date: "july 2025",
      image: "/certifications/de.jpg",
      link: "https://drive.google.com/drive/folders/1Gyv7rXQpnfR_8sCxGla6JYw3DXVUbs5p",
    },
     {
      title: "Artifical Intelligence ",
      issuer: "skillUp",
      date: "June 2025",
      image: "/certifications/ai.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
    {
      title: "Java Programming ",
      issuer: "HackerRank",
      date: "May 2025",
      image: "/certifications/haker.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
    {
      title: "Database Programming ",
      issuer: "Oracle Academy",
      date: "December 2024",
      image: "/certifications/oracle.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
     {
      title: "Expo IT Support ",
      issuer: "Sivansh Infotech",
      date: "March 2025",
      image: "/certifications/expo.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Infosys Springboard",
      date: "Dec 2024",
      image: "/certifications/javainfo.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
    {
      title: "DataBase Management System",
      issuer: "Infosys Springboard",
      date: "Nov 2024",
      image: "/certifications/infosis.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
    },
    {
      title: "50 Days Badge",
      issuer: "Leetcode",
      date: "February 2025",
      image: "/certifications/leet.jpg",
      link: "https://drive.google.com/drive/folders/1WCMAhrwmmJM2lsz5dueocw0aMC7G9T__",
      
     
    },
  ];

  const containerRef = useRef(null);
  const isHovered = useRef(false);

  // Auto-scroll logic
  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (!isHovered.current) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  // Duplicate cards for infinite loop
  const scrollingCards = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

        <div
          ref={containerRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <div className="inline-flex gap-6">
            {scrollingCards.map(({ title, issuer, date, image, link }, idx) => (
              <a
                key={`${title}-${idx}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 flex-shrink-0 bg-[var(--color-about-bg)] rounded-2xl border border-gray-300 shadow hover:shadow-lg transition"
              >
                <div className="p-2">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-40 object-cover rounded-xl mb-3"
                  />
                  <div className="text-center px-2">
                    <h3 className="text-md font-semibold text-gray-800 break-words leading-snug max-w-full">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 break-words">{issuer}</p>
                    <p className="text-xs text-gray-500 mt-1">{date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
