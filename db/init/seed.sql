CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(40),
  price DECIMAL,
  image_url TEXT
);

INSERT INTO products (product_name, price, image_url)
VALUES ('dummyproduct', 99.99, 'https://3b0b747a213bc007f504-201cd9801cfd61c625913545c1a472ef.ssl.cf1.rackcdn.com/images/products/large_434_1451345931_636947129605.main.jpeg.jpg')