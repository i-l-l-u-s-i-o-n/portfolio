/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Shivam Shukla",
    title: "Hi, I'm Shivam",
    subTitle: emoji("An aspiring IT engineer 🚀 having an experience of building Web applications with Nodejs / Express.A Machine and Deep Learning Enthusiast specially in field of Computer Vision."),
    resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/i-l-l-u-s-i-o-n",
    linkedin: "https://www.linkedin.com/in/shivam1097/",
    gmail: "shivamshukla2297@gmail.com",
    // gitlab: "https://gitlab.com/saadpasta",
    // facebook: "https://www.facebook.com/saad.pasta7",
    // medium: "https://medium.com/@saadpasta",
    // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "My skills",
    subTitle: "Learning and improving everyday!",
    skills: [
        emoji("⚡ Skilled in JAVA, JavaScript(NodeJS, Express), Python"),
        emoji("⚡ Develop the Actions for Google Assistant."),
        emoji("⚡ Working on AI and ML using Python(sklearn, Tensorflow, OpenCV)")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        }, {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        }, {
            skillName: "NodeJS",
            fontAwesomeClassname: "fab fa-node"
        }, {
            skillName: "HTML-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "Google Action",
            fontAwesomeClassname: "fab fa-google"
        }, {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "MongoDB",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "AWS",
            fontAwesomeClassname: "fab fa-aws"
        },



    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Software Developer Intern",
            company: "Arpan Interactive Solutions Pvt. Ltd.",
            companylogo: require("./assets/images/arpan.jpg"),
            date: "June 2019 – August 2019",
            desc: "Got the opportunity to work with core development team. Integrated personal assistant with web application. Worked on i18n and Angular.",
            descBullets: [
                // "Integrated personal assistant with web application.",
                // "Worked on i18n and Angular."
            ]
        },
        // {
        //     role: "Front-End Developer",
        //     company: "Quora",
        //     companylogo: require("./assets/images/quoraLogo.png"),
        //     date: "May 2017 – May 2018",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // },
        // {
        //     role: "Software Engineer Intern",
        //     company: "Airbnb",
        //     companylogo: require("./assets/images/airbnbLogo.png"),
        //     date: "Jan 2015 – Sep 2015",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // },
    ]
};


const projectSection = {

    title: emoji("Projects ​💻​"),
    subtitle: "Projects which I did while learning !",

    achivementsCards: [{
            title: "EasyView ERP",
            subtitle: "A Google Assistant Integrated present age ERP concept with interactive plots to give quick insights to faculty and students.",
            image: require("./assets/images/deeplearning.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/EasyView_ERP" },
                { name: "Live Demo", url: "https://easyview.herokuapp.com" },
            ]
        },
        {
            title: "Virtual Driving in GTA 5",
            subtitle: "Developed a OpenCV project to control the vehicle using a cardboard steering wheel.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [{ name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/GTA_5_Virtual_Driving_using_OpenCV" }]
        },

        {
            title: "Facial Expression Recognition",
            subtitle: "Used CNN to detect the face and find features to classify whether a person is happy, angry and so on.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/Computer_Vision_Projects/tree/master/Facial%20Expression%20Recognition" }
            ]
        },
        {
            title: "Virtual Draw",
            subtitle: "Using virtual draw, we can draw virtually on the webcam screen. Used openCV to implement this.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/Computer_Vision_Projects/tree/master/Virtual%20Draw" }
            ]
        },
        {
            title: "CampHub",
            subtitle: "A campgrounds reviewing web application. Users can review the existing campground, ou add there own after signing up.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/CampHub" },
                { name: "Live Demo", url: "http://camphub.herokuapp.com/" }
            ]
        },
        {
            title: "Contacts GUI Application",
            subtitle: "Used JavaFX to develop a Contacts application. User can keep their important contacts safe. Used H2 database.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/Contacts-GUI-Application-JavaFX" }
            ]
        },
        {
            title: "RGB Color Guessing Game",
            subtitle: "User has to choose the correct color for the shown RGB color code. Implemented it using JavaScript, HTML, CSS. ",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/COLOR-Game-Project" },
                { name: "Live Demo", url: "http://guess-the-rgb.herokuapp.com/" },
            ]
        },
        {
            title: "Text File Encryptor",
            subtitle: "Used basic ASCII code modification to encrypt the text file which requires the password at the time of decryption.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "Link To Project Code", url: "https://github.com/i-l-l-u-s-i-o-n/Encryptor_Decryptor_EnDe" },
            ]
        }
    ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "i-l-l-u-s-i-o-n", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

// const bigProjects = {
//     title: "Big Projects",
//     subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//     projects: [{
//             image: require("./assets/images/saayaHealthLogo.webp"),
//             link: "http://saayahealth.com/"
//         },
//         {
//             image: require("./assets/images/nextuLogo.webp"),
//             link: "http://nextu.se/"
//         }
//     ]
// };

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Certifications 📜 "),
    subtitle: "Some of the certifications that I have done!",

    achivementsCards: [{
            title: "Deep Learning Specialization",
            subtitle: "This specialization is offered by DeepLearning.ai through Coursera, consists of 5 courses with basics of deep neural network, CNN(Yolo), RNN(LSTM) ect.",
            image: require("./assets/images/deeplearning.png"),
            footerLink: [
                { name: "View Certification Details", url: "https://coursera.org/share/027721d3677a084bfb8b9352f2f166c0" },
            ]
        },
        {
            title: "Machine Learning by Stanford University",
            subtitle: "This course is offered by Stanford University and taught by Andrew Ng. This covers all the basic concept of the Learning.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [{ name: "View Certification Details", url: "https://coursera.org/share/7638bad0196066722c7699b40d286103" }]
        },

        {
            title: "Programming in JAVA by NPTEL",
            subtitle: "Got 95% in the certification exam and was in top 5% students. This course is offered by IIT Kharagpur throug NPTEL.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "View Certificate", url: "" },
            ]
        },
        {
            title: "CCA Java Level-1 Certification",
            subtitle: "Cleared the certification exam for JAVA offered by Cambridge Certification Authority.",
            image: require("./assets/images/stanford.png"),
            footerLink: [
                { name: "View Certificate", url: "" },
            ]
        }
    ]
};

// Blogs Section

const blogSection = {

    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ]
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }]
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "My Inbox is always open.",
    number: "+91-9999014429",
    email_address: "shivamshukla2297@gmail.com"
};

//Twitter Section

const twitterDetails = {

    userName: "twitter" //Replace "twitter" with your twitter username without @

};
// export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
export { greeting, socialMediaLinks, skillsSection, workExperiences, projectSection, openSource, achievementSection, contactInfo };