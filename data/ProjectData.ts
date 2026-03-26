export interface ProjectItem {
    title: string;
    period?: string;
    organization?: string;
    description: string;
    tech: string[];
    url: { title: string; link: string; }[] | [];
}

const ProjectData: ProjectItem[] = [
    {
        title: "Symbal",
        description: "An app which let's anyone create games using AI in minutes with solana powering the transaction and reward layer.",
        tech: ["Solana", "AI", "Mobile"],
        url: []
    },
    {
        title: "Doveva",
        description: "An app for connecting carehomes and care givers to care receivers in U.K. Built with React Native, the app features a user-friendly interface for seamless navigation and interaction. I was responsible for developing the app and building a backend using Firebase to manage user data, authentication, and real-time updates. The app is currently live on both the App Store and Play Store, providing a reliable platform for care services.",
        tech: ["React Native", "TypeScript", "Firebase"],
        url: [
            {
                title: "App Store",
                link: "https://apps.apple.com/us/app/doveva/id6753165876",
            },
            {
                title: "Play Store",
                link: "https://play.google.com/store/apps/details?id=com.harley.doveva",
            }
        ]
    },
    {
        title: "Reckon",
        period: "October - November 2024",
        organization: "Freelance",
        description: "This is a cross platform application targetted at Quantity surveyors, civil Engineers and real estate developers. It enables them to manage their projects material (BOQs), track expenses, and access marketplace. I was responsible for developing the application using Flutter and making REST API request for backend services.",
        tech: ["Flutter", "Dart", "Firebase", "Bloc"],
        url: [
            {
                title: "Play Store",
                link: "https://play.google.com/store/apps/details?id=com.thinktech.reckon"
            }
        ]
    },
    {
        title: "Ecotyper",
        description: "AI-based typing game built in Flutter; implemented responsive layout and local storage, using Firebase for rewards tracking.",
        tech: ["Flutter", "AI", "Firebase", "Local Storage"],
        url: []
    },
    {
        title: "Tita flow",
        period: "April - June 2025",
        organization: "Freelance",
        description: "This is a DApp built on solana which enable flexible and configurable fundraising for any project or cause. I was responsible for developing the frontend of the application using React and Next JS, integrating the solana wallet adapter for wallet connection, and implementing the smart contract using Anchor.",
        tech: ["React", "Next JS", "Solana", "Anchor"],
        url: [
            {
                title: "Visit Site",
                link: "https://titaflow.com/"
            },
        ]
    },
    {
        title: "Lyrics Lab",
        period: "April 2024",
        organization: "Freelance",
        description: "This is a cross platform mobile app built with flutter which enable songwriters write and record songs in app",
        tech: ["Flutter", "Dart", "Firebase", "Bloc", "Next JS"],
        url: [
            {
                title: "Visit Site",
                link: "https://lyricslab.antobuild.tech"
            }
        ]
    },
    {
        title: "Bold Sports",
        period: "2022 - 2023",
        organization: "Bold Sports NG",
        description: "I was responsible for developing and deploying the android and ios application for a sport news website using. Flutter bloc was used for state management. I was able to successfully deploy the application to playstore and app store accessible through",
        tech: ["Dart", "Flutter", "Firebase", "CodeMagic"],
        url: [
            {
                title: "Playstore Link",
                link: "https://play.google.com/store/apps/details?id=ng.boldsports.news.template"
            },
            {
                title: "App store Link",
                link: "https://apps.apple.com/us/app/bold-sports-ng/id1661467529"
            }
        ],
    },
    {
        title: "Just Marrakech",
        period: "August - November 2023",
        organization: "Freelance",
        description: "This is a cross platform application built for a Moroccan Tour Company which enable them facilitate the connection of tour guides and customers, in which they can transact, communicate and review each other through the app",
        tech: ["Flutter", "Dart", "Firebase", "Stripe Integration", ],
        url: [
            {
                title: "Download link",
                link: "https://drive.google.com/file/d/1ys51fNgBEWmf_L7g6bTQA0O1ni_-EaG0/view?usp=sharing"
            }
        ]
    },
    {
        title: "Block Pub",
        period: "2023",
        organization: "Personal",
        description: "A Decentralized application which enable authors publish and manage their work on the ethereum blockchain. I was responsible for developing the app and the smart contract of the application",
        tech: ["React", "Javascript", "Solidity", "NextJs"],
        url: [
            {
                title: "Web app url",
                link: "https://block-pub.vercel.app/"
            },
            {
                title: "Github",
                link: "https://github.com/ANTONINEUTRON/block_pub"
            }
        ],
    },
    {
        title: "Story Line",
        period: "2022",
        organization: "Freelance",
        description: "In my freelance role, I was assigned the responsibility of end-to-end development and deployment of a mobile application dedicated to novel reading. This entailed creating the application for Android and iOS using Flutter, deploying it on the Google Play Store, and building the admin dashboard using React. Additionally, I utilized Firebase to create a backend, ensuring a seamless and comprehensive user experience for both frontend and backend functionalities.",
        tech: ["Flutter", "React", "Firebase"],
        url: [
            {
                title: "Playstore url",
                link: "https://play.google.com/store/apps/details?id=com.neutron.story_line"
            }
        ]
    },
    {
        title: "AlterPay",
        period: "2021",
        organization: "Personal",
        description: "This was my submission to the 2021 FSI Financial Inclusion Hackathon. The application, built with kotlin, enables traders to charge a debit card by utilizing Google's ML Kit Vision API to extract the card details. The solution secured the third position in the hackathon.",
        tech: ["Kotlin", "XML"],
        url: [
            {
                title: "Download link",
                link: "https://drive.google.com/file/d/1qB2dFfBODmAPgXYWGyZ_9cU9kALIohca/view?usp=drive_link"
            },
            {
                title: "Github",
                link: "https://github.com/ANTONINEUTRON/AlterPay"
            }
        ]
    },
    {
        title: "Type Hit",
        period: "2018",
        organization: "Personal",
        description: "This game is a fun personal project I undertook when starting out with Android development",
        tech: ["Java", "XML"],
        url: [
            {
                title: "Download link",
                link: "https://drive.google.com/file/d/1-9EUXyP-2MHJnCX5jZGYtDFpH2zeQsqx/view?usp=drive_link"
            },
            {
                title: "Github",
                link: "https://github.com/ANTONINEUTRON/Type-Hit"
            }
        ]
    }
]

export default ProjectData
