var url= ["https://script.google.com/macros/s/AKfycbxelSTN1z8xtjsGYkjiNjL-DijupbSyxk6fDyzFv2lGGa1qi3qY/exec", "https://script.google.com/macros/s/AKfycbzTWz3l_s9zBAJNBwtCk6vq66gGpM8IrQjPtlw8/exec"];

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
                    alert("發送的訊息是錯的喔！");
                else
                    location.href= respond;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert("抱歉，學姊現在網路不好(;´༎ຶٹ༎ຶ`)\n等一下會重新傳送訊息~~~");
                    Send(data, index+1);
            }
        });
}