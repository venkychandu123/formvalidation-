function add(){
    var first=parseInt(document.getElementById('fi').value);
    console.log(first);
    
    var second=parseInt(document.getElementById('se').value);
    console.log(second);
   var fi =  document.getElementById('result');
   fi.value=first+second;
     console.log(fi);

if(isNaN(first) || first=="")
{
    alert('invalid input');
}
if(isNaN(second) || second=="")
{
    alert('invalid input');
}
}


function sub(){
    var first=parseInt(document.getElementById('fi').value);
    console.log(first);
    
    var second=parseInt(document.getElementById('se').value);
    console.log(second);
   var fi=  document.getElementById('result').value=(first-second);
     console.log(fi);

if(isNaN(first) || first=="")
{
    alert('invalid input');
}
if(isNaN(second) || second=="")
{
    alert('invalid input');
}
}
function div(){
    var first=parseInt(document.getElementById('fi').value);
    console.log(first);
    
    var second=parseInt(document.getElementById('se').value);
    console.log(second);
   var fi=  document.getElementById('result').value=(first/second);
     console.log(fi);

if(isNaN(first) || first=="")
{
    alert('invalid input');
}
if(isNaN(second) || second=="")
{
    alert('invalid input');
}
}


function mul(){
    var first=parseInt(document.getElementById('fi').value);
    console.log(first);
    
    var second=parseInt(document.getElementById('se').value);
    console.log(second);
   var fi=  document.getElementById('result').value=(first*second);
     console.log(fi);

if(isNaN(first) || first=="")
{
    alert('invalid input');
}
if(isNaN(second) || second=="")
{
    alert('invalid input');
}
}



