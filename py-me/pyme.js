function getServer()
{
    var d1 = new Date();
    var x=d1.toUTCString()
    var num = Number(x.substring(5,7));
    if(num<=15)
    {
        //console.log("https://py-me.herokuapp.com/"+"\n"+x);
        return("https://py-me.herokuapp.com/");
    }
    else
    {
        //console.log("https://py-me-x.herokuapp.com/"+"\n"+x);
        return("https://py-me-x.herokuapp.com/");
    }
}
function connectServer(x)
{
    var link_abcdefghijkl = document.createElement("script");
    link_abcdefghijkl.src = x; 
    document.body.appendChild(link_abcdefghijkl); 
}
