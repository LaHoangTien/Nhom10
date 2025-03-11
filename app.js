var express = require("express");
var path = require("path");
var app = express();

// Cấu hình view engine
app.set("views", path.join(__dirname, "apps/views"));
app.set("view engine", "ejs");

// Sử dụng router chính
app.use("/", require("./apps/controllers/index"));

// Khởi động server
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
app.use("/static", express.static(__dirname + "/public"));
app.use("/partical", express.static(__dirname + "/views/partical"));