import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";

export const socials = [
  {
    title: "facebook",
    icon: <FaSquareFacebook />,
    url: "https://www.facebook.com/MahmoudAshraf101/",
  },
  {
    title: "instagram",
    icon: <FaSquareInstagram />,
    url: "https://www.instagram.com/mahmoud_ash97/",
  },
  {
    title: "github",
    icon: <FaSquareGithub />,
    url: "https://github.com/Mahmoud-Ash",
  },
  {
    title: "linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mahmoud-ash/",
  },
];

export const projects = [
  {
    title: "E-commerce Web-app",
    desc: "Online Clothes Store MERN-Stack app",
    techs: [
      "React",
      "React Router",
      "Axios",
      "Redux Toolkit",
      "Redux Persist",
      "Stripe",
      "Express",
      "Mongoose",
      "JsonWebToken",
      "Crypto JS",
    ],
    img: "e-commerce1.png",
    link: "https://mern-ecommerce-ashz.vercel.app/",
    figma: "",
    repo: "https://github.com/Mahmoud-Ash/MERN-E-Commerce",
  },
  {
    title: "Byewind Dashboard",
    desc: "Admin Dashboard with dark-light theme",
    techs: [
      "React",
      "React Router",
      "Axios",
      "Recharts",
      "MUI Data Grid",
      "Tailwind CSS",
    ],
    img: "byewind-light.png",
    figma: "https://www.figma.com/community/file/1210542873091115123",
    link: "https://mahmoud-ash.github.io/ByeWindDashboardv2/",
    repo: "https://github.com/Mahmoud-Ash/ByeWindDashboardv2",
  },
];
