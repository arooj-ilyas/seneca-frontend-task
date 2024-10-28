export interface QuestionOption {
  label: string;
  value: string;
}

export const questions = [
  {
    questionText: "What does an animal cell contain?",
    correctAnswers: [
      "ribosomes",
      "cytoplasm",
      "partially_permeable_membrane",
      "mitochondria",
    ],
    toggleOptions: [
      [
        { label: "Cell Wall", value: "cell_wall" },
        { label: "Ribosomes", value: "ribosomes" },
      ],
      [
        { label: "Cytoplasm", value: "cytoplasm" },
        { label: "Chloroplast", value: "chloroplast" },
      ],
      [
        {
          label: "Partially Permeable Membrane",
          value: "partially_permeable_membrane",
        },
        { label: "Impermeable Membrane", value: "impermeable_membrane" },
      ],
      [
        { label: "Cellulose", value: "cellulose" },
        { label: "Mitochondria", value: "mitochondria" },
      ],
    ],
  },
  {
    questionText: "Why do I want to work for Seneca?",
    correctAnswers: [
      "great_culture",
      "meaningful_mission",
      "work_life_balance",
      "collaborative",
    ],
    toggleOptions: [
      [
        { label: "Mean Coworkers", value: "mean_coworkers" },
        { label: "Great Culture", value: "great_culture" },
      ],
      [
        {
          label: "Meaningful Mission",
          value: "meaningful_mission",
        },
        { label: "Corporate Mission", value: "corporate_mission" },
      ],
      [
        { label: "7-Day Working Weeks", value: "7-day_working_weeks" },
        { label: "Work Life Balance", value: "work_life_balance" },
      ],
      [
        { label: "Collaborative", value: "collaborative" },
        { label: "Solo Missions", value: "solo_missions" },
      ],
    ],
  },
  // Add more questions as needed
];
