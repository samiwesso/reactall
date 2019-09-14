// Hämta alla produkter
exports.getProducts = function(req, res) {
    var products = [
        {id: 1, thumbnail: "50", img: "120", name: "Produktens namn 1", price: 100, rating: 1, category: "Produktkategori"},
        {id: 2, thumbnail: "50", img: "150", name: "Produktens namn 2", price: 200, rating: 2, category: "Produktkategori"},
        {id: 3, thumbnail: "50", img: "150", name: "Produktens namn 3", price: 300, rating: 3, category: "Produktkategori"},
        {id: 4, thumbnail: "50", img: "150", name: "Produktens namn 4", price: 400, rating: 4, category: "Produktkategori"},
        {id: 5, thumbnail: "50", img: "150", name: "Produktens namn 5", price: 500, rating: 5, category: "Produktkategori"},
        {id: 6, thumbnail: "50", img: "150", name: "Produktens namn 6", price: 100, rating: 1, category: "Produktkategori"},
        {id: 7, thumbnail: "50", img: "150", name: "Produktens namn 7", price: 200, rating: 2, category: "Produktkategori"},
        {id: 8, thumbnail: "50", img: "150", name: "Produktens namn 8", price: 300, rating: 3, category: "Produktkategori"},
        {id: 9, thumbnail: "50", img: "150", name: "Produktens namn 9", price: 400, rating: 4, category: "Produktkategori"},
        {id: 10, thumbnail: "50", img: "150", name: "Produktens namn 10", price: 500, rating: 5, category: "Produktkategori"},
        {id: 11, thumbnail: "50", img: "150", name: "Produktens namn 11", price: 100, rating: 1, category: "Produktkategori"},
        {id: 12, thumbnail: "50", img: "150", name: "Produktens namn 12", price: 200, rating: 2, category: "Produktkategori"},
        {id: 13, thumbnail: "50", img: "150", name: "Produktens namn 13", price: 300, rating: 3, category: "Produktkategori"},
        {id: 14, thumbnail: "50", img: "150", name: "Produktens namn 14", price: 400, rating: 4, category: "Produktkategori"},
        {id: 15, thumbnail: "50", img: "150", name: "Produktens namn 15", price: 500, rating: 5, category: "Produktkategori"},
        {id: 16, thumbnail: "50", img: "150", name: "Produktens namn 16", price: 100, rating: 1, category: "Produktkategori"},
        {id: 17, thumbnail: "50", img: "150", name: "Produktens namn 17", price: 200, rating: 2, category: "Produktkategori"},
        {id: 18, thumbnail: "50", img: "150", name: "Produktens namn 18", price: 300, rating: 3, category: "Produktkategori"},
        {id: 19, thumbnail: "50", img: "150", name: "Produktens namn 19", price: 400, rating: 4, category: "Produktkategori"},
        {id: 20, thumbnail: "50", img: "150", name: "Produktens namn 20", price: 500, rating: 5, category: "Produktkategori"}
    ];

    return res.status(200).json(products);
}

// Hämta en specifik produkt
exports.getProduct = function(req, res) {
    var products = [
        {id: 1, thumbnail: "50", img: "150", name: "Produktens namn", price: 100, rating: 1, category: "Produktkategori"}
    ];

    return res.status(200).json(products);
}