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
    title: 'IMEI Status scam link',
    text: `Sorry: IMEI 353068119830651 iphone is not compatible this is a scam link`,
    confirmButtonText: 'Circumvent'
  });
}

