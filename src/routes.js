const {
  storeBooksHandler,
  getAllBooksHandler,
  getDetailBookHandler,
  updateByIdBookHandler,
  deleteByIdBookHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: storeBooksHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getDetailBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateByIdBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteByIdBookHandler,
  },
];

module.exports = routes;
