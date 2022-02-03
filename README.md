# Codecademy Matching Memory Project

## Table of contents

- [Project Goals](#project-goals)
- [Built with](#built-with)
- [How to use](#how-to-use)
- [Challenges and Credits](#challenges-and-credits)

## Project Goals

This project explores where `react-redux` fits into an application by finishing off the implementation of a one-player matching game.

The application consists of 5 React components:

1.  `App`: The root component, `App` renders the `Score` and `Board` components.
2.  `Score`: Child of the `App` component, `Score` will display the number of matched cards.
3.  `Board`: Child of the `App` component, `Board` will create the card grid for gameplay.
4.  `CardRow`: Child of the `Board` component, `CardRow` renders a row of `Card` components.
5.  `Card`: Child of the `CardRow` component, `Card` displays the card content when flipped over.

The application `state` is an array of 12 objects with each object representing a card:

```
// card object
{
  id: uniqueID,
  contents: wordString,
  visible: visibleBoolean,
  matched: matchedBoolean
}
```

There are 3 actions needed to run the game:

- `setGame`: randomize the card array and set `visible` and `matched` of all cards to `false`
- `flipCard`: set `visible` of the specified card `id` to `true`
- `resetCards`: set visible to `false` on unmatched cards

To complete this project you will add a `<Provider />` component, implement selectors, retrieve data from the `store` with `useSelector()`, and dispatch actions with the help of `useDispatch()`.

## Built with

- React
- Dependencies: [redux](https://redux.js.org/), [react-redux](https://react-redux.js.org/)
- Git, GitHub

## How to use

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Challenges and Credits

This was a practice project from the full stack program at Codeacademy.
