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
    
    
        updateVote()
     .then(() => {
    
        container.appendChild(message);
        button.remove();
        
      })
      .catch(() => {
        errorMessage.textContent =
          "We could not process your vote, please try again later.";
        container.appendChild(errorMessage);
                  container.appendChild(button)
  button.textContent = "Error";

        Voter
      });
  });

  return container;
}
