function validateForm(){
  var username = document.getElementById("username.txt").value
  var email = document.getElementById("email.txt").value
  var password = document.getElementById("password.txt").value
  var tnc = document.getElementById("tnc").checked
  var errorMsg = document.getElementById("errorMsg").value

  if (username == ""){
      alert("username must be filled")

  }
  else if (username.length < 5){
      alert("Username atleast must be at 5 characters")
  }
  else if (email.indexOf('@') == -1){
      alert("Email must be contain @")
  }
  else if (!checkNum (notelp)){
      alert("Phone number invalid")
  }
  else if(password.length <= 6){
      alert("password must be more than 6 characters")
  }
  else if (!tnc){
      alert("tnc must be checked")
  
  }
  else{
      alert("Registration Sucess!")
      errorMsg.innerhtml = ""

  }
}