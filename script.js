document.getElementById("searchButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
  
    if (username.trim() === "") {
      alert("Por favor, ingresa un nombre de usuario.");
      return;
    }
  
    // URL de la API de Mojang
    const apiURL = `https://api.mojang.com/users/profiles/minecraft/${username}`;
  
    // Buscar el UUID y la skin del usuario
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Usuario no encontrado.");
        }
        return response.json();
      })
      .then(data => {
        const uuid = data.id;
        const skinURL = `https://crafatar.com/renders/body/${uuid}?overlay`;
  
        // Mostrar la skin
        document.getElementById("playerName").textContent = username;
        document.getElementById("playerSkin").src = skinURL;
        document.getElementById("skinDisplay").classList.remove("hidden");
  
        // Mostrar las secciones del formulario
        document.getElementById("formSections").classList.remove("hidden");
      })
      .catch(error => {
        alert("Error: " + error.message);
      });
  });
  