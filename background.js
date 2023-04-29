const token = "6286945148:AAGL2rgpgunPfS4hDdLNWw4Cdfxfk4wGHdc";
const chatId = "271098595";
const text = "Work Hard Play Hard!";
const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
const firstKnopa = document.getElementById("firstKnopa");
const notificationId = null;
let work = false;

firstKnopa.addEventListener("click", () => {
  work = !work;
});
if ((work = true)) {
  function handleNotification(notificationId) {
    // Установка обработчика на событие появления уведомлений
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text + notificationId,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  chrome.notifications.onShown.addListener(handleNotification);
} else {
  console.log("Лошара");
}
