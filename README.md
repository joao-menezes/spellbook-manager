# 📖 Spellbook Manager

Uma aplicação web interativa para gerenciamento de grimórios personalizados em JSON. Ideal para jogadores de RPG e mestres que desejam criar, editar e exportar magias de forma prática e visual.

---

## ✨ Funcionalidades

- 📂 Upload de arquivos `.json` com listas de magias existentes.
- ✍️ Adição de novas magias via formulário com validações básicas.
- 📥 Download do grimório atualizado com as novas magias.
- 🌐 Suporte a internacionalização com múltiplos idiomas.
- 🔔 Toasts informativos para feedback de ações.

---

## 🚀 Como usar

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/spellbook-manager.git
    cd spellbook-manager
    ```

2. Abra o arquivo `index.html` diretamente em seu navegador (não requer servidor web).

3. Faça upload de um arquivo `.json` contendo o seguinte schema:

    ```json
    {
      "quantidade": 0,
      "dados": []
    }
    ```

4. Preencha o formulário com os dados da nova magia.
5. Clique em **"✨ Add Spell"**.
6. Faça o download do grimório atualizado clicando em **"📥 Download JSON"**.