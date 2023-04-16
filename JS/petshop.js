let precios = [];

const consultarApiPrecios = async () =>{
    const data = await fetch ("https://amazon-product-price-data.p.rapidapi.com/product");
    const dataParse = await data.json();
    return dataParse
}

const tests = async () =>{
    console.log(precios.data)


    const preciosData = kmk