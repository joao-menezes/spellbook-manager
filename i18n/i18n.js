const translations = {
    en: {
        title: "📖 Spellbook Manager",
        uploadTitle: "📂 Upload Spellbook",
        uploadButton: "Upload File",
        addTitle: "✨ Add New Spell",
        spellName: "Spell Name",
        originalName: "Original Name",
        level: "Level",
        school: "School",
        castingTime: "Casting Time",
        range: "Range",
        components: "Components",
        duration: "Duration",
        classes: "Classes",
        subclasses: "Subclasses",
        materialCost: "Material Cost",
        concentration: "Concentration",
        ritual: "Ritual",
        description: "Spell Description",
        addSpell: "✨ Add Spell",
        downloadTitle: "📥 Download Updated Spellbook",
        downloadButton: "Download JSON"
    },
    pt: {
        title: "📖 Gerenciador de Grimório",
        uploadTitle: "📂 Upload do Grimório",
        uploadButton: "Enviar Arquivo",
        addTitle: "✨ Adicionar Nova Magia",
        spellName: "Nome da Magia",
        originalName: "Nome Original",
        level: "Nível",
        school: "Escola",
        castingTime: "Tempo de Conjuração",
        range: "Alcance",
        components: "Componentes",
        duration: "Duração",
        classes: "Classes",
        subclasses: "Sublaclasses",
        materialCost: "Materiais Pagos",
        concentration: "Concentração",
        ritual: "Ritual",
        description: "Descrição da Magia",
        addSpell: "✨ Adicionar Magia",
        downloadTitle: "📥 Baixar Grimório Atualizado",
        downloadButton: "Baixar JSON"
    },
    es: {
        title: "📖 Gestor de grimorios",
        uploadTitle: "📂 Subir Grimorio",
        uploadButton: "Subir Archivo",
        addTitle: "✨ Añadir nuevo hechizo",
        spellName: "Nombre del hechizo",
        originalName: "Nombre original",
        level: "Nivel",
        school: "Escuela",
        castingTime: "Tiempo de lanzamiento",
        range: "Rango",
        components: "Componentes",
        duration: "Duración",
        classes: "Clases",
        subclasses: "Subclases",
        materialCost: "Materiales pagados",
        concentration: "Concentración",
        ritual: "Ritual",
        description: "Descripción Mágica",
        addSpell: "✨ Añadir Magia",
        downloadTitle: "📥 Descargar Grimorio Actualizado",
        downloadButton: "Descargar JSON"
    }
};

const languageLabels = {
    en: "🇺🇸 English",
    pt: "🇧🇷 Português",
    es: "🇪🇸 Español"
};

function populateLanguageSelector() {
    const selector = document.getElementById("languageSelect");
    const languages = Object.keys(translations);

    selector.innerHTML = "";

    languages.forEach(code => {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = languageLabels[code] || code;
        selector.appendChild(option);
    });

    selector.value = localStorage.getItem("lang") || "en";
}

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
}

function loadLanguage() {
    const lang = localStorage.getItem("lang") || "en";
    applyTranslations(lang);

    const selector = document.getElementById("languageSelect");
    if (selector) selector.value = lang;
}

function saveLanguage(lang) {
    localStorage.setItem('lang', lang);
}

document.addEventListener("DOMContentLoaded", () => {
    populateLanguageSelector();
    loadLanguage();

    const selector = document.getElementById("languageSelect");
    if (selector) {
        selector.addEventListener("change", (e) => {
            const selectedLang = e.target.value;
            applyTranslations(selectedLang);
            saveLanguage(selectedLang);
        });
    }
});
