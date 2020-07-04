const chatMessages = document.querySelector(".chat-messages");
const socket = io();

socket.on("message", (message) => {
  addMessage(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = e.target.elements.message.value;

  socket.emit("chatMessage", msg);

  e.target.elements.message.value = "";
  e.target.elements.message.focus();
});

function addMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = message;
  document.querySelector(".chat-messages").appendChild(div);
}
