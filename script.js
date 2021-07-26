
function myfunc(){
    var data = document.getElementById('data').value;
    var key = document.getElementById('key').value;
    var output="";
    for(i=0; i<data.length; ++i)
    {
        output += String.fromCharCode(key ^ data.charCodeAt(i));
        }
    document.getElementById('out').innerHTML=output;
    
}



