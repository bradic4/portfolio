const config = {
  title: "Ivan Bradic | Junior Software Engineer",
  description: {
    long: "Explore the portfolio of Ivan Bradic, a junior software engineer with strong web development experience. Specializing in C#/.NET backend systems, API integration, data processing, and modern web applications built with React and Next.js. Discover projects spanning software engineering and interactive web experiences.",
    short:
      "Portfolio of Ivan Bradic — junior software engineer building backend systems, APIs, and modern web applications.",
  },
  keywords: [
    "Ivan Bradic",
    "portfolio",
    "software engineer",
    "junior software engineer",
    "C#",
    ".NET",
    "API development",
    "web development",
    "React",
    "Next.js",
    "SQL",
    "backend development",
    "full-stack",
    "data processing",
    "OOP",
  ],
  author: "Ivan Bradic",
  email: "ivanbradic46@gmail.com",
  site: "https://ivanbradic.dev",

  // for github stars button
  githubUsername: "bradic4",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ivan-bradic-172690b5/",
    github: "https://github.com/bradic4",
  },
};
export { config };
