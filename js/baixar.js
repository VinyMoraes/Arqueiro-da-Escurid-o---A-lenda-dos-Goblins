document.getElementById("downloadButton").addEventListener("click", function() {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/uc?export=download&id=1hCoPQe0UfvZQFTpOdfIt8rS404EtFCPP";
    downloadLink.download = "nome-do-arquivo.extensao"; // Opcional: pode definir o nome do arquivo a ser baixado
    downloadLink.click();
});