tippy('[data-tippy-content]', {
   content: 'placeholder',
   placement: 'bottom',
   // theme: 'tooltip-theme',
   // arrow: false,
   // offset: [0, -0.5]
})

var projectKey2Title = {
   forge: 'Forge',
   thesis: 'Master Thesis',
   mp: 'Master Project',
   tavrn: 'TAVRN',
   crypto: 'Cryptography Teaching Software',
   "4d": '4-Dimensional Grapher',
}

var projectKey2Desc = {
   forge: 'Forge is a turn-based multiplayer strategy game built with Firebase and Unity. It combines elements from collectible card games, real-time strategy games, and deck-building games into a cohesive competitive experience.<br><br>Responsibilities included architecting networking, developing cloud functions, managing security rules, 3D modeling, game design, and gameplay programming.',
   thesis: 'Coined by Google in 2017, federated learning is a new machine learning paradigm. It allows clients to collaboratively learn a single model from separate datasets of sensitive information. The datasets remain private for the entire duration of the training process.<br><br>The thesis investigates the paradigm\'s robustness to adversarial attacks in both a horizontal and a vertical scenario. Both scenarios\' implementations featured the same model, same datasets, and same number of clients to increase the credibility of their comparison.<br><br>To be finished in August.',
   mp: 'Worked with another student at the University of Zurich to create a system that detects net neutrality breaches. When a user starts the process, the system gathers multiple attributes of their internet connection. These measurements are then placed on the blockchain, available to everyone. Comparisons can be made between the measurements to find discrepancies from net neutrality breaches.<br><br>Responsibilities included creating the smart contract from scratch, which aggregates, filters, and incentivizes the creation of further user measurements, as well as a GUI to interface with it.<br><br>Read the research paper <a href="resources/MasterProject-Demeter.pdf", download="MasterProject-Demeter.pdf">here</a>.',
   tavrn: 'Developed in a team of 4, TAVRN is a multiplayer virtual reality game. Players can cast spells, race on brooms, and duel their friends in a magical medieval world. Received first place prize in SCU\'s <em>Imagine That!</em> contest. Find the trailer for it <a href="https://www.youtube.com/watch?v=h6V7x7ZZ4MA" target="_blank">here</a> and the articles written about it <a href="https://medium.com/@SCUImaginarium/tavrn-team-making-steady-progress-on-its-vr-game-prototype-4590a6168ca9" target="_blank">here</a> and <a href="https://medium.com/@SCUImaginarium/tavrns-latest-prototype-a-huge-step-forward-includes-multiplayer-mode-83fba1406749" target="_blank">here</a>.<br><br>Responsibilities included networking, gameplay programming, game design, and 3D modeling.',
   crypto: 'Created an offline web application for Santa Clara University\'s Cryptography class to help teach AES- encryption. Currently being used in the university class since Spring 2019.<br><br>Find the project <a href="https://github.com/flamegiraffe/Crypto" target="_blank">here</a>.',
   "4d": 'Worked with Professor Thomas Banchoff of Brown University to create an interactive 4-dimensional grapher in virtual reality. Showcased to professors of various disciplines who praised it for its effectiveness and clarity. Find the video demo of a 4D torus in 3D <a href="https://www.youtube.com/watch?v=YgSxN4g0NNE" target="_blank">here</a>.',
}

var projectKey2Src = {
   forge: 'resources/images/forge-img.png',
   thesis: 'resources/images/thesis-logo.png',
   mp: 'resources/images/master-project-logo.jpg',
   tavrn: 'resources/images/tavrn-square.jpg',
   crypto: 'resources/images/Crypto.png',
   "4d": 'resources/images/4d-Back.png',
}


var projectTitle, projectDescription, projectImage;
$(document).ready(function () {
   projectTitle = $('#project-title');
   projectDescription = $('#project-description');
   projectImage = $('#project-image');
});


$('.project-more').on('click', function () {
   handleReadMoreClick($(this).attr('id').split('-')[1]);
})

function handleReadMoreClick(project) {
   projectTitle.text(projectKey2Title[project] || "");
   projectDescription.html(projectKey2Desc[project] || "");
   projectImage.attr('src', projectKey2Src[project] || "");
}