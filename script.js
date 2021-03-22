var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

var things = [];

function row(data) {
  var that = this;
  this.value = data.value;
 if (data == 3 || data == 4) {
    this.message = "is below 10.";
   
  } else if (data == "Jerry" || data == "Sandy" || data == 12) {
    this.message = "is normal.";
    
  // } else if (data == "Sandy") {
  //   this.message = "is normal.";
    
   // } else if (data == 4) {
   //  this.message = "is below 10.";
     
  } else if (data == "Pepper" || data == "Jocastah") {
    this.message = "is more than 5 characters.";
    
  } else if (data == 15) {
    this.message = "is exactly 15.";
    
  // } else if (data == "Jocastah") {
  //   this.message = "is more than 5 characters.";
    
  // } else if (data == 12) {
  //   this.message = "is normal.";
  }
  
  
    // var str = "Hello World!";
    //  var n = str.length;

  
  this.color = "The value is " + data + " and " + this.message;
  
  this.ele = document.createElement("p");
  this.eleColor = document.createElement("p");
  this.eleColor.innerHTML = this.color;
  this.eleValue = document.createElement("p");
  this.ele.addEventListener("click", function () {
    that.colorChanger();
  });
  
  
  this.ele.appendChild(this.eleColor);
  this.ele.appendChild(this.eleValue);
  document.body.appendChild(this.ele);
}

row.prototype.colorChanger = function () {
  this.eleColor.style.color = "blue";
};

for (var i = 0; i < stringers.length; i++) {
  things.push(new row(stringers[i]));
}