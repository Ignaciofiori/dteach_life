const mercadopago = require("mercadopago")

const paymentController ={
 createOrder: async(req,res)=>{

    mercadopago.configure({
        access_token: 'TEST-6164150913832224-061210-9016ed1f690cbd90bfecf3b7e94c81c2-1397377224'
    });
    const result = await mercadopago.preferences.create({
        items:[{
            title:"laptop lenovo",
            unit_price:500,
            currency_id:"ARS",
            quantity:1
        }
         ]
        ,
        back_urls:{
            success: "http://localhost:3030/payment/success",
            failure:"http://localhost:3030/payment/failure",
            pending: "http://localhost:3030/payment/pending"
        },

        notification_url:"https://2668-181-167-19-243.ngrok-free.app/payment/webhook"
    })

    console.log(result.body)
    
},
recieveWebhook: async (req,res)=>{
const payment = req.query
console.log(payment)

try{
if(payment.type == "payment"){
   const data = await mercadopago.payment.findById(payment["data.id"])
   console.log(data)
   //GUARDAR EN BASE DE DATOS LOS DATOS DE LA COMPRA
}
res.sendStatus(203)
}catch(error){
    console.log(error);
    return res.sendStatus(500).json({error:error.message})

}
}
}


module.exports= paymentController