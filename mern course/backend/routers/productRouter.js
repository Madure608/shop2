import express from  'express';
import { createProduct, getProducts } from '../controllers/productController.js';


const productRouter = express.Router();
productRouter.post("/", createProduct)
productRouter.get("/", getProducts)
productRouter.delete("/:productId", (req,res)=>{
    console.log("Delete request triggered")
})

export default productRouter;

