const ProjectsSection = () => {
  const projects = [
    {
      title: "React/Nextjs News Website",
      description: "Created a Website using React/NextJs",

      tech: "React Nextjs, Tailwind, CSR",
      link: "https://github.com/mqkhan/reactNewsWebsiteCSR.git",
      link1: "https://github.com/mqkhan/reactNewsWebsiteCSR.git",
    },
    {
      title: "React Redux ToDoList",
      description:
        "Created a TodoList using Redux and created" +
        "global State using store and Slice",
      tech: "React",
      link: "https://todolist-five-lyart-97.vercel.app/",
      link1: "https://github.com/mqkhan/redux-todolist.git",
    },
    {
      title: "React Radio Player",
      description:
        "Created a Radio Player using React" +
        "Also built a search function which search radio channels",
      tech: "React",
      link: "https://radio-player-chi.vercel.app/",
      link1: "https://github.com/mqkhan/radio-player-react.git",
    },
    {
      title: "Vanilla JavaScript WeatherAPP",
      description:
        "Created a weather app using API in JavaScript, HTML and CSS",
      tech: "JavaScript, HTML and CSS",
      link: "https://github.com/mqkhan/weatherapp.git",
      link1: "https://github.com/mqkhan/weatherapp.git",
    },
    {
      title: "React Redux Portfolio",
      description:
        "Created a portfolio site using Redux which switches" +
        " between dark and light mode.",
      tech: "Redux, React",
      link: "https://myportfolio-indol-mu.vercel.app/",
      link1: "https://github.com/mqkhan/react-redux-portfolio.git",
    },
  ];

  return (
    <section className={`bg-gray-200 dark:bg-gray-700 p-8 `}>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <p className="text-gray-500 dark:text-gray-300 mt-2">
              Tech Used: {project.tech}
            </p>
            <div className="flex justify-between">
              <a
                href={project.link}
                className="text-blue-500 dark:text-blue-400 mt-2 block"
                target="_blank"
                rel=""
              >
                {"View Project"}
              </a>
              <a
                href={project.link1}
                className="text-blue-500 dark:text-blue-400 mt-2 block"
                target="_blank"
                rel=""
              >
                {"View Code"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
