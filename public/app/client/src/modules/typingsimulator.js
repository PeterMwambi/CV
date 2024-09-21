// TypingSimulator class
class TypingSimulator {
    constructor(text, delay, element, onTypingEnd) {
        this.text = text;
        this.delay = delay;
        this.element = element;
        this.index = 0;
        this.onTypingEnd = onTypingEnd; // Callback when typing ends
    }

    typeCharacter() {
        if (this.index < this.text.length) {
            const currentChar = this.text[this.index];
            this.element.innerHTML = this.text.slice(0, this.index + 1) + '<span class="cursor">|</span>'; // Add cursor
            this.index++;
            setTimeout(() => this.typeCharacter(), this.delay); // Continue typing after delay
        } else if (this.onTypingEnd) {
            this.onTypingEnd(); // Call the onTypingEnd callback when typing finishes
        }
    }

    start() {
        this.typeCharacter();
    }

    reset() {
        this.index = 0; // Reset the index
        this.element.innerHTML = ''; // Clear the element
    }
}

export default TypingSimulator;