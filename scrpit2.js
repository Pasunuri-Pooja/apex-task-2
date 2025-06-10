// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('Please fill in all fields.');
    e.preventDefault();
  } else if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  } else {
    alert('Form submitted successfully!');
  }
});

// To-Do List Functions
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
