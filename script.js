const idea = document.getElementById("idea");
const type = document.getElementById("type");
const style = document.getElementById("style");
const result = document.getElementById("result");
const resultCard = document.getElementById("resultCard");

document.getElementById("generate").addEventListener("click", () => {
  const text = idea.value.trim();

  if (!text) {
    alert("Décris d'abord ton idée.");
    return;
  }

  const prompt = `Crée un contenu ${type.value} ${style.value} basé sur cette idée :

"${text}"

Direction artistique :
- Style ${style.value}
- Rendu très détaillé et professionnel
- Composition claire et immersive
- Lumière et ambiance cohérentes avec la scène
- Détails réalistes des personnages, décors et textures
- Atmosphère forte et visuellement mémorable

Pour une vidéo, ajoute des mouvements de caméra naturels, une profondeur de champ adaptée et des transitions fluides.
Pour une image, précise le cadrage, la lumière, les textures et la composition.
Le résultat doit être précis, cohérent et directement exploitable dans un outil d'IA.`;

  result.textContent = prompt;
  resultCard.hidden = false;
  resultCard.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(result.textContent);

  document.getElementById("copy").textContent = "Copié ✓";

  setTimeout(() => {
    document.getElementById("copy").textContent = "Copier";
  }, 1500);
});
