const projectsData = [
  {
    id: 1,
    year: "2025",

    title: "Cricket Shot Prediction",

    category: "AI / Deep Learning",

    status: "Completed",

    statusColor: "green",

    featured: true,

    description:
      "Developed a deep learning model using the VGG16 architecture to classify cricket shots from images. Integrated OpenCV for image preprocessing and built a Tkinter-based desktop interface for real-time prediction and visualization.",

    image: "/projects/cricket.png",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Tkinter",
      "VGG16",
    ],

    github: "",

    live: "",
  },

  {
    id: 2,
    year: "2025",

    title: "AI Voice Assistant",

    category: "Artificial Intelligence",

    status: "Ongoing",

    statusColor: "yellow",

    featured: true,

    description:
      "An intelligent desktop voice assistant capable of understanding voice commands, fetching live news, searching Wikipedia, opening applications, and performing automation tasks using speech recognition and text-to-speech technologies.",

    image: "/projects/assistant.jpg",

    tech: [
      "Python",
      "SpeechRecognition",
      "pyttsx3",
      "News API",
      "Wikipedia API",
      "Tkinter",
    ],

    github: "",

    live: "",
  },

  {
    id: 3,
    year: "2025",

    title: "Food Waste Reduction",

    category: "Hackathon Project",

    status: "Completed",

    statusColor: "green",

    featured: false,

    description:
      "Developed during a hackathon to reduce food waste by connecting restaurants and food providers with NGOs and individuals through an efficient web platform.",

    image: "/projects/food.jpg",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "",

    live: "",
  },

  {
    id: 4,
    year: "2024",

    title: "Weather Application",

    category: "Frontend Development",

    status: "Completed",

    statusColor: "green",

    featured: false,

    description:
      "A responsive weather application that displays real-time weather information using a Weather API with a clean, modern, and user-friendly interface.",

    image: "/projects/weather.png",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Weather API",
    ],

    github: "https://github.com/Dibyar21/weather-app",

    live: "https://weather-app-indol-tau-70.vercel.app/",
  },

  {
    id: 5,
    year: "2024",

    title: "Bank Management System",

    category: "Desktop Application",

    status: "Completed",

    statusColor: "green",

    featured: false,

    description:
      "A Python-based desktop banking application that manages customer accounts, deposits, withdrawals, balance inquiries, and transaction records using MySQL.",

    image: "/projects/bank.jpg",

    tech: [
      "Python",
      "Tkinter",
      "MySQL",
    ],

    github: "",

    live: "",
  },
];

export default projectsData;