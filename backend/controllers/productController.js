const productModel=require('../models/productModel')

// Get products api - /api/v1/poducts
exports.getProducts = async (req,res,next)=>{
    const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await productModel.find(query);
    res.json({
        success:true,
        products
    })
}

// Get single product api - /api/v1/poduct/:id
exports.getSingleProduct = async (req,res,next)=>{
    try {
        const product=await productModel.findById(req.params.id)
        res.json({
            success:true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Id not found"
        })
    }
}