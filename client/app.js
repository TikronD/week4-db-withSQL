const form = document.getElementById("messageForm");
const messageContainer = document.getElementById("messageContainer");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // so the form does not clear

  //get the message we've written;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  // send the message to the API
  const response = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValues),
  });

  const json = await response.json(); // get the stuff out from response
  console.log(json);

  // Clear existing messages and fetch and render the updated list
  messageContainer.innerHTML = ""; // Clear existing messages
  getMessages();

  // Clear the input fields in the form
  form.reset();
});

async function getMessages() {
  // get the messages from our Database via our API
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  // loop through the messages and render them on the page
  messages.forEach(function (message) {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = message.guest;
    p.textContent = message.message;

    const messageContainer = document.getElementById("messageContainer");

    messageContainer.appendChild(h3);
    messageContainer.appendChild(p);
  });
}

getMessages();
