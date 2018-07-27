UPDATE products
SET name = $1, price = $2, image_url =$3
WHERE product_id = $4;

SELECT * FROM products;