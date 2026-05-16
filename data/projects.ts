export type Project = {
    id: number
    title: string
    description: string
    tags: string[]
    images: string[]
    github: string
    live: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Park-in",
        description:
            "A mobile and web application for managing parking spaces in designated areas and other parking management operations inside the university.",
        tags: ["Flutter", "Dart", "Google Firebase"],
        images: [
            "/images/park-in-1.png",
            "/images/park-in-2.png",
            "/images/park-in-3.png",
        ],
        github: "https://github.com/MNJDen/Park_in_Capstone",
        live: "https://park-in-capstone.web.app/",
    },
    {
        id: 2,
        title: "WeFit",
        description:
            "A mobile application for managing workout plans, featuring personalized workout planning, a progress tracker, and an in-app messaging system.",
        tags: ["Flutter", "Dart", "Google Firebase"],
        images: [
            "/images/wefit-1.jpg",
        ],
        github: "https://github.com/MNJDen/Park_in_Capstone",
        live: "",
    },
    {
        id: 3,
        title: "CSNHS Library Management System",
        description:
            "A web-based library management system for the Camarines Sur National High School, built using PHP and MySQL. It provides features for managing book inventory, tracking borrowing and returning of books, and implementing inventory management and distribution systems.",
        tags: ["PHP", "MySQL", "JavaScript"],
        images: [
            "/images/lms-1.png",
            "/images/lms-2.png",
            "/images/lms-3.png",
            "/images/lms-4.png",
            "/images/lms-5.png",
        ],
        github: "https://github.com/MNJDen/WeFit",
        live: "",
    },
]