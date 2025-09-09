// Create a new SpeechSynthesisUtterance object to hold the speech text and voice
let speech = new SpeechSynthesisUtterance();

// Array to store available voices from the browser
let voices = [];

// Select the <select> element where voices will be listed
let voiceSelect = document.querySelector("select");

// Event triggered when the available voices are loaded or changed
window.speechSynthesis.onvoiceschanged = () => {
    // Get the list of available voices and store in 'voices' array
    voices = window.speechSynthesis.getVoices();
    
    // Set the default voice to the first available voice
    speech.voice = voices[0];
    
    // Populate the dropdown with options: voice name as display, index as value
    voices.forEach((voice, i) => 
        voiceSelect.options[i] = new Option(voice.name, i)
    );
};

// Event: When user selects a different voice from the dropdown
voiceSelect.addEventListener("change", () => {
    // Set the speech object's voice to the selected voice
    speech.voice = voices[voiceSelect.value];
});

// Event: When the button is clicked to speak the text
document.querySelector("button").addEventListener("click", () => {
    // Get the text input by the user from the <textarea>
    speech.text = document.querySelector("textarea").value;
    
    // Speak the text using the selected voice
    window.speechSynthesis.speak(speech);
});
