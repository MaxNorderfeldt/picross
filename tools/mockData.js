const courses = [
  {
    id: 1,
    helpNumbers1: [
      "     23  02  ",
      "   2410 00031  ",
      "[],[]   01009600119",
      " 2323",
      "142232",
      "123",
      "421",
      "123",
      "123",
      "12",
      "12",
      "12",
      "12",
    ],
  },
];

const solutions = {
  solution1: [
    "3.3",
    "3.4",
    "3.5",
    "3.6",
    "3.7",
    "3.8",
    "3.9",
    "3.10",
    "3.11",
    "3.12",
  ],
};

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  solutions,
};
