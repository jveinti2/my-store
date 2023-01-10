const faker = require('faker');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10), // parse con base 10
        image: faker.image.imageUrl(),
      });
    }
  }

  create() {}
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((el) => el.id === id);
  }
  update() {}
  delete() {}
}
module.exports = ProductsServices;
