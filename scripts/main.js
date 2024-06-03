import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

function displayContent() {
// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
document.getElementById('fish-container').innerHTML = fishHTML;
document.getElementById('tip-container').innerHTML = tipHTML;
document.getElementById('location-container').innerHTML = locationHTML;
}

document.addEventListener('DOMContentLoaded', displayContent);