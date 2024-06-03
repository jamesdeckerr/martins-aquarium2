import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    return database.fish.map(fish => `
    <div class="fish-card">
        <img src="${fish.image}" alt="${fish.name}">
        <h2>${fish.name}</h2>
        <p>Species: ${fish.species}</p>
        <p>Length: ${fish.length} inches</p>
        <p>Location: ${fish.location}</p>
        <p>Diet: ${fish.diet}</p>
    </div>
`).join('');
};