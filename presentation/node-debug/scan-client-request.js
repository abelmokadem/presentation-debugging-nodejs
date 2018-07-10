var request = require("request");

var contentType = "text/html";
var body = "<html>" +
  "<head><title>hi</title></head>" +
  "<body><p>yo</p></body>" +
  "</html>";


var headers = {
  uri: "http://www.google.com",
  method: "GET",
  headers: {
    "content-type": contentType,
    "content-length": body.length,
    "requested-by": "Request😋"
  }
};

var yolo = request(headers, function (error, response) {
  console.log(error, (response && response.body));
});

yolo.end()
