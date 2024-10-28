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
  // Add more questions as needed
];
