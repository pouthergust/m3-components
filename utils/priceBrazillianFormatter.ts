/**
 * Função com o objeto de formatar o valor desejado para real.
 * - Ex: 12.34 -> R$ 12,34 / 1234 -> R$ 1.234,00
 *
 * @param {number} value - Numero à ser formatado.
 * @returns {string} Retorna o numero formatado.
 */

const priceBrazillianFormatter = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
};

export default priceBrazillianFormatter;
