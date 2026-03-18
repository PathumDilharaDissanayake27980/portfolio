"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const fs_1 = require("fs");
// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse((0, fs_1.readFileSync)("./serviceAccountKey.json", "utf8"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
const db = firebase_admin_1.default.firestore();
const projects = [
    {
        title: "Security Testing and Threat Prediction of MLOs in Wi-Fi 7",
        description: "A review of Digital Twins for security testing and threat prediction for MLO exploits in Wi-Fi 7.",
        image: "https://picsum.photos/400/300?random=1",
        slug: "wifi-7-security",
        category: "research",
        content: `
        <h2>Project Overview</h2>
        <p>This project explores the security challenges of Multi-Link Operations (MLOs) in the upcoming Wi-Fi 7 (IEEE 802.11be) standard. While MLO promises significant performance improvements, its complexity introduces new attack surfaces that are not yet well understood. This research focuses on using Network Digital Twins (NDTs) to model and predict MLO-related threats, particularly those related to the backoff mechanism and packet steering.</p>
        <h3>Objectives</h3>
        <ul>
          <li>Survey the Wi-Fi 7 MLO Attack Surface.</li>
          <li>Re-frame Performance Anomalies as Security Exploits.</li>
          <li>Review State-of-the-Art NDTs.</li>
          <li>Identify the Critical Research Gap.</li>
        </ul>
        `,
    },
    {
        title: "Smart Canteen Management System",
        description: "A system to modernize and streamline the university canteen experience using IoT and other technologies.",
        image: "https://picsum.photos/400/300?random=2",
        slug: "smart-canteen",
        category: "iot",
        content: `
        <h2>Project Overview</h2>
        <p>The Smart Canteen Management System is a third-year embedded systems project that aims to improve the efficiency and user experience of the university canteen. The system includes an e-menu, camera-based crowd monitoring, and cashless payment integration. The goal is to reduce waiting times, improve order accuracy, and provide a more convenient and modern canteen experience for students and staff.</p>
        <h3>Features</h3>
        <ul>
          <li>E-menu with online ordering.</li>
          <li>Real-time crowd monitoring using cameras.</li>
          <li>Cashless payment using RFID cards.</li>
        </ul>
        `,
    },
    {
        title: "CardioGuard - Heart Patient Management System",
        description: "A machine learning project to predict the probability of heart failure in cardiac patients.",
        image: "https://picsum.photos/400/300?random=3",
        slug: "heart-patient-management",
        category: "ml",
        content: `
        <h2>Project Overview</h2>
        <p>CardioGuard is a second-year machine learning project that aims to assist doctors in diagnosing and managing heart patients. The system includes a cardiac patient database management system and a machine learning model that predicts the probability of heart failure based on various clinical parameters. The goal is to provide a tool that can help doctors make more informed decisions and improve patient outcomes.</p>
        <h3>Features</h3>
        <ul>
          <li>Patient database management system.</li>
          <li>Machine learning model for heart failure prediction.</li>
          <li>User-friendly interface for doctors.</li>
        </ul>
        `,
    },
    {
        title: "Stock Market Prediction System",
        description: "A neural network-based system to analyze historical data and predict future stock market behavior.",
        image: "https://picsum.photos/400/300?random=4",
        slug: "stock-market-prediction",
        category: "ml",
        content: `
        <h2>Project Overview</h2>
        <p>This project, developed for a neural networks course, uses a neural network to predict future stock market behavior based on historical data. The system is built using Python, TensorFlow, and Keras. The goal is to create a tool that can help investors make more informed decisions by providing them with insights into the future of the stock market.</p>
        `,
    },
    {
        title: "Weather Effect Removal from Images",
        description: "A computer vision project to remove diverse weather effects from images, significantly improving output quality.",
        image: "https://picsum.photos/400/300?random=5",
        slug: "weather-effect-removal",
        category: "cv",
        content: `
        <h2>Project Overview</h2>
        <p>This project, developed for a computer vision course, uses computer vision techniques to remove weather effects such as rain, snow, and fog from images. The goal is to improve the quality of images taken in adverse weather conditions, which can be useful for a variety of applications such as autonomous driving and surveillance.</p>
        `,
    },
];
const blogPosts = [
    {
        "title": "Securing Wi-Fi 7: A Deep Dive into MLO Threat Prediction",
        "slug": "wifi-7-security-deep-dive",
        "description": "An in-depth look at the security challenges of Wi-Fi 7's Multi-Link Operations (MLO) and how we can predict and mitigate threats.",
        "image": "https://picsum.photos/400/300?random=1",
        "content": "<p>Wi-Fi 7 is the next generation of Wi-Fi, and it promises to be faster and more reliable than ever before. However, with new features like Multi-Link Operations (MLO), there are also new security challenges. In this blog post, we will take a deep dive into the security of Wi-Fi 7 and discuss how we can predict and mitigate threats.</p>"
    },
    {
        "title": "Building a Smart Canteen: An IoT Case Study",
        "slug": "smart-canteen-iot-case-study",
        "description": "Learn how we built a smart canteen management system using IoT devices to improve efficiency and customer experience.",
        "image": "https://picsum.photos/400/300?random=2",
        "content": "<p>In this blog post, we will walk you through the process of building a smart canteen management system. We will discuss the challenges we faced, the technologies we used, and the results we achieved. By the end of this post, you will have a good understanding of how to build your own IoT projects.</p>"
    },
];
const seedDatabase = async () => {
    try {
        // Seed projects
        const projectsCollection = db.collection("projects");
        for (const project of projects) {
            await projectsCollection.doc(project.slug).set(project);
        }
        console.log("Projects seeded successfully!");
        // Seed blog posts
        const blogCollection = db.collection("blog");
        for (const post of blogPosts) {
            await blogCollection.doc(post.slug).set({ ...post, createdAt: new Date() });
        }
        console.log("Blog posts seeded successfully!");
    }
    catch (error) {
        console.error("Error seeding database:", error);
    }
};
seedDatabase();
