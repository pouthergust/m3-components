# Toast Custom component 
Componente simples, nativamente não é usado no storefront e tem como proposito dar feedbacks visuais ao usuario, possui três estados: `failed`, `warning` e `success`

![Imagem representativa componente](./docs/demonstration.png)

Tem basicamente dois atores: 
 - showToast
 - ToastProvider

## Implementando o componente no projeto

1. Clone o repo para dentro da pasta `react/components`

2. Após clonar esse componente no projeto, para utiliza-lo precisamos importar o `ToastProvider` e passar como filhos os componentes onde iremos de fato usar o `Toast`.

```js

import { ToastProvider } from "../Toast/context";

function MySampleComponent() {

    return (
        <ToastProvider>
            <Trigger />
            ...
        </ToastProvider>
    );
}

```

3. Feito isso já podemos usar nossa função `showToast` que vem dentro hook custom `useToast`

_**ATENÇÃO:** Somente os filhos de `ToastProvider` podem usar o `useToast`_

```js

import { useToast } from "../../../Toast/context";

function Trigger() {
    const { showToast } = useToast();

    return (
        <>
            <button
                onClick={() =>
                    userIsLoggedIn
                        ? showToast("Sucess! Logged", "success")
                        : showToast("Need to login!", "failed")
                    }
            >
                <span>Is user logged in?</span>
            </button>
        </>
    );
}

```

interface do `showToast`:

```ts
interface ToastCtxValue {
    showToast: (
        /**
         * mensagem que será apresentada 
             */
        text: string, 
        /**
         * controla essencialmente o padrão visual
         * de acordo com o feedback que deve ser 
         * retornado ao usuario
             */
        status: StatusProps, 
        /** 
         * Tempo de duração em segundos 
         * para determinada renderização 
             */
        time?: number
    ) => void
}
```

Por padrão o tempo de apresentação do `Toast` é de 4 segundos, mas podemos alterar o valor padrão para todas renderizações passando o novo valor através da chamada do `ToastProvider`
```js

<ToastProvider durantion={3}>
    ...
</ToastProvider>

```