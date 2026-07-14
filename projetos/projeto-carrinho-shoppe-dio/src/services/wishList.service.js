// lista de desejos

// Adiciona item à lista de desejos
async function addItem(wishlist, item) {
    wishlist.push(item);
}

// Remove item da lista de desejos
async function removeItem(wishlist, itemName) {
    const index = wishlist.findIndex(item => item.name === itemName);
    if (index !== -1) {
        wishlist.splice(index, 1);
    }
}

// Exibe a lista de desejos
async function displayWishlist(wishlist) {
    console.log("Lista de Desejos:\n");
    wishlist.forEach(item => {
        console.log(`- ${item.name}: R$${item.price.toFixed(2)} (Quantidade: ${item.quantity})`);
    });
}


export { addItem, removeItem, displayWishlist };