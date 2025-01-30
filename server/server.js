app.get("/", async (req, res) => {
const clientId = process.env.PAYPAL_CLIENT_ID;
res.render("checkout", {
clientId,
});
});
import * as paypal from "./paypal-api.js";
// create order
app.post("/api/orders", async (req, res) => {
  const order = await paypal.createOrder(req.body.paymentSource);
  res.json(order);
});



const app = express();

// ルーティングなどの設定はここにあるはず
// app.get(...) とか app.use(...) など

// ここでモジュールをエクスポート (serverless function 用)
module.exports = app;
