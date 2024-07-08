const express = require('express')
const cors = require('cors')
const userController = require('./controller/user');
const productController = require('./controller/product');
const { upload } = require('./utils/file');

const app = express()
const port = 5000

app.use(cors());
app.use(express.static('upload'))
// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (from forms)
app.use(express.urlencoded({ extended: true }));

app.post('/signup', userController.signup)
app.post('/login', userController.login)
app.post('/product', upload.single('image'), productController.createProduct)
app.get('/product', productController.listProduct)
app.post('/search-product', productController.getProduct)
app.delete('/product', productController.deleteProduct)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

