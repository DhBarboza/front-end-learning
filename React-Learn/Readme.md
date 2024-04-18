# Lesions

## Components

- São funções que retornam estruturas HTML, ou seja, um arquivo JavaScript que contém HTML;
- Todas os componentes possuem a extenção JSX (JavaScript + XML);
- Não podem ter multiplos components, um abaixo do outro, sem que esteja dento de um pai:

    ~~~react
    <div>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
    ~~~

**Default Export vs Named Export:**
- Default Export - Você pode nomear o componente durante a importação. Existe uma desvantagem quando está criando multiplos componentes, que é a confussão de nomenclaturas:
    ~~~react
    function Name() {
        return <p>Deafult export</p>
    }
    
    export default Name;
    ~~~
    
    ~~~react
    import Banana from "./FileName"
    ~~~

- Named Export: Você declara o nome do componente na exportação. Prefira utilizar essa forma:
    ~~~react
    export function Name() {
        return <p>Deafult export</p>
    }
    ~~~
    
    ~~~react
    import { Name } from "./FileName"
    ~~~
