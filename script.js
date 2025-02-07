const PeopleModule = (function () {
    let people = ['nushy']; // Private array for storing names

    // Variables for DOM elements
    let el, button, input, ul;

    const cacheDom = () => {
        el = document.getElementById('peopleModule'); // Main container
        button = el.querySelector('#addPerson'); // Add button
        input = el.querySelector('input'); // Input field
        ul = el.querySelector('ul'); // List
    };

    const bindEvents = () => {
        button.addEventListener('click', addPerson);
        ul.addEventListener('click', deletePerson);
    };

    const render = () => {
        ul.innerHTML = ""; // Clear list before re-rendering

        people.forEach((person, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${person}</span> <i class="del" data-index="${index}">X</i>`;
            ul.appendChild(li);
        });
    };

    const addPerson = () => {
        const name = input.value.trim();
        if (name) {
            people.push(name); // Add name to array
            render(); // Re-render UI
            input.value = ''; // Clear input field
        }
    };

    const deletePerson = (event) => {
        if (event.target.classList.contains('del')) {
            const index = event.target.getAttribute('data-index');
            people.splice(index, 1); // Remove from array
            render(); // Re-render UI
        }
    };

    const init = () => {
        cacheDom();
        bindEvents();
        render(); // Initial render
    };

    return { init };
})();

// Initialize the module after the DOM loads
document.addEventListener("DOMContentLoaded", PeopleModule.init);
