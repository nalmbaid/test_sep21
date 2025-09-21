document.addEventListener("click", function (e) {
  const button = e.target.closest("button");

  if (button && button.textContent.toLowerCase().includes("add")) {
    console.log("Add detected! Showing popup");

    const imageFiles = [
      "ems1.png",
      "ems2.png",
      "ems3.png",
      "ems44.png"
    ];

    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    const chosenImage = imageFiles[randomIndex];

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("images/" + chosenImage);

    const imgWidth = Math.random(200,500);
    const imgHeight = Math.random(200,500);
    img.style.width = imgWidth + "px";
    img.style.height = imgHeight + "px";

    img.style.position = "fixed";
    img.style.zIndex = "9999";
    img.style.borderRadius = "8px";

    let randomX = Math.floor(Math.random() * (window.innerWidth - imgWidth));
    let randomY = Math.floor(Math.random() * (window.innerHeight - imgHeight));

    img.style.left = randomX + "px";
    img.style.top = randomY + "px";

    document.body.appendChild(img);
  }
});
