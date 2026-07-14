// casos de uso do item

// Cria item com subtotal calculado
export async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => {return price * quantity}
    };
}