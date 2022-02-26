const {faker} = require('@faker-js/faker');
const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({filename: 'data.json'})
    ]
})

const transformDate = (date) => {
    return `${date.getFullYear()}-${transformDayAndMonth(date.getMonth()+1)}-${transformDayAndMonth(date.getDate())}`
}

const transformDayAndMonth = (number) => {
    if(number<10) return '0'+number;
    else return number;
}

const pickRandomUser = () => {
    return users[Math.floor(Math.random()*(users.length))].id;
}

const pickRandomProduct = () => {
    return products[Math.floor(Math.random()*(products.length))].id;
}

const pickRandomProductType = () => {
    return productTypes[Math.floor(Math.random()*(productTypes.length))];
}

const pickRandomCart = () => {
    return carts[Math.floor(Math.random()*(carts.length))].id;
}

const users = [], products = [], vouchers = [], cartProducts = [], carts = [];

// fake user
for(let i=0; i<10; i++){
    let name = faker.name.findName();
    let newUser = {
        name ,
        username: faker.lorem.word(10),
        address: faker.address.streetAddress(true),
        avatar: faker.image.imageUrl(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        created_date:transformDate(new Date()),
        last_updated: transformDate(new Date()),
        locked: false,
        id: faker.datatype.uuid()
    }
    users.push(newUser);
}

// logger.info({users});

// fake product
const productTypes = ['phone','ipad','accessory','charger','headphone','micro','bluetooth']
for(let i=0; i<100; i++){
    let newProduct = {
        title: faker.commerce.productName(),
        price: faker.commerce.price(100, 1000),
        seller: pickRandomUser(),
        images: [faker.image.imageUrl(),faker.image.imageUrl(),faker.image.imageUrl(),faker.image.imageUrl()],
        description: faker.lorem.paragraphs(),
        created_date: transformDate(new Date()),
        last_updated: transformDate(new Date()),
        type: pickRandomProductType(),
        stocks: faker.datatype.number(100),
        colors: [faker.commerce.color(),faker.commerce.color(),faker.commerce.color(),faker.commerce.color(),],
        id: faker.datatype.uuid()
    }
    products.push(newProduct);
}
// fake voucher
for(let i=0; i<20; i++){
    let newVoucher = {
        code: faker.random.word(),
        amount: faker.datatype.number(20),
        product: pickRandomProduct(),
        start_date: transformDate(new Date()),
        end_date: transformDate(new Date(new Date().getTime()+Math.random()*10000000000+1000000000)),
        created_by: pickRandomUser(),
        created_date:transformDate(new Date()),
        id: faker.datatype.uuid()
    }
    vouchers.push(newVoucher);
}

// fake Cart
for(let i=0; i<users.length; i++){
    let newCart = {
        user: users[i].id,
        current_total: faker.commerce.price(100000000),
        last_updated: transformDate(new Date()),
        id: faker.datatype.uuid()
    }
    carts.push(newCart);
}

// fake cartProduct
for(let i=0; i<50; i++){
    let newCartProduct = {
        product: pickRandomProduct(),
        amount: faker.datatype.number(5),
        cart: pickRandomCart(),
        id: faker.datatype.uuid()
    }
    cartProducts.push(newCartProduct);
}

logger.info({
    users,
    products,
    vouchers,
    cartProducts,
    carts
})
