import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each tip
    return database.tips.map(tip => `
        <div class="tip-card">
            <h3>${tip.topic}</h3>
            <p>${tip.text}</p>
        </div>
    `).join('');
};