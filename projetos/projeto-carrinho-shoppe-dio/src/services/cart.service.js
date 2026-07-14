// Quais ações meu carrinho pode fazer?
// Adicionar item
// Remover item
// deletar item
// Listar itens
// Limpar carrinho
// Calcular total

const cart = [];

async function addItem(userCart, item) {
    userCart.push(item);
}

async function removeItem(userCart, item) {
    const indexfound = userCart.findIndex((p) => p.name === item.name);

    if (indexfound == -1) {
        console.log("Item não encontrado no carrinho.");
        return;
    }

    if(userCart[indexfound].quantity > 1) {
        userCart[indexfound].quantity-=1;
        return;
    }

    if(userCart[indexfound].quantity == 1) {
        userCart.splice(indexfound, 1);
        return;
    }

}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name.toUpperCase() === name.toUpperCase());
    if (index !== -1) {
        userCart.splice(index, 1);
        return;
    }
}

async function listItems(userCart) {
    return userCart.map((item) => {
        return {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.quantity * item.price
        };
    });
}

async function clearCart(userCart) {
    userCart.length = 0;
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function displayCart(userCart) {
    console.log("Itens no carrinho:\n");
    const items = await listItems(userCart);
    items.forEach((item) => {
        console.log(`- ${item.name} (Preço: R$${item.price}, Quantidade: ${item.quantity}, Subtotal: R$${item.subtotal})`);
    });

    const total = await calculateTotal(userCart);
    console.log(`\nTotal do carrinho: R$${total.toFixed(2)}\n`);
}

export { addItem, removeItem, deleteItem, listItems, clearCart, calculateTotal, displayCart };
