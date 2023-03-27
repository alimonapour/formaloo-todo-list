# React Typescript Todo List App

This is a simple todo list React Typescript single page app which shows all
tasks in their corresponding group, a way to add new tasks and remove existing
ones only if they are not marked as done.

## Demo

https://formaloo-todo-list-app.vercel.app/

## Features

- Adding new tasks (note that each task belongs to a single group)
- Marking tasks as done
- Removing pending tasks
- Listing all added tasks in their group
- Responsive Design
- A decent UI/UX

## Built With

- React - A JavaScript library for building user interfaces.
- TypeScript - A strict syntactical superset of JavaScript.
- Tailwind CSS - A utility-first CSS framework.
- Framer motion - Framer Motion is a production-ready motion library for React
  from Framer.
- Headless UI - A set of completely unstyled, fully accessible UI components,
  designed to integrate beautifully with Tailwind CSS.

## App Structure

- **src/hooks/useTasks.ts:** Custom hook that create for separated logic from ui
  and set and get data to/from local storage.
- **src/types.ts:** Interfaces used in the app.
- **src/App.tsx:** Main file for rendering the app.
- **src/components/TaskContainer:** Component for rendering the list of tabs and
  tab panels.
- **src/components/Task/Task.tsx:** Component for display task.

- **src/components/CreateTaskForm/CreateTaskForm.tsx:** Component for creating
  new task.

## Conclusion

This React Typescript to-do list app is a simple example of how to create a
task, list of tasks, delete a pending task and change task status to done.

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
