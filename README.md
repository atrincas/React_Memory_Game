# React Memory Game

A simple memory game where you can choose a custom theme for the memory cards.
[Live Demo](https://atrincas-memory-game.herokuapp.com).

![Memory Game](./src/imgs/memory-game.png)

### What I learned

* Setup a React App with create-react-app.
* Fetch and display images from the Unsplash API.
* Make the user interface with CSS.
* Use the React lifecycles: componentWillUpdate, shouldComponentUpdate
* Implement functionality to the UI: onSearch, clickHandlers, handleSubmit + more custom functions.

## Installation and Setup Instructions

### Prerequisites

This application makes use of the Unsplash API. In order to fetch images from their database succesfully you need to have an `Api-Key`. You can sign-up for a free developers-account at Unsplash.
After you cloned the repo create a new file `.env` and save it inside the project folder. Copy-Paste the following code inside the .env file:

```
REACT_APP_API_KEY=yourApiKey

// Example:
REACT_APP_API_KEY=1ab23bfsf333
```

### Installing

1. npm

```
npm install npm@latest -g
```

2. Clone the repo

```
git clone https://github.com/atrincas/React_Memory_Game.git
```

3. Run npm install inside project root directory

```
npm install
```

4. Start the server

```
npm run start
```

5. Play

```
Enjoy! :)
```
