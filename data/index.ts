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
    title: "Currently working as Backend Developer at Millionyse",
    description: "",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Project Repo",
    description: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type ProjectDetail = {
  id: number;
  slug: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string; // keep this as `/projects/${slug}`
  details?: {
    brief?: string; // one or more paragraphs
    repos?: { fe?: string; be?: string }; // optional repo links
    sections?: Array<{
      heading: string;
      paragraphs?: string[]; // render as <p>
      bullets?: string[]; // render as <li>
    }>;
    tools?: string[]; // small badges
    gallery?: string[]; // image URLs/paths
  };
};

export const projects = [
  {
    id: 1,
    slug: "ecommerce-website",
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
    link: "/projects/ecommerce-website",
    details: {
      brief:
        "Queen Shop is a full-stack e-commerce application designed to provide a seamless shopping experience. It demonstrates a robust backend, a dynamic frontend, secure payment processing, and scalable cloud deployment—covering the workflow from product browsing to order fulfillment.",

      // add repo URLs if/when you have them:
      repos: {
        fe: "https://github.com/NRicky25/queen-shop",
        be: "https://github.com/NRicky25/queen-shop",
      },

      sections: [
        {
          heading: "Approach",
          bullets: [
            {
              text: "Planning & Goals",
              sub: [
                "Outlined the MVP scope around a complete commerce flow: browse → product details → cart → checkout → order confirmation",
                "Focused on functionality first with room for reviews, wishlists, coupons",
                "Separated buyer vs admin requirements to guide architecture",
              ],
            },
            {
              text: "System Design & Architecture",
              sub: [
                "Frontend: React + Tailwind CSS",
                "Backend: Node.js + Express (/products, /cart, /orders, /auth)",
                "Database: MongoDB",
                "Payments: Stripe (client secret + optional webhook)",
                "Media: Cloudinary (responsive transforms, CDN)",
                "Deploy: AWS EC2 (+ Route 53, optional S3), SSL via Nginx",
              ],
            },
            {
              text: "Implementation Workflow",
              sub: [
                "Modeled product, user, order schemas; added seed scripts",
                "Built/validated APIs first (Postman), then UI flow (catalog → product → cart → checkout → success)",
                "Integrated Cloudinary in admin; stored public URLs on product docs",
                "Implemented Stripe Elements + server client-secret; webhook optional",
              ],
            },
            {
              text: "Testing & Quality Assurance",
              sub: [
                "Smoke-tested critical API paths (auth, cart, order)",
                "Walkthroughs for add-to-cart, checkout, order history",
                "Performance checks (Cloudinary compression, Lighthouse)",
                "Stripe dashboard for error visibility",
              ],
            },
            {
              text: "DevOps & Deployment",
              sub: [
                "GitHub flow: feature branches + PRs",
                "CI: lint/build on push (GitHub Actions)",
                "Backend on EC2 with PM2 (or Docker); static frontend via EC2/CDN",
                "Route 53 domain + SSL via Nginx reverse proxy",
              ],
            },
            {
              text: "Project Duration (Estimate)",
              sub: [
                "Part-time: 6–8 weeks for MVP (FE+BE+payments)",
                "Plus 2–3 weeks for testing, deployment, refinements",
              ],
            },
          ],
        },
        {
          heading: "Features",
          bullets: [
            "User Authentication: register/login with protected routes",
            "Product Catalog: category filtering, search, and product detail pages",
            "Shopping Cart: add/update/remove items with price totals",
            "Checkout: Stripe-powered secure payments (client secret flow)",
            "Order History: view past orders and statuses",
            "Admin Basics: add/edit products, Cloudinary image uploads",
            "Responsive UI: Tailwind-guided layouts for mobile → desktop",
            "Notifications: basic toasts for actions & error states",
          ],
        },
      ],

      tools: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Cloudinary",
        "AWS EC2",
        "(Optional) AWS S3",
        "(Optional) Route 53",
        "Git",
        "GitHub",
      ],
    },
  },
  {
    id: 2,
    slug: "anomaly-detector",
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
    // link: "https://github.com/NRicky25/anomaly-detector.git",
    link: "/projects/anomaly-detector",
    details: {
      brief:
        "This project detects fraudulent credit card transactions using an end-to-end ML workflow: preprocessing, model training/optimization, and deployment as a containerized REST API. It targets real-world class imbalance and optimizes the precision/recall trade-off for the fraud class.",

      repos: {
        be: "https://github.com/NRicky25/anomaly-detector",
        fe: "https://github.com/NRicky25/anomaly-frontend", // add later if you create a frontend
      },

      duration: "Part-time (evenings/weekends): 6–8 weeks",

      sections: [
        {
          heading: "Approach",
          bullets: [
            {
              text: "Planning & Problem Framing",
              sub: [
                "Defined the goal: detect fraudulent transactions with high recall while keeping precision practical for review teams",
                "Identified constraints: severe class imbalance, limited interpretability, need for real-time inference",
              ],
            },
            {
              text: "Data Preparation",
              sub: [
                "Loaded the public credit-card dataset; separated train/validation/test splits",
                "Scaled key features (Amount, Time) and preserved the anonymized V1–V28 components as-is",
                "Applied stratified splits to maintain class ratios across sets",
              ],
            },
            {
              text: "Modeling",
              sub: [
                "Started with baseline (Logistic Regression) → moved to RandomForest for non-linear boundaries",
                "Handled imbalance with class_weight and careful cross-validation",
                "Tracked metrics beyond accuracy: ROC-AUC, PR-AUC, Precision/Recall/F1 on the fraud class",
              ],
            },
            {
              text: "Threshold Tuning",
              sub: [
                "Optimized the decision threshold for the fraud class (maximize F1 while guarding precision)",
                "Validated the chosen threshold on a hold-out set to avoid optimistic bias",
              ],
            },
            {
              text: "API & Contracts",
              sub: [
                "Exported the trained model + scalers with joblib",
                "Designed FastAPI schemas (Pydantic) for single/batch prediction with strict validation",
                "Exposed `/predict` and documented with Swagger UI & ReDoc",
              ],
            },
            {
              text: "Packaging & Deployment",
              sub: [
                "Containerized the service with Docker for reproducible local and cloud runs",
                "Environment-driven config for thresholds, model paths, and log levels",
              ],
            },
            {
              text: "Testing & QA",
              sub: [
                "Smoke tests for API routes and schema errors (invalid/missing fields)",
                "Metric checks to ensure degradation doesn’t slip through (spot-check F1/precision/recall)",
              ],
            },
            {
              text: "Monitoring & Next Steps",
              sub: [
                "Baseline logging for predictions and errors; plan for drift checks on score distributions",
                "Future: model retraining pipeline, alerting on metric drops, feature importance reports",
              ],
            },
            {
              text: "Project Duration (Estimate)",
              sub: [
                "Part-time (evenings/weekends): 6–8 weeks for MVP (data → model → API → Docker)",
                "Add 2–4 weeks for monitoring, retraining workflow, and CI hardening",
              ],
            },
          ],
        },
        {
          heading: "Features",
          bullets: [
            "Prediction API: FastAPI endpoints for single & batch scoring",
            "Interactive Docs: Swagger UI (/docs) and ReDoc (/redoc)",
            "Model Artifacts: joblib-exported model and scalers",
            "Threshold Tuning: calibrated decision threshold for fraud class",
            "Validation: Pydantic schemas with robust error responses",
            "Containerization: Docker image for easy run/deploy",
            "CI: optional GitHub Actions for lint/build/test",
          ],
        },
      ],

      tools: [
        "Python 3.10",
        "scikit-learn",
        "pandas",
        "numpy",
        "joblib",
        "FastAPI",
        "uvicorn",
        "pydantic",
        "Docker",
        "Git",
        "GitHub",
        "Jupyter Notebook",
      ],
      // Add screenshots if you have them:
      // gallery: ["/shots/anomaly-1.png","/shots/anomaly-2.png"],
    },
  },
  {
    id: 3,
    slug: "retail-data-platform",
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
    // link: "https://github.com/NRicky25/retail-data-platform",
    link: "/projects/retail-data-platform",

    details: {
      brief:
        "A demo data platform that simulates a retail environment. It showcases ingestion, storage, transformations with dbt, orchestration with Airflow, analytics in Streamlit, CI/CD with GitHub Actions, and documentation (architecture + lineage).",

      sections: [
        {
          heading: "Approach",
          bullets: [
            {
              text: "Planning & Goals",
              sub: [
                "Framed the project as an end-to-end data engineering demo for a retail analytics pipeline",
                "Defined key objectives: simulate data ingestion → transformation → analytics using modern data stack tools",
                "Outlined modular architecture to support reproducibility and scalability (Dockerized services)",
              ],
            },
            {
              text: "Architecture Design",
              sub: [
                "Planned containerized setup for Postgres, Airflow, and Streamlit for isolated, reproducible environments",
                "Chose dbt for SQL-based transformations, testing, and lineage tracking",
                "Mapped daily orchestration DAG in Airflow to automate ingestion → load → transform → test",
              ],
            },
            {
              text: "Implementation",
              sub: [
                "Developed Python ingestion script using Faker to generate synthetic retail data (customers, products, sales)",
                "Loaded datasets into Postgres via batch pipeline and validated integrity with dbt tests",
                "Implemented dbt models (staging + marts) to create curated, analytics-ready tables",
                "Configured Airflow DAG to automate end-to-end pipeline runs",
              ],
            },
            {
              text: "Visualization & Analytics",
              sub: [
                "Built Streamlit dashboard to visualize KPIs like daily revenue, top categories, and customer segmentation",
                "Integrated aggregated tables from dbt for real-time metric refreshes",
                "Ensured dashboard responsiveness and lightweight deployment for demos",
              ],
            },
            {
              text: "Testing & CI/CD",
              sub: [
                "Created dbt test suite: not_null, unique, relationships, and accepted_values constraints",
                "Automated dbt parse + Python lint on each commit using GitHub Actions",
                "Used small synthetic datasets for quick regression validation of DAG and models",
              ],
            },
            {
              text: "Deployment & Documentation",
              sub: [
                "Deployed the stack locally via Docker Compose for consistent multi-container orchestration",
                "Documented architecture with diagrams (Airflow DAG, dbt lineage, Streamlit screenshots)",
                "Configured environment variables (.env) for database connections and credentials",
              ],
            },
            {
              text: "Project Duration (Estimate)",
              sub: [
                "Part-time (evenings/weekends): 6–8 weeks for full pipeline (data → dbt → Airflow → Streamlit)",
                "Additional 2–3 weeks for CI/CD integration, documentation, and dashboard polishing",
              ],
            },
          ],
        },
        {
          heading: "Features",
          bullets: [
            "Synthetic Ingestion: Python + Faker to generate retail datasets",
            "Data Warehouse: PostgreSQL with staged → marts layers",
            "Transformations: dbt models with tests and lineage",
            "Orchestration: Airflow DAG (generate → load → dbt run/test)",
            "Analytics: Streamlit dashboard for KPIs & trends",
            "CI/CD: GitHub Actions for dbt parse & Python lint",
            "Docs: architecture diagram and lineage screenshots",
          ],
        },
      ],

      tools: [
        "Python 3.12",
        "Postgres 14",
        "dbt-postgres",
        "Apache Airflow 2.9",
        "Streamlit",
        "Docker",
        "docker-compose",
        "GitHub Actions",
      ],

      // Optional screenshots if you have them:
      // gallery: ["/shots/retail-1.png","/shots/retail-2.png","/shots/retail-3.png"],
    },
  },
  {
    id: 4,
    slug: "kafka-pipeline",
    title: "Kafka Streaming Pipeline",
    des: "The system simulates transaction events (purchases by customers) and processes them through a Kafka topic.A consumer application stores both the raw transactions and aggregated per-customer totals in PostgreSQL.",
    img: "/kafka-pipeline.png",
    iconLists: [
      "/java.svg",
      "/Apache kafka.svg",
      "/PostgresSQL.svg",
      "/Docker.svg",
    ],
    // link: "https://github.com/NRicky25/kafka-pipeline",
    link: "/projects/kafka-pipeline",

    details: {
      brief:
        "A streaming data pipeline that demonstrates ingestion, real-time processing, and storage using Java, Apache Kafka, and PostgreSQL. The system simulates transactions flowing through Kafka topics, with producers generating events and consumers persisting raw and aggregated data to a database.",

      repos: {
        be: "https://github.com/NRicky25/kafka-pipeline",
      },

      sections: [
        {
          heading: "Approach",
          bullets: [
            {
              text: "Planning & Objectives",
              sub: [
                "Planned the project to simulate a real-time data streaming environment using Kafka as the backbone for event-driven communication",
                "Defined core goal: demonstrate ingestion, processing, and storage of continuous data streams with reproducibility and clarity",
                "Outlined producer–consumer flow architecture to ensure modularity and ease of testing",
              ],
            },
            {
              text: "Architecture Design",
              sub: [
                "Designed the pipeline around two main components: Kafka Producer and Kafka Consumer, communicating via a common topic",
                "Kafka Producer: responsible for generating synthetic transaction events (UUID, timestamp, customer ID, category, amount)",
                "Kafka Consumer: reads each event from the topic, writes raw records into `transactions_raw`, and updates aggregates in `customer_agg`",
                "Used Docker Compose to spin up Kafka, Zookeeper, and PostgreSQL for a reproducible local setup",
              ],
            },
            {
              text: "Implementation Strategy",
              sub: [
                "Developed producer and consumer as standalone Java applications using the Kafka client library",
                "Used Gradle for dependency management and build automation",
                "Implemented robust serialization/deserialization and ensured consumer idempotency for duplicate event handling",
                "Added configuration files for topic names, partition count, and bootstrap servers to keep environment variables flexible",
              ],
            },
            {
              text: "Testing & Validation",
              sub: [
                "Tested producer output for consistent event schema and message frequency",
                "Verified consumer processing logic by comparing record counts between Kafka topics and PostgreSQL tables",
                "Conducted aggregation validation — ensuring customer-level totals matched individual transaction sums",
              ],
            },
            {
              text: "Deployment & Containerization",
              sub: [
                "Containerized the full environment with Docker Compose for one-command setup and teardown",
                "Validated connectivity between containers (Producer → Kafka → Consumer → Postgres)",
                "Ensured logs were viewable across services for debugging and performance tuning",
              ],
            },
            {
              text: "Project Duration (Estimate)",
              sub: [
                "Part-time (evenings/weekends): 4–6 weeks total",
                "1 week — setup & architecture design",
                "2 weeks — implementation of producer, consumer, and database logic",
                "1–2 weeks — testing, debugging, and Docker environment polish",
              ],
            },
          ],
        },
        {
          heading: "Features",
          bullets: [
            "Kafka Producer: synthetic transaction events (UUID, time, amount, category)",
            "Kafka Consumer: persistence to PostgreSQL with raw + aggregates",
            "Real-time Aggregation: per-customer totals and counts",
            "Configurable Topics: bootstrap servers, partitions, and retention",
            "Docker Compose: Kafka, Zookeeper, and Postgres for local dev",
            "Validation: record counts and aggregation checks across components",
          ],
        },
      ],

      tools: [
        "Java",
        "Apache Kafka",
        "PostgreSQL",
        "Docker",
        "Gradle",
        "Git",
        "GitHub",
      ],

      // Optional screenshots if you have them:
      // gallery: ["/shots/kafka-1.png","/shots/kafka-2.png"],
    },
  },
];

