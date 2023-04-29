const firstKnopa = document.getElementById("firstKnopa");

// Функция для обработки сообщений бота
function handleMessage(message) {
  if (message.text === "/start") {
    // Получаем chat id из сообщения
    chatId = message.chat.id;

    // Отправляем сообщение в Telegram
    const welcomeMessage = "Привет, я бот! Что тебе угодно?";
    sendTelegramMessage(welcomeMessage);
  }
}

firstKnopa.addEventListener("click", () => {
  handleMessage("/start");
});

// Задайте переменную для хранения chat id
let chatId = null;

// Функция для отправки сообщения в Telegram
function sendTelegramMessage(message) {
  // Проверяем, что chat id уже известен
  if (!chatId) {
    console.error("Chat id is not set.");
    return;
  }

  // Задаем параметры запроса к Telegram API
  const baseUrl = "https://api.telegram.org/bot";
  const botToken = "6286945148:AAGL2rgpgunPfS4hDdLNWw4Cdfxfk4wGHdc";
  const url = `${baseUrl}${botToken}/sendMessage`;
  const data = {
    chat_id: chatId,
    text: message,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Отправляем POST-запрос к Telegram API
  axios
    .post(url, data, config)
    .then(() => console.log("Сообщение отправлено в Telegram."))
    .catch((error) => console.error(error));
}
