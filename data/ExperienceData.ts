import { ExperienceItem } from "@/components/ExperienceSection"

const ExperienceData: ExperienceItem[] =  [
    {
        position: "Mobile Application Development Instructor",
        period: "2022 - May, 2024",
        organization: "Tech4Dev",
        description: "During my involvement in this fellowship, as the facilitator for the mobile application development track, I mentored over 80 students, predominantly women, across two cohorts. Through my engaging instruction, participants learned essential concepts such as dependency injection, RESTful API fetching using Retrofit for Kotlin, and Dio for Flutter."+
        "This comprehensive training program aimed to equip women in tech skills across Africa. The curriculum covered Kotlin with XML and Jetpack Compose, Firebase, Dart, Flutter, and Git. The ladies not only gained proficiency in these technologies but also earned industry-recognized certifications. "+
        "My approach included interactive lectures, hands-on projects (some project URLs below), and personalized feedback. The outcome was remarkable as these empowered women secured prestigious internships and full-time roles at various organizations. The fellows emerged as confident, career-ready developers, showcasing the success and impact of the fellowship in nurturing talent and promoting diversity in the tech industry.",
        tech: ["kotlin", "flutter", "git", "firebase", "dart"],
        url: [
            {
                title: "Piggyvest App Clone | Flutter",
                link: "https://github.com/ANTONINEUTRON/wtm_savings_app",
            },
            {
                title: " Note app | Compose",
                link: "https://github.com/ANTONINEUTRON/WTM_Notes_App",
            },
            {
                title: "Ebook Reader | Flutter",
                link: "https://github.com/ANTONINEUTRON/wmt_ebook_reader"
            },
            {
                title: "ECommerce App | Kotlin",
                link: "https://github.com/ANTONINEUTRON/WMTStore"
            },
            {
                title: "News App | Flutter",
                link: "https://github.com/ANTONINEUTRON/wmt_news_app"
            },
            {
                title: "Whatsapp clone | kotlin",
                link: "https://github.com/ANTONINEUTRON/WMTChat"
            }
        ],
    },
    {
        position: "Lyrics Lab",
        period: "April 2024",
        organization: "Freelance",
        description: "This is a cross platform application which enable songwriters write and record songs",
        tech: ["Flutter"],
        url: [
            {
                title: "Download",
                link: "https://lyricslab.antobuild.tech"
            }
        ]
    },
    {
        position: "Bold Sports",
        period: "2022 - 2023",
        organization: "Bold Sports NG",
        description: "I was responsible for developing and deploying the android and ios application for a sport news website. Flutter bloc was used for state management. I was able to successfully deploy the application to playstore and app store accessible through",
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
        position: "Block Pub",
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
        position: "Story Line",
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
        position: "AlterPay",
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
        position: "Type Hit",
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

export default ExperienceData