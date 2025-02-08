document.addEventListener("mouseup", (event) => {
    let selectedText = window.getSelection().toString().trim();

    setTimeout(() => {
        let existingButton = document.getElementById("highSearch");
        if (existingButton) {
            existingButton.remove();
        }
        if (selectedText.length > 0) {
            let selection = window.getSelection();
            let range = selection.getRangeAt(0);

            // Obtenha as coordenadas do texto selecionado
            let rect = range.getBoundingClientRect();

            // Coordenadas para posicionar o botão
            let posX = rect.right + window.scrollX;
            let posY = rect.bottom + window.scrollY;

            // Criação do botão
            let button = document.createElement("button");
            button.id = "highSearch";
            button.innerText = "Search";
            button.style.position = "absolute";
            button.style.top = `${posY}px`;
            //button.style.left = `${posX}px`;
            //button.style.top = `${event.clientY + window.scrollY}px`;
            button.style.left = `${event.clientX}px`;
            button.style.background = "#0078D7";
            button.style.color = "white";
            button.style.border = "none";
            button.style.padding = "5px 10px";
            button.style.cursor = "pointer";
            button.style.zIndex = "1000";
            button.style.borderRadius = "5px";

            document.body.appendChild(button);

            button.onclick = function () {
                browser.runtime.sendMessage({ query: selectedText });
                button.remove();
            };

            setTimeout(() => button.remove(), 5000);
        }
    }, 10);

});
