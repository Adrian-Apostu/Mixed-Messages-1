const subjects = ["Life", "Success", "Happiness"];
const verbs = ["is about", "thrives on", "demands"];
const objects = ["perseverance.", "hard work.", "kindness."];
function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function generateMessage() {
    const subject = selectRandom(subjects);
    const verb = selectRandom(verbs);
    const object = selectRandom(objects);


    return `${subject} ${verb} ${object}`;
};

console.log(generateMessage());