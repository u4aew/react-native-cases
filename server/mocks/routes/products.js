const PRODUCTS = [
  {
    key: 'a',
    id: 1,
    img: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d',
    title: 'Cola Zero',
    volume: '500 ml',
    price: '5 usd'
  },
  {
    key: 'b',
    id: 2,
    img: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d',
    title: 'Cola Zero',
    volume: '1000 ml',
    price: '7 usd'
  },
  {
    key: 'c',
    id: 3,
    img: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d',
    title: 'Cola Zero',
    volume: '2000 ml',
    price: '10 usd'
  }
];

const ALL_PRODUCTS = [
  ...PRODUCTS,
  {
    key: 'd',
    id: 4,
    img: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d',
    title: 'Cola Zero',
    volume: '4000 ml',
    price: '15 usd'
  }
];

module.exports = [
  {
    id: "get-products", // route id
    url: "/api/products", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_PRODUCTS, // body to send
        },
      },
      {
        id: "all", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_PRODUCTS, // body to send
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-product", // route id
    url: "/api/products/:id", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: PRODUCTS[0], // body to send
        },
      },
      {
        id: "id-3", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: ALL_PRODUCTS[2], // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const userId = req.params.id;
            const user = PRODUCTS.find((userData) => userData.id === Number(userId));
            if (user) {
              res.status(200);
              res.send(user);
            } else {
              res.status(404);
              res.send({
                message: "User not found",
              });
            }
          },
        },
      },
    ],
  },
];
