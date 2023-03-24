export const Quizes = [
  {
    id: 0,
    title: 'Introduction To C Programming Quiz',
    imageBanner: 'imageBanner2.png',
    subject: 'Computer Programming',
    chapter: 'C Programming',
    totalTime: '10:00',
    description: [
      "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language.",
      'C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972.',
      'Do you think you can easily score well on the test? Take it up and check your result.',
    ],
    questions: [
      {
        text: 'A placeholder begins with the symbol _____.',
        correct: 2,
        variants: [
          {
            text: '*',
          },
          {
            text: '!',
          },
          {
            text: '%',
          },
          {
            text: '&',
          },
        ],
      },
      {
        text: 'The "\\n" character does which of the following operations?',
        correct: 3,
        variants: [
          {
            text: 'Double line spacing',
          },
          {
            text: 'Character deletion',
          },
          {
            text: 'Character backspace',
          },
          {
            text: 'Places cursor on the next line',
          },
        ],
      },
      {
        text: '#define PI 3.14159 The above code represents which of the following?',
        correct: 2,
        variants: [
          {
            text: 'Preprocessor directive',
          },
          {
            text: 'Variable',
          },
          {
            text: 'Constant macro',
          },
          {
            text: 'Macro',
          },
        ],
      },
      {
        text: 'Which symbol separates variable names?',
        correct: 3,
        variants: [
          {
            text: '&',
          },
          {
            text: '. (period)',
          },
          {
            text: "' (apostrophe)",
          },
          {
            text: ', (comma)',
          },
          {
            text: '; (semicolon)',
          },
        ],
      },
      {
        text: 'Which symbol terminates a C statement?',
        correct: 1,
        variants: [
          {
            text: '. (period)',
          },
          {
            text: '; (semicolon)',
          },
          {
            text: ': (colon)',
          },
          {
            text: ', (comma)',
          },
        ],
      },
      {
        text: 'The ___________ ignores comments and they are not translated into machine language.',
        correct: 0,
        variants: [
          {
            text: 'Compiler',
          },
          {
            text: 'Translator',
          },
          {
            text: 'Both',
          },
          {
            text: 'None',
          },
        ],
      },
      {
        text: 'Which of the following represent comments in C?',
        correct: 4,
        variants: [
          {
            text: '<, >',
          },
          {
            text: '[ , ]',
          },
          {
            text: '/*, /*',
          },
          {
            text: '*/, /*',
          },
          {
            text: '/*, */',
          },
        ],
      },
      {
        text: 'Which arithmetic operator in C returns the integer remainder of the result of dividing its first operand by its second?',
        correct: 0,
        variants: [
          {
            text: '%',
          },
          {
            text: '/',
          },
          {
            text: '\\',
          },
          {
            text: '*',
          },
        ],
      },
      {
        text: 'Which of the following is a valid name for an identifier in C?',
        correct: 2,
        variants: [
          {
            text: '!Here',
          },
          {
            text: '4Me_To_You',
          },
          {
            text: 'Emp_Num1',
          },
          {
            text: 'All of the above points',
          },
        ],
      },
      {
        text: 'Which of the following operations gets evaluated first?',
        correct: 1,
        variants: [
          {
            text: '* - multiplication',
          },
          {
            text: '() - parentheses',
          },
          {
            text: '/ - division',
          },
          {
            text: '+ - addition',
          },
        ],
      },
      {
        text: 'If your program gets an error when dividing by zero, this type of error is called?',
        correct: 1,
        variants: [
          {
            text: 'Syntax',
          },
          {
            text: 'Run-time',
          },
          {
            text: 'Undetected',
          },
          {
            text: 'Logic',
          },
        ],
      },
      {
        text: 'Your C program was able to compile. However, the result is incorrect. What type of error is this?',
        correct: 3,
        variants: [
          {
            text: 'Undetected',
          },
          {
            text: 'Run-time',
          },
          {
            text: 'Syntax',
          },
          {
            text: 'Logic',
          },
        ],
      },
      {
        text: 'Your C program always fails to compile and has these errors. What type of errors are present?',
        correct: 0,
        variants: [
          {
            text: 'Syntax',
          },
          {
            text: 'Run-time',
          },
          {
            text: 'Logic',
          },
          {
            text: 'Undetected',
          },
        ],
      },
      {
        text: 'The section of C code after the preprocessor directives is generally for?',
        correct: 1,
        variants: [
          {
            text: 'User-defined function definitions',
          },
          {
            text: 'Function prototypes',
          },
          {
            text: 'Variables',
          },
          {
            text: 'Datatypes',
          },
        ],
      },
      {
        text: 'Is the syntax for the following C statement correct?: scanf("%d", input);',
        correct: 1,
        variants: [
          {
            text: 'True',
          },
          {
            text: 'False',
          },
          {
            text: 'Not clear',
          },
          {
            text: "Can't say",
          },
        ],
      },
      {
        text: 'When a C program asks the user to input data using the keyboard, the program is said to be in __________ mode.',
        correct: 1,
        variants: [
          {
            text: 'Batch',
          },
          {
            text: 'Interactive',
          },
          {
            text: 'Preprocessor',
          },
          {
            text: 'Saving',
          },
        ],
      },
      {
        text: 'What is the value of result after executing the following statement?result = 6 + 4 * 5 / 2',
        correct: 2,
        variants: [
          {
            text: '25',
          },
          {
            text: '22',
          },
          {
            text: '16',
          },
          {
            text: '60',
          },
        ],
      },
      {
        text: 'You can have ________ main function(s).',
        correct: 0,
        variants: [
          {
            text: 'Only one',
          },
          {
            text: 'Two',
          },
          {
            text: 'More than two',
          },
          {
            text: "Can't say",
          },
        ],
      },
      {
        text: 'In general, the body of a function is represented by the following symbols?',
        correct: 1,
        variants: [
          {
            text: '[, ]',
          },
          {
            text: '{, }',
          },
          {
            text: '/, \\',
          },
          {
            text: '/*, */',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'C Plus Plus Programming Quiz For Beginners',
    imageBanner: 'imageBanner3.png',
    subject: 'Computer Programming',
    chapter: 'C Programming',
    totalTime: '6:30',
    description: [
      'C++ is one of the common programming languages that most programmers are expected to have a good understanding of. Here is a C Plus Plus Programming Quiz For Beginners.',
      'Try this quiz and see if you can answer all the questions correctly or not. As you continue your journey with C++, it is important to see if you already understand the basics and this quiz will help you do just that. Give it a shot and be a step closer to being perfect when it comes to this language.',
    ],
    questions: [
      {
        text: 'The notation of logical NOT operator in a C++ program is',
        correct: 3,
        variants: [
          {
            text: ':',
          },
          {
            text: ';',
          },
          {
            text: 'None of the Above',
          },
          {
            text: '!',
          },
        ],
      },
      {
        text: 'The notation of ternary operator is',
        correct: 1,
        variants: [
          {
            text: '&',
          },
          {
            text: '?:',
          },
          {
            text: '~',
          },
          {
            text: '%',
          },
        ],
      },
      {
        text: 'When the object of the first class is instantiated then which of the following is called?',
        correct: 1,
        variants: [
          {
            text: 'Destructor',
          },
          {
            text: 'Constructor',
          },
          {
            text: 'Both A and B',
          },
          {
            text: 'None of the Above',
          },
        ],
      },
      {
        text: 'Which of the following denotes the C++ looping statement?',
        correct: 2,
        variants: [
          {
            text: 'Do-while',
          },
          {
            text: 'For',
          },
          {
            text: 'Both A and B',
          },
        ],
      },
      {
        text: 'Which of the following can be used to initialize a newly declared variable from an existing variable?',
        correct: 2,
        variants: [
          {
            text: 'Virtual Function',
          },
          {
            text: 'Namespaces',
          },
          {
            text: 'Copy constructor',
          },
          {
            text: 'None of the Above',
          },
        ],
      },
    ],
  },
];
