const sentences = [
    "Hi, I\'m Waseq",
    "I\'m based in Sydney NSW",
    "I am a Solutions Architect",
    "I am a Machine Learning enthusiast",
];

const typewriter = document.getElementById('typewriter');
let sentenceIndex = 0;
let charIndex = 0;

function typeSentence() {
    if (charIndex < sentences[sentenceIndex].length) {
        typewriter.innerHTML += sentences[sentenceIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeSentence, 50); // Adjust typing speed here
    } else {
        setTimeout(eraseSentence, 2000); // Adjust pause before erasing here
    }
}

function eraseSentence() {
    if (charIndex > 0) {
        typewriter.innerHTML = sentences[sentenceIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseSentence, 50); // Adjust erasing speed here
    } else {
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        setTimeout(typeSentence, 300); // Adjust pause between sentences here
    }
}

// Start the typewriter effect
typeSentence();