import express from  'express';
import { createProduct, getProducts } from '../controllers/productController.js';


const productRouter = express.Router();
productRouter.post("/", createProduct)
productRouter.get("/", getProducts)

productRouter.get("/:productId", (req,res)=>{
    res.json({
        message : "product details for " + req.params.productId
    })
})

productRouter.get("/featured", (req,res)=>{

    console.log("Featured products request triggered")
    res.json({
        message : "Featured products"
    })
})

productRouter.delete("/:productId", (req,res)=>{

    console.log(req.params.productId)
    console.log("Delete request triggered")
})

export default productRouter;

