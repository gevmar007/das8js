
let inp1=inp.value;    

inp.oninput=function(){
let p1="<h1>helo world<h1>";
let p2="<h2>helo world<h1>";
let p3="<h3>helo world<h1>";
let p4="<h4>helo world<h1>";
let p5="<h5>helo world<h1>";
let p6="<h6>helo world<h1>";
if(inp.value==0){
    pt.innerHTML=p1;
}
else if(inp.value==2){
    pt.innerHTML=p1+p2;
    
}
else if(inp.value==3){
    pt.innerHTML=p1+p2+p3;
    
}
else if(inp.value==4){
    pt.innerHTML=p1+p2+p3+p4;
    
}
else if(inp.value==5){
    pt.innerHTML=p1+p2+p3+p4+p5;
    
}
else if(inp.value==6){
    pt.innerHTML=p1+p2p3+p4+p5+p6;
    
}
else{
    pt.innerHTML='';
}

}
function f2(){
    d1.innerHTML=(j1.value)
   
}
function f3(){
    let checked_color=s1.value;
    document.body.style.background=checked_color
}
function f4(){
    
    console.log(Math.floor( Math.random()*90+10));
}
function f5(){
    let k1=r1.innerHTML.slice(0,3);
   alert(k1)
}