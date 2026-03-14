export function Voter(updateVote) {
  const container = document.createElement("div");

  const button = document.createElement("button");
  button.textContent = "Like";

  const errorMessage = document.createElement("p");

  container.appendChild(button);

  button.addEventListener("click", () => {
    errorMessage.remove();

    const message = document.createElement("p");
    message.textContent = "Liked";
    container.appendChild(message);
   
    const image = document.createElement("img");
    image.setAttribute("src", "/media/like");
    image.setAttribute("alt", "Liked image");
    button.appendChild(image)

    updateVote().catch(() => {
      message.remove()

      errorMessage.textContent =
        "We could not process your vote, please try again later.";
      container.appendChild(errorMessage);
      container.appendChild(button);
      button.textContent = "Error";
    });

  });

  return container;
}
