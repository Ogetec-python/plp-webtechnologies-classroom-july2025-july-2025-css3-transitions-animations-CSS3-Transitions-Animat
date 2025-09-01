// 🔧 Part 2: Functions with parameters and return values

// Function to toggle a class on an element
function toggleClass(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function to show modal
function showModal(modalElement) {
  modalElement.classList.remove('hidden');
  modalElement.classList.add('visible');
}

// Function to hide modal
function hideModal(modalElement) {
  modalElement.classList.remove('visible');
  modalElement.classList.add('hidden');
}

// 🔗 Part 3: Combine JS with CSS animations

// Animate box on button click
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');

animateBtn.addEventListener('click', () => {
  const isAnimated = toggleClass(box, 'animate');
  console.log(`Box animation active: ${isAnimated}`);
});

// Modal logic
const showModalBtn = document.getElementById('showModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

showModalBtn.addEventListener('click', () => showModal(modal));
closeModalBtn.addEventListener('click', () => hideModal(modal));

// 🧪 Scope demonstration
let globalMessage = "Hello from global scope!";

function scopedFunction() {
  let localMessage = "Hello from local scope!";
  console.log(localMessage); // Accessible only inside this function
  console.log(globalMessage); // Accessible from anywhere
}

scopedFunction();