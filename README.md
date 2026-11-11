# 🔐 Generate Wordlist CryptoJS

API em **Node.js** + **Express** que usa a biblioteca **CryptoJS** para gerar wordlists criptografadas a partir de um arquivo CSV.

O arquivo de resposta é um CSV que usa `\n` em vez de vírgula como separador, para facilitar colar direto no **Intruder do Burp Suite**.

> ⚠️ **Uso ético:** destinado a testes de segurança em aplicações próprias ou com autorização expressa.

## 📦 Estrutura do repositório

```
├── Crypto/       # Lógica de criptografia/descriptografia (CryptoJS)
├── Files/        # Leitura e escrita de arquivos
├── Wordlists/    # Wordlists de entrada e saída (.csv)
├── app.js        # Ponto de entrada da API (Express)
└── requires.js   # Dependências centralizadas
```

## ✅ Pré-requisitos

- Node.js `18.13.0` ou superior
- npm (instalado junto com o Node.js)

Dependências do projeto (instaladas via `npm install`):

- [`crypto-js`](https://www.npmjs.com/package/crypto-js)
- [`express`](https://www.npmjs.com/package/express)
- [`csv-parse`](https://www.npmjs.com/package/csv-parse)
- `fs` (módulo nativo do Node.js)

## 🚀 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/Strongreen/GenerateWordlistCryptoJS.git
cd GenerateWordlistCryptoJS
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute a API

```bash
node app.js
```

A API fica disponível em `http://localhost:3000` (ou `http://127.0.0.1:3000`).

## 📬 Coleção do Postman

O repositório inclui uma coleção com os endpoints pré-configurados: [`GenerateWordlistCryptoJS.postman_collection.json`](./GenerateWordlistCryptoJS.postman_collection.json).

**Para importar no Postman:**

1. Abra o Postman.
2. No painel esquerdo, clique em **Import**.
3. Na aba **File**, clique em **Upload Files** e selecione o `.json` da coleção.
4. Clique em **Open** para importar.
5. A coleção aparece em **Collections**, no painel esquerdo.

> Se a coleção referenciar URLs específicas, ajuste-as para a URL local onde a API está rodando.

## 📝 Exemplos de payload

### POST — criptografar wordlist

```json
{
    "pathIn": "./Wordlists/wordlist.csv",
    "pathOut": "./Wordlists/wordlistCrypt.csv",
    "secretKey": "secretKey",
    "outputLength": 256
}
```

| Campo | Descrição |
|---|---|
| `pathIn` | Caminho do arquivo CSV original a ser criptografado. |
| `pathOut` | Caminho onde o CSV criptografado será salvo. |
| `secretKey` | Chave secreta usada pelo CryptoJS para criptografar as informações. |
| `outputLength` | Tamanho do hash para SHA-3: `224`, `256`, `384` ou `512` bits. |

### GET — ler wordlist já criptografada

```json
{
    "pathOut": "./Wordlists/wordlistCrypt.csv"
}
```

> O arquivo lido por este endpoint deve estar no formato CSV padrão (com vírgula).

## 🤝 Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Commit suas alterações: `git commit -am 'Adicionando nova feature'`
4. Faça o push: `git push origin feature/nova-feature`
5. Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** — consulte o arquivo [`LICENSE`](./LICENSE) para mais detalhes.

## 👤 Autor

**Strongreen**, pentester e palestrante.

- 🌐 [strongreen.com](https://www.strongreen.com)
- 🐦 [@strongreen_](https://twitter.com/strongreen_)
- ✉️ contato@strongreen.com

---

Zephyr agradece sua atenção! 🐶
