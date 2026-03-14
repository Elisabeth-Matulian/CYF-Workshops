export function Voter(updateVote) {
  const container = document.createElement("div");

  const button = document.createElement("button");
  button.textContent = "Like";

  const errorMessage = document.createElement("p");

  container.appendChild(button);

  button.addEventListener("click", () => {
    errorMessage.remove();

    updateVote()
      .then(() => {
        const message = document.createElement("p");
        message.textContent = "Liked";
        const image = document.createElement("img");
        image.setAttribute("src", "/media/like");
        image.setAttribute("alt", "Liked image");
        button.appendChild(image)

        container.appendChild(message);
        button.remove();
      })
      .catch(() => {
        errorMessage.textContent =
          "We could not process your vote, please try again later.";
        container.appendChild(errorMessage);
      });
  });

  return container;
}
