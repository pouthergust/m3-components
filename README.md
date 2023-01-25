# Price Custom component

Componente que consulta o preço de determinado produto e cria: o valor de venda, o valor de listagem e o parcelamento disponivel. Uma grande vantagem desse componente é nossa liberdade de manipulação do preço, podendo utiliza-lo tanto na pagina de produto quanto nas prateleiras.

Esse componente usa o `vtex.product-context` então é necessario que esteja declarado no `manifest.json` como dependencia

![Imagem demonstrativa do componente em renderizado](./docs/imgem-demonstrativa.png)

## Implementando o componente no projeto

1. clone o repo para dentro da pasta `react/components`

2. Na raiz da pasta `react` crie um arquivo que irá importa e exportar o componente

3. Em `contentSchemas.json` podemos declara-lo da seguinte forma:

```json
    "Price": {
        "title": "Preço",
        "type": "object",
        "properties": {
            "showHighPrice": {
                "title": "Tipo",
                "type": "boolean",
                "description": "Valor padrão desta propriedade é 'true'"
            },
            "showLowPrice": {
                "title": "Tipo",
                "type": "boolean",
                "description": "Valor padrão desta propriedade é 'true'"
            },
            "showInstallments": {
                "title": "Tipo",
                "type": "boolean",
                "description": "Valor padrão desta propriedade é 'true'"
            },
            "discount": {
                "title": "Desconto",
                "type": "string",
                "description": "Valor do desconto a vista"
            }
        }
    },
```

4. Em `interfaces.json` basta declara-lo colocando o nome e vendor da loja correspondentes:

```json
    "custom-price": {
        "component": "Price",
        "content": {
            "$ref": "app:{name}.{vendor}#/definitions/Price"
        }
    },
```

5. Podemos usa-lo diretamente nos blocos ou declara-lo com especificações para determinados casos conforme a necessidade. Ex: 

```json
    "custom-price#product": {
        "props": {
            "blockClass": "my-price-class",
            "showHighPrice": false
        }
    },
```


