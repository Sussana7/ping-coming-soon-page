const shareLink = document.querySelector(".share-link");
const hiddenShare = document.querySelector(".hidden-share-links");

shareLink.addEventListener("click", () => {
    hiddenShare.classList.toggle("show");
  });