export const workExperience = [
  {
    id: 1,
    date: "September 2025 - Present",
    title: "Backend Developer",
    company: "Millionyse",
    desc: "Developing and maintaining backend services and APIs using FastAPI, ensuring secure data handling and smooth integration with the frontend.",
    className: "md:col-span-2",
    thumbnail: "/backend.svg",
  },
  {
    id: 2,
    date: "June 2023 - August 2025",
    title: "Research Assistant",
    company: "University of Canberra",
    desc: "Worked in a small research team developing machine learning models to analyze and predict power grid performance in Tasmania, using Python for data processing and visualization.",
    className: "md:col-span-2",
    thumbnail: "/research.jpg",
  },
  {
    id: 3,
    date: "July 2024 - October 2024",
    title: "Full-Stack Intern",
    company: "Self Plus Plus",
    desc: "Collaborated with the team to design and implement full-stack features, building RESTful API endpoints and improving the user interface for a smoother, more interactive experience.",
    className: "md:col-span-2",
    thumbnail: "/d-ill.svg",
  },
  {
    id: 4,
    date: "Augest 2020 - November 2022",
    title: "Software Engineering Graduate",
    company: "University of Canberra",
    desc: "Graduated with a degree in Software Engineering, gaining hands-on experience across full-stack development, backend APIs, and machine learning through academic and internship projects.",
    className: "md:col-span-2",
    thumbnail: "/software.png",
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
