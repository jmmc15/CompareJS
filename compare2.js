

function compareNums(){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;

  if(parseInt(a)>parseInt(b)){
    alert("The first number " + a + " is higher");
  }else if(parseInt(b)>parseInt(a)){
    alert("The second number " + b + " is higher");
  }else if(parseInt(b)===parseInt(a)){
    alert("The two numbers are equal.");
  }
  else if(a == "" || b == "" ){
    alert("Enter values!");
  }
}
