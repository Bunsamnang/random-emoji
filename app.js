const emoji = document.querySelector(".emoji");
console.log(emoji);

const emojis = [
  "😊",
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😙",
  "🥲",
  "😚",
  "☺️",
  "🙂",
  "🤗",
  "🤩",
  "🤔",
  "🫡",
  "🤨",
  "😐",
  "😑",
  "😶",
  "🫥",
  "😶‍🌫️",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "🤐",
  "😯",
  "😪",
  "😫",
  "🥱",
  "😴",
  "😌",
  "😛",
  "😜",
  "😔",
  "😝",
  "🤤",
  "😒",
  "😕",
  "😓",
  "🫤",
  "🫠",
  "🙃",
  "🤑",
  "😲",
  "☹️",
  "🙁",
  "😖",
  "😞",
  "😟",
  "😭",
  "😢",
  "😦",
  "😧",
  "😰",
  "😮‍💨",
];

console.log(emojis.length);
emoji.addEventListener("mouseover", () => [
  (emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]),
  
]);
