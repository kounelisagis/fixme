export const technologies = [
  { value: "c", label: "C" },
  { value: "c++", label: "C++" },
  { value: "cuda", label: "CUDA" },
  { value: "go", label: "Go" },
  { value: "html", label: "HTML" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "sass", label: "Sass" },
  { value: "typescript", label: "TypeScript" }
];

export const lvlOfDifficulty = [
  { value: "easy", label: "Easy" },
  { value: "*", label: "Not sure" }
];

export const hosters = [
  { value: "github", label: "GitHub" },
  { value: "gitlab", label: "GitLab" }
];

export const filters = [
  {
    label: "Technologies",
    value: "technologies",
    options: technologies
  },
  {
    label: "Level of difficulty",
    value: "experienceNeeded",
    options: lvlOfDifficulty
  },
  {
    label: "Hoster",
    value: "hoster",
    options: hosters
  }
];
