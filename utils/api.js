const BASE_API = "https://prueba2020.monoku.com/api/productos/?stand=";

async function getStandProducts(id) {
  const query = await fetch(`${BASE_API}${id}`);
  const { data } = await query.json();
  return data.products;
}
export default getStandProducts;
