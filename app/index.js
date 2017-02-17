import 'whatwg-fetch';
import games from './data';
// Import `data.json`

import addGamesToList from './twitch/add-games-to-list';

// Look up a `ul` element with a class called `results`
const grid = document.querySelector('.grid');

// Add games to the results list based on the data from `data.json`
addGamesToList(grid, games.top);
