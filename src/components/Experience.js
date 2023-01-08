import "../styles/Experience.scss";

const Experience = ({ experience }) => {
  const { company, title, date, description } = experience;

  return (
    <div>
      <h3>{company}</h3>
      <h5>{title}</h5>
      <p className="experience__date">{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default Experience;
