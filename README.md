# React Memory Game

A simple memory game where you can choose a custom theme for the memory cards.

## Installation and Setup Instructions

### Prerequisites

This application makes use of the Unsplash API. In order to fetch images from their database succesfully you need to have an `Api-Key`. You can sign-up for a free developers-account at Unsplash.
After you cloned the repo create a new file `cred.js` and save it inside the Components folder. Than paste the following code inside:

```
import Unsplash from 'unsplash-js';

// Paste your Acces Key and Secret Key inside the quotation marks:

const cred = new Unsplash({
	applicationId : "",
	secret : ""
});

export default cred;
```

- npm

```
npm install npm@latest -g
```

### Installing

1. Clone the repo

```
git clone https://github.com/atrincas/React_Memory_Game.git
```

2. Run npm install inside project root directory

```
npm install
```

3. Start the server

```
npm run start
```

4. Play

```
Enjoy! :)
```