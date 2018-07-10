var request = require("http").request;

var contentType = "text/html";
var body = "<html>" +
  "<head><title>hi</title></head>" +
  "<body><p>yo</p></body>" +
  "</html>";


var headers = {
  host: "www.google.com",
  port: 80,
  method: "GET",
  headers: {
    "content-type": contentType,
    "content-length": body.length,
    "requested-by": "Request😋"
  }
};

var yolo = request(headers, function (res) {
  res.setEncoding("utf8");
  res.on("data", function (data) {
    console.log("BODY: " + data);
  });

  res.on("end", function () {
    console.error("done!");
  });
});

yolo.end()
