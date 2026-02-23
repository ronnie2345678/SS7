function showFolders() {
  const folders = document.getElementById("folders");
  folders.style.display = "grid";

  const cards = folders.querySelectorAll(".folder-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

function showUpgradeMessage(folderName) {
  Swal.fire({
    icon: 'warning',
    title: 'Upgrade Required',
    text: `Error: upgrade your device from old device`,
    confirmButtonText: 'OK'
  });
}
