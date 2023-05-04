const questions = [
  {
    index: 1,
    text: 'What is ReactJS?',
    answers: [
      { id: 'a', text: 'A server-side framework' },
      { id: 'b', text: 'A client-side library for building user interfaces' },
      { id: 'c', text: 'A database management system' },
      { id: 'd', text: 'A programming language' },
    ],
    correctAnswer: 'b',
  },
  {
    index: 2,
    text: 'What is JSX?',
    answers: [
      { id: 'a', text: 'A programming language' },
      { id: 'b', text: 'A templating engine' },
      { id: 'c', text: 'A syntax extension for JavaScript' },
      { id: 'd', text: 'A module bundler' },
    ],
    correctAnswer: 'c',
  },
  {
    index: 3,
    text: 'What is the purpose of the virtual DOM in React?',
    answers: [
      { id: 'a', text: 'To make the browser rendering faster' },
      { id: 'b', text: 'To provide a better user experience' },
      { id: 'c', text: 'To make it easier to write server-side code' },
      { id: 'd', text: 'To simplify the process of updating the UI' },
    ],
    correctAnswer: 'd',
  },
  // {
  //   index: 4,
  //   text: 'What is the purpose of the "key" prop in React?',
  //   answers: [
  //     { id: 'a', text: 'To uniquely identify a component' },
  //     { id: 'b', text: 'To specify the type of component' },
  //     { id: 'c', text: 'To control the styling of a component' },
  //     { id: 'd', text: 'To define the initial state of a component' },
  //   ],
  //   correctAnswer: 'a',
  // },
  // {
  //   index: 5,
  //   text: 'What is the difference between props and state in React?',
  //   answers: [
  //     { id: 'a', text: 'Props are used to pass data to a component, while state is used to manage data within a component' },
  //     { id: 'b', text: 'Props and state are the same thing' },
  //     { id: 'c', text: 'Props are used for functional components, while state is used for class components' },
  //     { id: 'd', text: 'Props are only used for input elements, while state is used for all other components' },
  //   ],
  //   correctAnswer: 'a',
  // },
  // {
  //   index: 6,
  //   text: 'What is the purpose of the "ref" attribute in React?',
  //   answers: [
  //     { id: 'a', text: 'To define the initial state of a component' },
  //     { id: 'b', text: 'To access the properties and methods of a component' },
  //     { id: 'c', text: 'To specify the type of component' },
  //     { id: 'd', text: 'To control the styling of a component' },
  //   ],
  //   correctAnswer: 'b',
  // },
  // {
  //   index: 7,
  //   text: 'What is a higher-order component (HOC) in React?',
  //   answers: [
  //     { id: 'a', text: 'A component that is rendered higher up in the component tree' },
  //     { id: 'b', text: 'A component that takes another component as input and returns a new component' },
  //     { id: 'c', text: 'A component that is used for handling HTTP requests' },
  //     { id: 'd', text: 'A component that is used for handling user authentication' },
  //   ],
  //   correctAnswer: 'b',
  // },
  // {
  //   index: 8,
  //   text: 'What is the purpose of the "useEffect" hook in React?',
  //   answers: [
  //     { id: 'a', text: 'To manage the state of a component' },
  //     { id: 'b', text: 'To handle user input events' },
  //     { id: 'c', text: 'To fetch data from a server' },
  //     { id: 'd', text: 'To perform side effects such as updating the DOM' },
  //   ],
  //   correctAnswer: 'd',
  // },
  // {
  //   index: 9,
  //   text: 'What is the purpose of the "useState" hook in React?',
  //   answers: [
  //     { id: 'a', text: 'To handle user input events' },
  //     { id: 'b', text: 'To fetch data from a server' },
  //     { id: 'c', text: 'To manage the state of a component' },
  //     { id: 'd', text: 'To perform side effects such as updating the DOM' },
  //   ],
  //   correctAnswer: 'c',
  // },
  // {
  //   index: 10,
  //   text: 'What is the purpose of the "useContext" hook in React?',
  //   answers: [
  //     { id: 'a', text: 'To manage the state of a component' },
  //     { id: 'b', text: 'To handle user input events' },
  //     { id: 'c', text: 'To fetch data from a server' },
  //     { id: 'd', text: 'To consume context from a parent component' },
  //   ],
  //   correctAnswer: 'd',
  // },
]
    
export default questions;