export const technologies = [
  { value: "C", label: "C" },
  { value: "C++", label: "C++" },
  { value: "CUDA", label: "CUDA" },
  { value: "Go", label: "Go" },
  { value: "HTML", label: "HTML" },
  { value: "Java", label: "Java" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "Rust", label: "Rust" },
  { value: "Sass", label: "Sass" },
  { value: "TypeScript", label: "TypeScript" }
];

export const lvlOfDifficulty = [
  { value: "easy", label: "Easy" },
  { value: "unknown", label: "Not sure" }
];

export const hosters = [
  { value: "true", label: "GitHub" },
  { value: "false", label: "GitLab" }
];

export const filters = [
  {
    label: "Technology",
    value: "technology",
    options: technologies
  },
  {
    label: "Level of difficulty",
    value: "experience_needed",
    options: lvlOfDifficulty
  },
  {
    label: "Hoster",
    value: "is_github",
    options: hosters
  }
];
