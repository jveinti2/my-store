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

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }
  async findOne(id) {
    const name = this.getTotal();
    return this.products.find((el) => el.id === id);
  }
  async update(id, change) {
    const i = this.products.findIndex((el) => el.id === id);
    if (i === -1) {
      throw new Error('Product no found');
    }
    const product = this.products[i];
    this.products[i] = {
      ...product,
      ...change,
    };
    return this.products[i];
  }

  async delete(id) {
    const i = this.products.findIndex((el) => el.id === id);
    if (i === -1) {
      throw new Error('Product no found');
    }
    this.products.splice(i, 1);
    return { id };
  }
}
module.exports = ProductsServices;
