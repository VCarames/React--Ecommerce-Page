const JSON_URL = "/data/products.json";

export async function getProduct() {
  try {
    const res = await fetch(JSON_URL);

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
