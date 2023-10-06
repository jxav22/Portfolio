import React from "react";
import styles from "./Terminal.module.css";
import Output from "../Output/Output";
import Input from "../Input/Input";
import PdfViewer from "../PdfViewer/PdfViewer";

type Props = {
  showPdf: () => void;
  className: string;
};

let foundEasterEgg = false;

const initialContent = [
  "Portfolio Website [Version 1.0]",
  "(c) Me. All rights reserved.",
  "",
  "Hi! I'm Jason",
  "I'm a penultimate year Software Engineering student at the University of Auckland",
  "",
  "Please use this interactive console to learn more about me :)",
  "",
];

function Terminal({ showPdf, className }: Props) {
  const [content, setContent] = React.useState<string[]>(initialContent);
  // const terminal = React.useRef<HTMLDivElement>(null);

  const prompt = "C:\\Users\\Guest>";

  // React.useEffect(()=>{
  //   terminal.current?.scrollTo(0, terminal.current.scrollHeight);
  // });

  const processInput = (input: string) => {
    setContent((content) => [...content, input]);

    const command = input.substring(prompt.length).toLowerCase();

    switch (command) {
      case "help":
        setContent((content) => [
          ...content,
          "Available commands:",
          "",
          "#️⃣ help - displays this help message",
          "📄 resume - check out my resume!",
          "👨🏽‍💼 about - a bit about myself, want I do and what I hope to achieve",
          "🧰 skills - displays my skills",
          "📞 contact - displays contact information",
          "🧹 clear - clears the terminal",
          "",
          "⬆️ Use your arrow keys to traverse your history ⬇️",
        ]);
        break;
      case "about":
        setContent((content) => [
          ...content,
          "I love coding and would be keen on developing a wide range of skills. I want to be involved in full-stack development.",
          "",
          "I enjoy everything to do with problem-solving and innovation, and I appreciate clean, elegant, workable solutions. I like the challenge of solving a problem with code and have a wide range of interests, from low-level embedded engineering to high-level web frameworks.",
          "",
          "I also like collaborating ideas and working with different skills to accomplish something better. I enjoy working in a team, and I've done so throughout my degree and part-time work.",
          "",
          "I gained exposure to React through my first internship and i'm continuing to develop my skills in front end frameworks. One cool thing I did was build a site for hosting webcomics, using NextJs.",
          "",
          "I'm also exploring Azure - i've managed to empty my student budget twice! I've built an autofarmer for the hit game, kingdom of loathing. I've also explored using virtual machines for extra computing power.",
          "",
          "I'm also keen on digital design, FPGA programming, embedded engineering and computer vision. I've explored these topics through electives but definitely wouldn't object to building on them.",
          "",
          "I always put my hand up, and never miss an opportunity, which had led to me getting involved in quite a few things.",
          "I've been a mentor at my universities ECSE assistance center, a university tour guide and most recently, a student ambassador for the Microsoft Student Accelerator program.",
          "",
          "I also pride myself on my soft skills, something that I aim to continuously improve on - I attend weekly toastmaster sessions to improve my public speaking skills.",
          "",
          "Outside of university: I have a love for art, especially drawing, I enjoy making pencil renditions of wildlife photography.",
        ]);
        break;
      case "skills":
        setContent((content) => [
          ...content,
          "KEY: 🎓 Academic Experience, 💼 Practical Experience, 💰 Paid Experience",
          "💰 Customer Service",
          "💰 Presentation Skills",
          "💰 Problem Solving",
          "💼 Public Speaking",
          "🎓 Rendering",
          "💼 Digital Circuit Design",
          "🎓 Embedded Systems",
          "💼 Azure",
          "🎓 Andriod",
          "💼 C#",
          "🎓 C/C++",
          "🎓 Computer Architecture",
          "🎓 CSS",
          "🎓 Distributed Programming",
          "💰 Front-end Web Frameworks",
          "💰 git",
          "💰 HTML",
          "🎓 Java",
          "💰 Javascript",
          "🎓 J-Unit",
          "🎓 Linux / Unix",
          "🎓 MATLAB",
          "💰 Node.js",
          "💼 Python",
          "💰 React",
          "🎓 SQL",
          "💰 Web Developemnt",
        ]);
        break;
      case "resume":
        showPdf();
        break;
      case "contact":
        setContent((content) => [
          ...content,
          "✉️ Email: jasxavier7@gmail.com",
          "📞 Phone: 021 298 8384",
          "📱 LinkedIn: https://www.linkedin.com/in/jason-xavier-36b938218/",
        ]);
        break;
      case "cls":
      case "clear":
        setContent(initialContent);
        break;
      case "🥚you found an easter egg! [hit enter]":
        setContent((content) => [
          ...content,
          "",
          "It seems like there was an easter egg tucked back there, nice find!",
          "",
          "As a reward, here's a bit about this project:",
          "This is a clone of the windows command prompt, built using ReactJS and Typescript. I tried making it a one-to-one rendition, but please let me know if you have an eye for any more details~",
          "",
          "🐰 I also hid a few more easter eggs, here and there, along with a secret reward - Kudos to anyone who finds them all",
          "",
          "With that being said, I hope you enjoy the rest of my portfolio :)",
        ]);
        break;
      case "..":
        if (foundEasterEgg) {
          setContent((content) => [
            ...content,
            "🐵: Well i'll be darned, it seems like you aren't an ordinary guest, go ahead",
            "",
            "Monke leads you to a clearing where you see a small cave entrance, you enter the cave and find an old computer terminal, you sit down and begin to type...",
            "",
            "🐵: No funny business alright, I'll be watching you 👀",
            "",
            "You can now access the root of this project!!",
            "[TODO: put my github repo here]",
          ]);
        } else {
          setContent((content) => [
            ...content,
            "!! A wild Monke blocks your path !!",
            "",
            "🐵: Sorry kiddo no monkey business beyond this point, can't have you anywhere near the root of this project, capiche?",
            "",
            "Well there's no reasoning with Monke, you'll have to find another way around",
            "",
            "...maybe there's a 'hint' on what to do here?",
          ]);
        }
        break;
      case "hint":
        setContent((content) => [
          ...content,
          "🤫 Maybe try seeing what else is in this directory",
        ]);
        break;
      case "dir":
        setContent((content) => [
          ...content,
          " Volume in drive C has no label",
          " Volume Serial Number is 9047-5010",
          "",
          " Directory of C:\\Users\\Guest",
          "",
          "6/10/23 04:12pm 7 help.exe",
          "6/10/23 04:12pm 15 about.exe",
          "6/10/23 04:12pm 25 skills.exe",
          "6/10/23 04:12pm 3 contact.exe",
          "6/10/23 04:12pm 4 clear.exe",
          "6/10/23 04:12pm 5 hint.exe",
          "6/10/23 04:12pm 0 dir.exe",
          "6/10/23 04:12pm ??????? EASTEREGG64.exe",
          "6/10/23 04:12pm 115 resume.pdf",
          "8 Files(s) 174 bytes",
        ]);
        break;
      case "easteregg64":
        setContent((content) => [
          ...content,
          "🎉 CONGRATULATIONS!!! 🎉",
          "You have found the final easter egg! 🥚🥚🥚",
          "",
          ": D",
          "",
          "As a reward here's my uni email, for a special PREMUIUM & EXCLUSIVE line of contact with me:",
          "📮 jxav258@aucklanduni.ac.nz",
          "",
          "Shoot me a message to make sure I see this :) ",
          "",
          "List of people who found this easter egg:",
          "1. You (possibly)",
          "",
          "🐰",
        ]);

        foundEasterEgg = true;
        break;
      case "":
        break;
      default:
        setContent((content) => [
          ...content,
          "Invalid command",
          "type 'help' for a list of commands",
        ]);
        break;
    }

    if (command.length !== 0) {
      setContent((content) => [...content, ""]);
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.terminal}`}>
        <div>
          {content.map((line, index) => {
            return <Output key={index} text={line} />;
          })}
        </div>
        <Input submit={processInput} prompt={prompt} />
      </div>
    </div>
  );
}

export default Terminal;
