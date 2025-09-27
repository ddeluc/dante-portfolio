import jfLading from "./assets/images/justfriends/landing.png";
import jfHome from "./assets/images/justfriends/home.png";
import jfMenu from "./assets/images/justfriends/menu.png";
import jfConnect from "./assets/images/justfriends/connect.png";

import qiLogin from "./assets/images/quizitalian/login.png";
import qiHome from "./assets/images/quizitalian/home.png";
import qiQuiz from "./assets/images/quizitalian/quiz.png";

import htHome from "./assets/images/hannyatmplate/home.png";
import htAbout from "./assets/images/hannyatmplate/about.png";
import htWork from "./assets/images/hannyatmplate/work.png";

import sMenu from "./assets/images/senses/menu.png";
import sPlayer from "./assets/images/senses/player.png";
import sCoin from "./assets/images/senses/coin.png";


const projects = [
    {
        title: "JUSTFREINDS",
        description: "Developed a website for JustFreinds: a local event and marketing agency. Integrating the brand's image, the website demonstrates an appealing and reactive interface.",
        type: "WEB DEVELOPMENT",
        tags: ["REACT", "TAILWIND", "FRAMER", "DESIGN"],
        link: "https://just-friends-nine.vercel.app/",
        status: "DEV",
        pictures: [jfLading, jfHome, jfConnect]
    },
    {
        title: "QUIZITALIAN",
        description: "QuizItalian is a solution that solves the boring linguistic learning process. Submit text from Italin literature that you find interesting and QuizItalian generates learning modules.",
        type: "WEB DEVELOPMENT",
        tags: ["REACT", "MONGODB", "EXPRESS", "NODEJS", "EDUCATION"],
        link: "https://quizitalian-90795058235.us-central1.run.app",
        status: "DEV",
        pictures: [qiLogin, qiHome, qiQuiz]
    },
    {
        title: "HANNYATEMPLATE",
        description: "A demonstration of interactive 3D models in a frontend application.",
        type: "WEB DEVELOPMENT",
        tags: ["REACT", "TRHEEJS", "TAILWIND", "DESIGN"],
        link: "no_link",
        status: "DEV",
        pictures: [htHome, htAbout, htWork]
    },
    {
        title: "SENSES",
        description: "The final project of a covid-summer game programming course, Senses was made from scratch. A fun demonstration of creativity and functional programming from the animations to player movement.",
        type: "GAME DEVELOPMENT",
        tags: ["LUA", "LOVE2D", "PLATFORMER"],
        link: "https://youtu.be/ZR-qB0hgmuo",
        status: "DEV",
        pictures: [sMenu, sPlayer, sCoin]
    }
]

export { projects }