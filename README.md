# Generate Wordlist CryptoJS

Este repositório contém uma API em Node.js e Express que utiliza a biblioteca CryptoJS para gerar wordlists criptografadas a partir de um arquivo csv.
O arquivo de resposta é um arquivo csv porém não contém vírgula e sim **'\n'** para facilitar colar no Intruder do Burp.

## Pré-requisitos

Antes de começar, verifique se o seguinte software está instalado em sua máquina:

- Node.js (versão 18.13.0)
- npm (geralmente vem junto com o Node.js)
- crypto-js
- express
- fs
- csv-parse

## Utilizando a coleção do Postman
Dentro deste repositório, você encontrará uma coleção do Postman com os endpoints pré-configurados. Importe a coleção para o Postman e comece a usar a API imediatamente.

[Collection Postman](https://github.com/Strongreen/GenerateWordlistCryptoJS/blob/main/GenerateWordlistCryptoJS.postman_collection.json)

### Para importar uma coleção no Postman, você pode seguir os seguintes passos:

#### 1 - Abra o aplicativo do Postman.

#### 2 - No painel esquerdo do Postman, clique no botão "Import" (Importar). Isso abrirá a janela de importação.

#### 3 - Na janela de importação, selecione a guia "File" (Arquivo) e clique no botão "Upload Files" (Enviar arquivos).

#### 4 - Navegue até o local onde a coleção do Postman está armazenada em seu computador e selecione o arquivo com extensão .json ou .postman_collection. Em seu caso, você pode encontrar a coleção do Postman dentro do repositório.

#### 5 - Após selecionar o arquivo, clique no botão "Open" (Abrir). O Postman irá importar a coleção.

#### 6 - Após a importação, a coleção aparecerá no painel esquerdo do Postman, na seção "Collections" (Coleções).

#### 7 - Agora você pode expandir a coleção importada e começar a explorar seus endpoints configurados. Certifique-se de que o ambiente do Postman esteja configurado corretamente, se houver variáveis de ambiente usadas na coleção.

_Lembre-se de que, se a coleção do Postman fizer referência a URLs específicas da API, você precisará ajustar essas URLs para corresponderem à URL local em que você está executando a API em sua máquina._

## Como utilizar a API

### 1. Clone o repositório

Clone este repositório em sua máquina local:

```
git clone https://github.com/seu-usuario/Generate-Wordlist-CryptoJS.git
```

### 2. Instale as dependências
Acesse o diretório do projeto e instale as dependências do Node.js executando o seguinte comando:

```
cd Generate-Wordlist-CryptoJS
npm install
```

### 3. Configure a biblioteca CryptoJS
Certifique-se de seguir as etapas de configuração da biblioteca CryptoJS, conforme descrito na [documentação oficial]([url](https://cryptojs.gitbook.io/docs/)).


### 4. Execute a API
Inicie a API executando o seguinte comando:

```
npm start
```
A API estará disponível em http://localhost:3000 ou http://127.0.0.1:3000

## Exemplo do payload utilizado no body para Método POST

O payload é um objeto JSON que contém informações necessárias para executar um determinado endpoint ou função em uma API. No caso específico do exemplo fornecido, o payload contém os seguintes campos:

```
{
    "pathIn": "./Wordlists/wordlist.csv",
    "pathOut": "./Wordlists/wordlistCrypt.csv",
    "secretKey": "secretKey"
}
```

**pathIn**: _O caminho de entrada do arquivo wordlist CSV. Esse campo indica o local onde o arquivo wordlist original, contendo a informação que deseja criptografar, está localizado. O arquivo deve estar no formato CSV._

**pathOut**: _O caminho de saída para o arquivo wordlist criptografado. Esse campo indica o local onde o arquivo wordlist criptografado deve ser salvo. O arquivo de saída será um novo arquivo CSV, com as informações criptografadas.

**secretKey**: _A chave secreta utilizada para criptografar as informações . Essa chave pode ser encontrada dentro da aplicação. Ela é usada pelo algoritmo de criptografia CryptoJS para realizar a criptografia das informações contidas no arquivo wordlist. ( Encontrada em alguns dos endponts )_

**outputLength**: _É utilizado na criptografia SHA-3 para configurar o comprimento do hash e tem as seguintes opções: 224, 256, 384 ou 512 bits._

## Exemplo do payload utilizado no body para Método Get

Também é possível utilizar este endpoint para ter todas as informações que você vai encontrar no arquivo **wordlistCrypt**, basta informar o caminho do arquivo que o endpoint irá ler o arquivo. 

Obs.: O aquivo a ser lido deve estar em formato csv (com vírgula)

```
{
    "pathOut": "./Wordlists/wordlistCrypt.csv"
}
```

## Contribuindo
Sinta-se à vontade para contribuir com este projeto. Basta seguir as etapas abaixo:

#### 1 - Faça um fork deste repositório
#### 2 - Crie uma branch para sua nova feature
```git checkout -b feature/nova-feature```
#### 3 - Faça o commit de suas alterações 
```git commit -am 'Adicionando nova feature'```
#### 4 - Faça o push para a branch 
```git push origin feature/nova-feature```
#### 5 - Abra um Pull Request

## Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.

```
Lembre-se de substituir "seu-usuario" no link do clone pelo seu nome de usuário do GitHub. 
Certifique-se de ajustar as versões do Node.js conforme necessário.
```
