var url= ["https://script.google.com/macros/s/AKfycbyrbYTKmiECXi75R7VHGu94NC_WTjGAzT8evdjMNZmF19jGACKI/exec", "https://script.google.com/macros/s/AKfycbx7lPujxZ3yqjr2UGwOM7xVvlcZZOYJd-Hkm-bsGw/exec"];

function Confirm(){
    var message= document.getElementById("message").value;
    document.getElementById("message").value= "";
    Send(message, 0);
}

function Send(message, index){
    $.ajax({
            type:'get',
            cache: false,
            timeout: 5000,
            url: url[index%2],
            data:  {
                'message' : message
            },
            datatype:'json',
            success: function(respond){
                if(respond=="WA")
                    alert("訊息錯誤");
                else
                    location.href= respond;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert("執行逾時，將重新傳送訊息");
                    Send(data, index+1);
            }
        });
}