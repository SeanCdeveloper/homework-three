document.getElementById("generateBtn").addEventListener("click", generate);

document.getElementById("copyBtn").addEventListener("click", copyPassword);

 /* Generate Random Password */

 function generate(event) {
    var pwRange = prompt("How Many Characters Do You Want In Your Password?");

    // Set Password Length as Value of prompt() Method
    var pwLength = pwRange;

    // Variables Containing Possible Password Values To Use For Password
    var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    // Open-Quotation Value for Storing Generated Password
    var password = "";

    // For Loop Choosing Password Characters Based On Selected Length
    for (var i = 0; i < pwLength; i++) {

        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    // Adding PassWord to input#display Object
    var areYouSure = alert(pwRange);
    document.getElementById("display").value = password;
}

/* Copy to Clipboard Function */
function copyPassword(event) {
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password Copied to ClipBoard");
}