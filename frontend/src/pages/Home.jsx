import React, { useEffect, useRef } from 'react';
import { Users, GraduationCap, LogIn, ArrowRight, Building, Briefcase, Github, Linkedin, Mail, Heart, Code, Palette } from 'lucide-react';

// 1. Creator data extracted into an array for cleaner code
const creators = [
  {
    name: "Varanasi Pavan Kalyan",
    role: "Co-Founder & Software Engineer",
    image: "../../Pavan_photo.jpg",
    description: "Passionate full-stack developer with a vision to bridge the gap between alumni and students through innovative technology.",
    skills: [
      { icon: <Code className="h-4 w-4" />, text: "Full-Stack Development" },
      { icon: <Building className="h-4 w-4" />, text: "Creative Thinking" },
      { icon: <Users className="h-4 w-4" />, text: "Problem Solving" }
    ],
    socialLinks: [
      { icon: <Github className="h-5 w-5" />, href: "https://github.com/pavan-234", label: "GitHub" },
      { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/pavan-kalyan-varanasi-210573267/", label: "LinkedIn" },
      { icon: <Mail className="h-5 w-5" />, href: "mailto:varanasipavankalyan07@gmail.com", label: "Email" }
    ]
  },
  {
    name: "V.Tirumalesh Naidu",
    role: "Co-Founder & Technical Strategist",
    image: "../../Tirumalesh_img.jpg",
    description: "Creative problem-solver focused on building seamless digital solutions that strengthen the bond between students and alumni.",
    skills: [
      { icon: <Palette className="h-4 w-4" />, text: "Full-Stack Development" },
      { icon: <Heart className="h-4 w-4" />, text: "Backend Engineering " },
      { icon: <Building className="h-4 w-4" />, text: "Community Engagement" }
    ],
    socialLinks: [
      { icon: <Github className="h-5 w-5" />, href: "https://github.com/Tirumalesh44", label: "GitHub" },
      { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/tirumalesh44/", label: "LinkedIn" },
      { icon: <Mail className="h-5 w-5" />, href: "tiru5210@gmail.com", label: "Email" }
    ]
  },
  {
    name: "S.Chetan Reddy",
    role: "API development, database design",
    image: "../../chetan_reddy_img.jpg",
    description: "Designing intuitive and beautiful interfaces that connect people and create meaningful experiences.",
    skills: [
      { icon: <Palette className="h-4 w-4" />, text: "UI/UX Design" },
      { icon: <Heart className="h-4 w-4" />, text: "User Research" },
      { icon: <Users className="h-4 w-4" />, text: "Prototyping" }
    ],
    socialLinks: [
      { icon: <Github className="h-5 w-5" />, href: "https://gitHub.com/ChetanReddy1303", label: "GitHub" },
      { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedIn.com/in/chetanreddysangam/", label: "LinkedIn" },
      { icon: <Mail className="h-5 w-5" />, href: "chetanreddy1303@gmail.com", label: "Email" }
    ]
  },
  {
    name: "Ch.Jyoshikha",
    role: "Connect with alumni & students",
    image: "../../jyoshika_img.jpg",
    description: "A strategic thinker dedicated to building products that solve real-world problems for our community.",
    skills: [
      { icon: <Briefcase className="h-4 w-4" />, text: "Product Strategy" },
      { icon: <Building className="h-4 w-4" />, text: "Agile Methodologies" },
      { icon: <Users className="h-4 w-4" />, text: "Community Building" }
    ],
    socialLinks: [
      { icon: <Github className="h-5 w-5" />, href: "https://github.com/Jyo2207", label: "GitHub" },
      { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/jyoshika-ch-b98782291/", label: "LinkedIn" },
      { icon: <Mail className="h-5 w-5" />, href: "jyoshikach22@gmail.com", label: "Email" }
    ]
  }
];

// 2. New self-contained component for infinite scrolling
const InfiniteMovingCards = ({ items, speed = "slow" }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollerInner = scroller.querySelector(".scroller-inner");
      if(scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        
        // Duplicate items for seamless looping
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }, []);

  const getSpeedClass = () => {
    if (speed === "fast") return "animate-scroll-fast";
    if (speed === "normal") return "animate-scroll-normal";
    return "animate-scroll-normal";
  };
  
  return (
    <>
      {/* 3. CSS keyframes and classes are defined here. No config change needed. */}
      <style>
        {`
          @keyframes scroll {
            to {
              transform: translate(calc(-50% - 1rem)); /* 1rem is half the gap */
            }
          }
          .animate-scroll-slow {
            animation: scroll 80s linear infinite;
          }
          .animate-scroll-normal {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll-fast {
            animation: scroll 20s linear infinite;
          }
          .scroller:hover .scroller-inner {
            animation-play-state: paused;
          }
        `}
      </style>
      <div
        ref={scrollerRef}
        className="scroller w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <div className={`scroller-inner flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap ${getSpeedClass()}`}>
  {items.map((item, idx) => (
    <CreatorCard
      key={idx}
      name={item.name}
      role={item.role}
      image={item.image}
      description={item.description}
      skills={item.skills}
      socialLinks={item.socialLinks}
    />
  ))}
</div>

      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
  backgroundImage: `url('https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
  filter: 'blur(1px)'
}}

        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80" />
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="w-full max-w-7xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                <span className="inline-block transform transition-all duration-700 hover:scale-105">
                  Bridge Batch
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Your gateway to lifelong connections, mentorship opportunities, and professional growth with your college community.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-8 md:grid-cols-3 mb-12 max-w-5xl mx-auto">
              <FeatureCard 
                icon={<Users className="h-8 w-8" />}
                title="Connect"
                description="Network with alumni and students from your college across the globe."
              />
              <FeatureCard 
                icon={<Building className="h-8 w-8" />}
                title="Grow"
                description="Access exclusive learning resources and development opportunities."
              />
              <FeatureCard 
                icon={<Briefcase className="h-8 w-8" />}
                title="Thrive"
                description="Discover job opportunities shared by alumni in your field."
              />
            </div>

            {/* Registration Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16 max-w-5xl mx-auto">
              <RegistrationCard
                to="/register/student"
                title="Register as Student"
                icon={<GraduationCap className="h-6 w-6" />}
                description="Join as a current student to connect with alumni mentors and opportunities."
                bgColor="from-blue-600 to-blue-700"
                hoverColor="from-blue-500 to-blue-600"
              />
              <RegistrationCard
                to="/register/alumni"
                title="Register as Alumni"
                icon={<Users className="h-6 w-6" />}
                description="Register as an alumni to give back and stay connected with your alma mater."
                bgColor="from-purple-600 to-purple-700"
                hoverColor="from-purple-500 to-purple-600"
              />
              <RegistrationCard
                to="/login"
                title="Log In"
                icon={<LogIn className="h-6 w-6" />}
                description="Already have an account? Sign in to access your dashboard."
                bgColor="from-gray-700 to-gray-800"
                hoverColor="from-gray-600 to-gray-700"
                isLastCard={true}
              />
            </div>

            {/* About Us Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Meet the passionate minds behind Bridge Batch, dedicated to connecting communities and fostering growth.
                </p>
              </div>

              {/* 5. Replaced the old grid with the new infinite scroller component */}
              <InfiniteMovingCards
                  items={creators}
                  speed="medium"
              />
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center mb-16 max-w-5xl mx-auto">
              <p className="text-blue-50 italic mb-4">"The function of education is to teach one to think intensively and to think critically. Intelligence plus character—that is the goal of true education."</p>
              <p className="text-blue-200 font-medium">— Dr. Martin Luther King</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Bridge Batch</h3>
                <p className="text-blue-100 mb-6 max-w-md">
                  Connecting alumni and students to build stronger communities, foster mentorship, and create opportunities for lifelong growth.
                </p>
                <div className="flex space-x-4">
                  <SocialIcon icon={<Github className="h-5 w-5" />} href="https://github.com/pavan-234" />
                  <SocialIcon icon={<Linkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/pavan-kalyan-varanasi-210573267/" />
                  <SocialIcon icon={<Mail className="h-5 w-5" />} href="mailto:varanasipavankalyan07@gmail.com" />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <FooterLink href="#" text="About Us" />
                  <FooterLink href="#" text="How It Works" />
                  <FooterLink href="#" text="Success Stories" />
                  <FooterLink href="#" text="Contact" />
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                <ul className="space-y-2">
                  <FooterLink href="#" text="Help Center" />
                  <FooterLink href="#" text="Privacy Policy" />
                  <FooterLink href="#" text="Terms of Service" />
                  <FooterLink href="#" text="Community Guidelines" />
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm">
                © 2025 Bridge Batch. All rights reserved.
              </p>
              <p className="text-blue-200 text-sm mt-2 md:mt-0">
                Made with <Heart className="h-4 w-4 inline text-red-400" /> for building connections
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 text-blue-200 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

const RegistrationCard = ({ to, title, icon, description, bgColor, hoverColor, isLastCard }) => (
  <a
    href={to}
    className={`block rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${isLastCard ? 'md:col-span-2 lg:col-span-1' : ''}`}
  >
    <div className={`h-full bg-gradient-to-br ${bgColor} hover:${hoverColor} p-6 flex flex-col`}>
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/20 text-white mb-4">
          {icon}
        </div>
        <ArrowRight className="h-5 w-5 text-white/70" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-100 mb-4">{description}</p>
      <div className="mt-auto pt-4">
        <span className="inline-flex items-center text-sm font-medium text-white">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </div>
    </div>
  </a>
);
// Modified CreatorCard to work with the scroller
const CreatorCard = ({ name, role, image, description, skills, socialLinks }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full w-[350px] flex-shrink-0">
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-400/30"
          />
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-300 font-medium mb-3">{role}</p>
        <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mb-6 mt-auto">
        <div className="grid gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center text-blue-200 text-sm">
              <div className="mr-2 text-blue-300">
                {skill.icon}
              </div>
              {skill.text}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white transition-all duration-200"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};


const SocialIcon = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-blue-200 hover:bg-white/20 hover:text-white transition-all duration-200"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
      >
        {text}
      </a>
    </li>
  );
};

function App() {
  return <Home />;
}

export default App;