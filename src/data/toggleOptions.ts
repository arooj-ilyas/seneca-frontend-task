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
    questionText: "What are the ideal work conditions",
    correctAnswers: ["good_pay", "less_meetings", "free_coffee", "office_dog"],
    toggleOptions: [
      [
        { label: "Bad Pay", value: "bad_pay" },
        { label: "Good Pay", value: "good_pay" },
      ],
      [
        {
          label: "Less Meetings",
          value: "less_meetings",
        },
        { label: "More Meetings", value: "more_meetings" },
      ],
      [
        { label: "Expensive Coffee", value: "expensive_coffee" },
        { label: "Free Coffee", value: "free_coffee" },
      ],
      [
        { label: "Office Dog", value: "office_dog" },
        { label: "Office Bear", value: "office_bear" },
      ],
    ],
  },
  // Add more questions as needed
];
