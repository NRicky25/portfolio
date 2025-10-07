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
          heading: "Key Features",
          bullets: [
            "User Authentication: secure registration, login, and session management",
            "Product Catalog: category browsing, search, and detailed product pages",
            "Shopping Cart: add, update, and remove items",
            "Secure Checkout: Stripe integration for payments",
            "Order Management: order history & order details",
            "Image Management: Cloudinary for efficient product image hosting and delivery",
            "Responsive Design: desktop, tablet, and mobile",
            "Admin Panel: (optional) manage products, orders, and users",
          ],
        },
        {
          heading: "Tech & Architecture",
          paragraphs: [
            "A React/Tailwind frontend communicates with a Node/Express REST API backed by MongoDB. Stripe handles secure payments while Cloudinary serves images. The system is container-/cloud-ready for scalable deployment.",
          ],
          bullets: [
            "Frontend: React, Redux, Tailwind CSS, Vite, HTML5/CSS3",
            "Backend: Node.js, Express.js, RESTful APIs",
            "Database: MongoDB (Atlas or local)",
            "Payments: Stripe",
            "Media: Cloudinary (images/video management)",
            "Deployment: AWS EC2 (app hosting), AWS S3 (optional static assets), Route 53 (optional DNS)",
            "Version Control: Git & GitHub",
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

      sections: [
        {
          heading: "Key Features",
          bullets: [
            "Data Preprocessing: feature scaling (Amount, Time) and training set preparation",
            "ML Model: Random Forest Classifier trained on a highly imbalanced dataset",
            "Threshold Optimization: tuned for fraud class; achieved F1 ≈ 0.85 (Precision ≈ 0.91, Recall ≈ 0.79)",
            "RESTful API: FastAPI endpoints for real-time predictions",
            "Robust Validation: Pydantic models for request schema + clear error responses",
            "Interactive Docs: Swagger UI (/docs) & ReDoc (/redoc)",
            "Containerization: Docker image for consistent, portable deploys",
          ],
        },
        {
          heading: "Tech & Architecture",
          paragraphs: [
            "Model development in notebooks, exported artifacts (model + scalers) are loaded by a FastAPI app for inference. The service exposes a /predict endpoint and includes interactive OpenAPI docs. The whole stack is packaged in Docker for local and cloud deployment.",
          ],
          bullets: [
            "Python 3.10",
            "Machine Learning: scikit-learn, pandas, numpy, joblib",
            "API Framework: FastAPI, uvicorn, pydantic",
            "Containerization: Docker",
            "Version Control: Git & GitHub",
          ],
        },
        {
          heading: "Project Structure",
          bullets: [
            "notebooks/model_training_v1.ipynb — EDA, training, evaluation",
            "src/main.py — FastAPI application (inference service)",
            "models/development/ — trained RandomForest + scalers (joblib)",
            "Dockerfile — API image definition",
            "requirements.txt — Python deps",
            "README.md — documentation",
          ],
        },
        {
          heading: "API Usage",
          paragraphs: [
            "After the container is running, open the docs at http://localhost:8000/docs or http://localhost:8000/redoc. Use /predict with a JSON body representing one or more transactions.",
          ],
          bullets: [
            "Root: http://localhost:8000/",
            "Swagger UI: http://localhost:8000/docs",
            "ReDoc: http://localhost:8000/redoc",
          ],
        },
        {
          heading: "Sample Request (single transaction)",
          paragraphs: [
            `{
              "Time": 123.45,
              "V1": -0.966, "V2": -0.847, "V3": 1.196, "V4": 0.25, "V5": -0.88,
              "V6": -0.306, "V7": 0.672, "V8": -0.046, "V9": 0.917, "V10": -0.992,
              "V11": -0.702, "V12": -0.141, "V13": -0.41, "V14": -0.066, "V15": 0.991,
              "V16": -0.692, "V17": -0.279, "V18": 0.038, "V19": 0.198, "V20": -0.063,
              "V21": -0.177, "V22": -0.076, "V23": -0.088, "V24": -0.015, "V25": 0.278,
              "V26": 0.147, "V27": -0.013, "V28": 0.008, "Amount": 50.0
            }`.trim(),
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
          heading: "Features",
          bullets: [
            "Ingestion: synthetic retail datasets with Python & Faker",
            "Storage: loaded into Postgres (Docker)",
            "Transformations: dbt models (staging, marts) + data quality tests",
            "Orchestration: Apache Airflow DAG (daily → generate → load → dbt run/test)",
            "Visualization: Streamlit dashboard (KPIs, trends, category revenue)",
            "CI/CD: GitHub Actions (dbt parse + Python lint on every push)",
            "Docs: architecture diagram, dbt lineage, screenshots",
          ],
        },
        {
          heading: "Architecture",
          paragraphs: [
            "Containerized services for Postgres, Airflow, and Streamlit. A scheduled DAG drives the pipeline: generate synthetic CSVs → load to Postgres → run dbt models/tests → serve curated marts to the dashboard. dbt lineage documents dependencies across models.",
          ],
        },
        {
          heading: "Quickstart",
          bullets: [
            "git clone https://github.com/your-username/retail-data-platform.git",
            "cd retail-data-platform",
            "cp .env.example .env",
            "docker compose up -d  # bring up Postgres + Adminer",
            "run_add.bat           # generate → load → dbt run/test",
            "streamlit run dashboard/app.py --server.address=0.0.0.0 --server.port=8501",
          ],
        },
        {
          heading: "Screenshots",
          paragraphs: [
            "Dashboard — Streamlit KPIs and trends",
            "Airflow DAG — end-to-end pipeline",
            "dbt Lineage — model dependencies",
          ],
        },
        {
          heading: "Data Quality (dbt tests)",
          bullets: [
            "not_null — IDs and foreign keys",
            "unique — primary keys",
            "relationships — fact ↔ dimension integrity",
            "accepted_values — region, category",
            "freshness — order_date recency",
          ],
        },
        {
          heading: "Why This Project?",
          bullets: [
            "Reproducible, containerized pipelines",
            "Orchestrated batch workflows",
            "Dimensional modeling with dbt",
            "Automated testing & monitoring",
            "Serving curated data to analysts/dashboards",
            "CI/CD for data with GitHub Actions",
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
          heading: "Features",
          bullets: [
            "Streaming ingestion with Kafka Producer written in Java",
            "Real-time processing with Kafka Consumer",
            "Persistent storage of raw and aggregated transactions in PostgreSQL",
            "Synthetic transaction generation for testing (UUID, timestamps, customer IDs, categories)",
            "Docker-based local infrastructure for reproducibility",
            "End-to-end demonstration of event-driven data pipelines",
          ],
        },
        {
          heading: "Architecture",
          paragraphs: [
            "Producer (Java) → Kafka Topic → Consumer (Java) → PostgreSQL",
            "The producer generates random customer transactions and publishes them to a Kafka topic. The consumer reads these events, inserts them into a `transactions_raw` table, and maintains a `customer_agg` table for aggregated totals.",
          ],
        },
        {
          heading: "Core Workflow",
          bullets: [
            "Producer creates synthetic events with unique IDs, timestamps, and purchase categories.",
            "Consumer processes messages in real-time and writes to Postgres.",
            "Aggregation logic maintains customer-level totals and transaction counts.",
            "PostgreSQL provides durable storage for downstream analysis.",
          ],
        },
        {
          heading: "Results",
          bullets: [
            "End-to-end verification of streaming ingestion and persistence.",
            "Demonstrated strong understanding of event-driven design.",
            "Containerized deployment using Docker for consistent local setup.",
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
    title: "Backend Developer",
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
