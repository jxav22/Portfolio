import React from "react";
import styles from "./Terminal.module.css";
import Output from "../Output/Output";
import Input from "../Input/Input";
import PdfViewer from "../PdfViewer/PdfViewer";

type Props = {
  showPdf: () => void;
};

const initialContent = [
  "Portfolio Website [Version 1.0]",
  "(c) Me. All rights reserved.",
  "",
  "Hi! I'm Jason",
  "I'm a penultimate year Software Engineering student at the Univeristy of Auckland",
  "",
  "Please use this interactive console to learn more about me :)",
  "",
];

function Terminal({ showPdf }: Props) {
  const [content, setContent] = React.useState<string[]>(initialContent);

  const prompt = "C:\\Users\\Guest>";

  const processInput = (input: string) => {
    setContent((content) => [...content, input]);

    const command = input.substring(prompt.length).toLowerCase();

    switch (command) {
      case "help":
        setContent((content) => [
          ...content,
          "Available commands:",
          "",
          "help - displays this help message",
          "about - displays information about me",
          "skills - displays my skills",
          "contact - displays contact information",
          "clear - clears the terminal",
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
      case "clear":
        setContent(initialContent);
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
    <div className={styles.terminal}>
      <div>
        {content.map((line, index) => {
          return <Output key={index} text={line} />;
        })}
      </div>
      <Input submit={processInput} prompt={prompt} />
    </div>
  );
}

export default Terminal;
