const app = express();

// ルーティングなどの設定はここにあるはず
// app.get(...) とか app.use(...) など

// ここでモジュールをエクスポート (serverless function 用)
module.exports = app;
