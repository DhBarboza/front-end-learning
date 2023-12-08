# Maneiras de adicionar CSS

**Inline:**

```html
<div style="width: 200px; height: 200px; background-color: blue;"></div>
```

**Internal:**

```html
<html lang="pt-br">
    <head>
        <title>Caixa Azul</title>
        <style>
            .caixa-azul {
                width: 200px;
                height: 200px;
                background-color: blue;
            }
        </style>
    </head>
    <body>
        <div class="caixa-azul"></div>
    </body>
</html>
```

**External:**

```css
.caixa-azul {
    width: 200px;
    height: 200px;
    background-color: blue;
}
```

```html
<html lang="pt-br">
    <head>
        <link rel="stylesheet" href="estilos.css" />
        <title>Caixa Azul</title>
    </head>
    <body>
        <div class="caixa-azul"></div>
    </body>
</html>
```

## Referência

**id:**
São utilizados em elementos únicos
Notação: "#"

**class:**
São utilizadas para um ou mais elementos
Notação: "."

> Hierarquia: id > class > seletor tag
