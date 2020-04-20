# Ombori React Code Test

[![CircleCI](https://circleci.com/gh/Luckzman/React-Code-Test.svg?style=svg)](https://circleci.com/gh/Luckzman/React-Code-Test)



## Table of Content

1. [Built With](#built-with)
3. [How to use](#how-to-use)
4. [Author](#author)
5. [License](#license)

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Scss](https://sass-lang.com/)
- [Jest](https://expressjs.com/) & [Enzyme](https://airbnb.io/enzyme/)
- [CircleCI](https://circleci.com/)

### Deployment

React-Code-Test App is hosted on Netlify

- [Click here to view app](https://ombori-react-test.netlify.app/)


## How to use

### Prerequisite

To clone and run this application, you'll need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/)(which comes with [npm](https://www.npmjs.com/)) installed on you computer.

### Installing

From your command line

```
# Clone this repository
$ git clone https://github.com/Luckzman/React-Code-Test.git

# Go into the repository directory
$ cd React-Code-Test

# Install dependencies
$ npm install or $ yarn install

# run the app
$ npm start or $ yarn start
```

### Running Test
- Navigate to the project root directory
- After installation, run `npm test`

## Author

Lucky Omokarho Oniovosa

___


Hi there, we're really excited that you've made it this far in our interview process and look forward to getting to know you better.

At Ombori, we strive to build fantastic apps using well structured and efficient code.
The purpose of this task is to see how you solve problems and to make sure that you follow our linting rules as well as industry best practices.

We've scaffolded a very basic project that will serve as your starting point for the task.
Make sure you've got eslint integrated in your editor or run the lint task and fix any errors before submitting your code for review. If there's a rule you disagree with, you can change it but we will ask you to motivate why during our feedback session on this task.

___

What the test app should do:

* Display a custom loading component for 3 seconds
* Fetch user data from https://reqres.in/
* Display those users in a scrollable view that lazy loads more users when you've reached the bottom of the list, if there are no more users to load it should indicate that there are no more users.
* Be responsive, look great and work well on different devices, especially various mobile screens

We've prepared some screenshots in the design folder as well as a video of what the loading component should look like.

___

Those are the requirements. If you wish to show off more of your skillset, feel free to expand upon the app, perhaps integrating a state management library like Redux to handle the fetching of data. Using TypeScript will be a big ➕. If you're really into functional programming, feel free to use something like Ramda. It's really up to you!

We put no strict requirements on how you choose to solve any of the points in this task. We only ask that you be able to motivate your choices.

![You got this!](https://media.giphy.com/media/ClcWrARkrq1GM/giphy.gif)
