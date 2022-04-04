# Marvel App

Para iniciar o projeto, certifique-se de ter o **node** e o **yarn** instalados.

Esta aplicação faz uso das APIs da Marvel, para consumir essas APIs é necessário se cadastrar como um desenvolvedor através desse [link](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount). Após isso serão fornecidas duas chaves, uma pública e outra privada. **Salve essas chaves, pois elas deverão ser adicionadas ao projeto, caso contrário as APIs não irão funcionar como o esperado.**

Para configurar as chaves, na raiz do projeto abra o arquivo **.env**. Nele haverá duas linhas, uma referente a chave pública e outra a chave privada, adicione as chaves que foram obtidas no site da Marvel em seus respectivos lugares, como no exemplo abaixo:

`REACT_APP_PUBLIC_KEY=MY_PUBLIC_KEY`

`REACT_APP_PRIVATE_KEY=MY_PRIVATE_KEY`

Após adicionar as chaves no arquivo **.env**, ainda na pasta do projeto baixe as dependências, executando o comando `yarn`.

Após baixar as dependências, rode o comando `yarn start` para iniciar a aplicação em seu navegador.

## Estrutura do Projeto
Na raiz do projeto, dentro da pasta **src** haverá a seguinte estrutura de pastas e arquivos:

### Assets
Essa é a pasta raiz das que poderão receber arquivos diversos tipos de arquivos, como **images**, **icons**, **audios**, **videos**, etc. Aqui está sendo utilizada apenas a pasta **images**, caso o projeto escale para receber novos arquivos, eles poderão ser adicionados em suas respectivas pastas, como citado anteriormente.

### Components
Essa pasta é a responsável por receber os componentes da aplicação. Atualmente ela está composta pelo componente de **Card** e **Search**.

#### Card
O componente Card recebe as seguintes propriedades: **name**, **path**, **extension**, **isCharacter**. A propriedade name será inserida no local onde deverá ser iniciado o nome em destaque do card. A Propriedade path e extension serão concatenadas e inseridas na tag de imagem, resultado em um caminho completo da imagem. A propriedade isCharacter é um valor booleano, que deverá ser inserido apenas no card de personagens, através dele é realizado uma condição para adição de classes específicas para esse card.

#### Search
O componente Search recebe as seguintes propriedades: **value** e **onChange**. A propriedade value receberá o valor do seu input e a proprierdade onChange, a função quando seu valor é mudado.

### Services
Na pasta services é possível localizar o arquivo **api.js**. É nele onde estão localizadas as funções que buscam os resultados das APIs da Marvel. Atualmente, como são poucas funções, todas estão presentes no mesmo arquivo, caso o projeto precise de mais chamadas, o ideal seria dividir essas funções em arquivos e pastas separadas, para manter uma melhor organização.

### Views
Essa pasta é a responsável por receber cada página da aplicação. Atualmente há duas páginas **Characters** e **Details**.

#### Characters
Essa é a página inicial. Ao ser criada ela irá realizar uma busca por personagens da Marvel e irá retornar seus valores preenchendo o componente de **cards**, que será exibido em uma lista. Ainda nessa página é possível realizar uma busca por um personagem através do componente **search**, então a lista de cards será atualizada com os novos resultados. Ao clicar em um personagem, você será direcionado para a página de detalhes.

#### Details
Essa página é exibida após o clique em um card de personagem na tela de **characters**. Ao carregar, a página irá realizar uma consulta na API da Marvel para carregar os detalhes do personagem, como uma lista de seus principais quadrinhos.

### index.js
O index.js, localizado na raiz da pasta **src**, corresponde a criação da aplicação em React, buscando como referência o id **root**, localizado no arquivo index.html da pasta public.

### routes.js
O arquivo routes.js é o responsável gerenciar as rotas da aplicação, esse arquivo deverá ser modificado, caso seja necessário criar/modificar/excluir uma rota.
