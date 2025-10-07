export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Focused on clear client communication. ",
    description: "",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Expertise",
    description: "I’m always eager to learn and grow.",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Curious technologist with a strong passion for learning and growth in development",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Internship as Backend Developer at Millionyse",
    description: "",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Connect and Learn More About Me",
    description: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commernce Website",
    des: "A fully responsive e-commerce platform with seamless user experience, featuring dynamic product listings, secure payment integration, and a modern design",
    img: "/queen-shop.png",
    iconLists: [
      "/nodejs.svg",
      "/re.svg",
      "/tail.svg",
      "/javascript.svg",
      "/mongodb.svg",
    ],
    link: "https://demo1.queen-shop.xyz/",
  },
  {
    id: 2,
    title: "Portfolio",
    des: "An interactive and visually engaging portfolio showcasing my projects and skills. Inspired by Adrian, this fully responsive e-Portfolio emphasizes user experience with smooth navigation, elegant design, and a focus on my professional journey.",
    img: "/portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/NRicky25/portfolio",
  },
  {
    id: 3,
    title: "Anomaly Detection",
    des: "This project demonstrates an end-to-end Machine Learning solution for detecting fraudulent credit card transactions. It encompasses data preprocessing, model training and optimization, and deployment as a containerized RESTful API. The goal is to identify anomalous transactions that might indicate fraud, leveraging a real-world imbalanced dataset.",
    img: "/dashboard.png",
    iconLists: [
      "/scikit-learn.svg",
      "/pandas.svg",
      "/Numpy.svg",
      "/FastAPI.svg",
      "/Docker.svg",
    ],
    link: "https://github.com/NRicky25/anomaly-detector.git",
  },
  {
    id: 4,
    title: "Retail Data Platform",
    des: "This project is a demo data platform architecture built to simulate a retail environment.It demonstrates ingestion, storage, transformation, and analytics using modern data engineering tools.",
    img: "/airflow.png",
    iconLists: [
      "/python.svg",
      "/Apache Airflow.svg",
      "/streamlit.svg",
      "/PostgresSQL.svg",
      "/Docker.svg",
    ],
    link: "https://github.com/NRicky25/retail-data-platform",
  },
  {
    id: 5,
    title: "Kafka Streaming Pipeline",
    des: "The system simulates transaction events (purchases by customers) and processes them through a Kafka topic.A consumer application stores both the raw transactions and aggregated per-customer totals in PostgreSQL.",
    img: "/kafka-pipeline.png",
    iconLists: [
      "/java.svg",
      "/Apache kafka.svg",
      "/PostgresSQL.svg",
      "/Docker.svg",
    ],
    link: "https://github.com/NRicky25/kafka-pipeline",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer Intern",
    desc: "Building backend services and API endpoints for Sub system. a business directory platform that supports small businesses in creating an online presence and engaging with their communities.",
    className: "md:col-span-2",
    thumbnail: "/backend.svg",
  },
  {
    id: 2,
    title: "Full-Stack Intern",
    desc: "at Selfplusplus Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/d-ill.svg",
  },
  {
    id: 3,
    title: "Software Engineering Graduate",
    desc: "Completed a degree in Software Engineering, with hands-on experience in full-stack development through academic projects and internships.",
    className: "md:col-span-2",
    thumbnail: "/software.png",
  },
  {
    id: 4,
    title: "Research Assistant",
    desc: "Gathering, cleaning, and analysing data, Designing dashboards and reports",
    className: "md:col-span-2",
    thumbnail: "/research.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/NRicky25", // GitHub URL
  },
  {
    id: 2,
    img: "/twit-x.svg",
    url: "https://x.com/home", // Twitter URL
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/kengeang-kang/",
  },
];
