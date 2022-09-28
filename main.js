const btnShare = document.getElementById("btn-share");
const btnBack = document.getElementById("back");
const info = document.querySelector("#info");
const share = document.querySelector("#share");

console.log("hello");

btnShare.addEventListener("click", () => {
  share.classList.remove("hidden");
//   info.classList.add("hidden")
//   console.log("clicked");
});

back.addEventListener("click", () => {
  share.classList.add("hidden");
//   info.classList.remove("hidden")
//   console.log("clicked");
});

// 


