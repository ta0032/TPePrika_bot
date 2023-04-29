const token = "6286945148:AAGL2rgpgunPfS4hDdLNWw4Cdfxfk4wGHdc";
const chatId = "271098595";
const text = "Work Hard Play Hard!";
const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
const firstKnopa = document.getElementById("firstKnopa");
let worked = false;

firstKnopa.addEventListener("click", () => {
  worked = !worked;
  if (worked === true) {
    firstKnopa.textContent = "worked";
    sendMessage();
  } else {
    firstKnopa.textContent = "NO worked";
  }
});

let sendMessage = () => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
