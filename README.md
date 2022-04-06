<h1>Front-end Challenge</h1>

<h3>Tecnologias usadas</h3>
<ul>
    <li>
        Next.js
        <ul>
            <li>
                Renderização no servidor - Server Side Rendering - SSR
            </li>
            <li>
                Import Dinâmico
            </li>
            <li>
                Otimização de imagens
            </li>
            <li>
                Otimização aprimorada para mecanismos de pesquisa de forma fácil (SEO)
            </li>
            <li>
                Usabilidade imediata de rotas
            </li>
        </ul>
    </li>
    <li>
        Tailwind
        <ul>
            <li>
                Desenvolvimento mais rápido de componentes
            </li>
            <li>
                Tamanho consistente dos arquivos .css
            </li>
            <li>
                Não precisa nomear classes 🙏
            </li>
        </ul>
    </li>
</ul>

<br>
<br>

<h1>Execute localmente</h1>

<p>Este projeto usa, como banco de dados, a API TMDB.</p>

Portanto, antes de continuar com o processo, crie sua chave [clicando aqui](https://developers.themoviedb.org/3/getting-started/introduction) e seguindo as instruções no site.

<br>


```bash
https://github.com/YuriCorredor/search-top-movies.git
cd front-end-challenge
# instale as dependências
npm install
```

<br>

<p>Antes de iniciar o servidor, é necessário inserir a sua chave da API no arquivo .env, caso contrário os requests à API retornaram com erro e o APP não funcionará como deveria.</p>


```bash
# No arquivo .env, altere o campo com a sua chave
API_KEY=YOUR_API_KEY
```

<br>

<p>Agora basta executar o servidor local.</p>

```bash
npm run dev
# ou
yarn dev
```

<br>
<br>

<h1>Visão geral do aplicativo</h1>

Visite o site [AQUI](https://front-end-challenge-lac.vercel.app/).

![APP-OVERVIEW](/readme/1.gif)
