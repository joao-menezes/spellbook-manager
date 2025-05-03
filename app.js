let spellbook = null;

function handleFileUpload() {
    const fileInput = document.getElementById('jsonFile');
    const file = fileInput.files[0];

    if (!file) {
        showToast("error", "Please select a file first!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            spellbook = JSON.parse(event.target.result);
            showToast("success", "File loaded successfully!");
        } catch (error) {
            showToast("error", "Failed to process JSON!");
        }
    };
    reader.readAsText(file);
}

function addSpell() {
    try {
        if (!spellbook) {
            showToast("error", "Please load a JSON file first!");
            return;
        }

        const maxId = spellbook.dados.reduce((max, spell) => Math.max(max, spell.id), 12000);
        const newId = maxId + 1;

        const newSpell = {
            nome: document.getElementById('nome').value,
            id: newId,
            original: document.getElementById('original').value,
            nivel: Number(document.getElementById('nivel').value),
            escola: document.getElementById('escola').value,
            tempo: document.getElementById('tempo').value,
            alcance: document.getElementById('alcance').value,
            componentes: document.getElementById('componentes').value,
            materiaispagos: document.getElementById('materiaispagos').checked,
            duracao: document.getElementById('duracao').value,
            concentracao: document.getElementById('concentracao').checked,
            ritual: document.getElementById('ritual').checked,
            classes: document.getElementById('classes').value,
            subclasses: document.getElementById('sublaclasses').value,
            descricao: document.getElementById('descricao').value,
            upcast: "",
            fonte: "Grimório do Consumo",
            pagina: "66",
            srd: false
        };

        spellbook.dados.push(newSpell);
        spellbook.quantidade = spellbook.dados.length;

        showToast("success", `Spell '${newSpell.nome}' added successfully!`);
    } catch (error) {
        showToast("error", `Error while adding spell!`);
    }
}

function downloadSpellbook() {
    if (!spellbook) {
        showToast("error", "Please load a JSON file first!");
        return;
    }

    const jsonString = JSON.stringify(spellbook, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "Grimório do Consumo.json";
    a.click();
}

function showToast(type, message) {
    const container = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.classList.add("toast-custom", type === "success" ? "success" : "error");

    toast.innerHTML = `
        <div class="icon">${type === "success" ? "✅" : "⚠️"}</div>
        <div class="message">${message}</div>
        <button class="close-toast">&times;</button>
    `;

    toast.querySelector(".close-toast").addEventListener("click", () => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
