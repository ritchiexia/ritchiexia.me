import { useSpring, animated } from "react-spring";

const About = () => {
  const fadeUp = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(100%)" },
  });

  return (
    <animated.div style={fadeUp} className="aboutme">
      <p>
        I'm a third year Computer Engineering student at the University of
        British Columbia with an interest in frontend and design. 💻
      </p>
      <p>
        If I'm not in class, studying, or doing homework, you can probably find
        me around the 📌Lower Mainland eating good food and visiting cute cafés!
      </p>
      <p>
        You can find my resume{" "}
        <a href="resume.pdf" target="_blank">
          <b>here</b>. 📝
        </a>
      </p>
    </animated.div>
  );
};

export default About;
