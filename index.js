

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    var email = "help@yourstaffingfirm.on.spiceworks.com";
    window.location.href = "mailto:"+email+"?subject=Subject&body=message%20goes%20here";
    
 
 })