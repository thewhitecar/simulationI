module.exports = {

    getProducts: (req, res) => {
        let db = req.app.get('db');
        db.getProducts().then(response => {
            res.send(response)
        })},

    createProduct: (req, res) => {
        let db = req.app.get('db');
        let {name, price, image_url} = req.body;
        db.createProduct([name, price, image_url]).then(response => {
            res.send(response)
        })
     },

     updateProduct: (req, res) => {
         let {name, price, image_url} = req.body;
         let {product_id} = req.params;
         let db = req.app.get('db');
         db.updateProduct([name, price, image_url, product_id]).then(response =>{
             res.send(response)
         })
     },

     deleteProduct: (req, res) => {
        let {product_id} = req.params;
        let db = req.app.get('db');
        db.deleteProduct(product_id).then(response =>{
            res.send(response)
        })
     }
}