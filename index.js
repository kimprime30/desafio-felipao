function classificarHeroi() {
  // Obtém os dados do usuário
  const nome = document.getElementById("nome").value;
  const xp = Number(document.getElementById("xp").value);

  // Verifica o nível do herói
  let nivel = "";
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp < 2000) {
    nivel = "Bronze";
  } else if (xp < 5000) {
    nivel = "Prata";
  } else if (xp < 7000) {
    nivel = "Ouro";
  } else if (xp < 8000) {
    nivel = "Platina";
  } else if (xp < 9000) {
    nivel = "Ascendente";
  } else if (xp < 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // Exibe o resultado
  document.getElementById(
    "resultado"
  ).textContent = `O Herói ${nome} está no nível ${nivel}`;

}