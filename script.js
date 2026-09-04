async function getProducts() {

    const loading =
        document.getElementById("loading");

    const productsDiv =
        document.getElementById("products");

    try {

        loading.textContent = "Loading...";

        const response =
            await fetch("https://dummyjson.com/products");

        const data =
            await response.json();

        const products =
            data.products.slice(0, 5);

        productsDiv.innerHTML =
            products.map(product => {

                return `
                    <h2>${product.title}</h2>
                    <p>Price: $${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <hr>
                `;

            }).join("");


        loading.textContent = "";

    } catch (error) {

        loading.textContent =
            "Unable to load products.";

        console.log(error);
    }
}