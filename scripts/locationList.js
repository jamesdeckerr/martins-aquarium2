import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate an HTML representation of each location
    return database.locations.map(location => `
        <article class="locations">
            <section class="location">
                <h3>${location.name}</h3>
                <p><strong>Country:</strong> ${location.country}</p>
                <p>${location.description}</p>
            </section>
        </article>
    `).join('');
};
