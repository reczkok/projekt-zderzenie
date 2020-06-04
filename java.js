

/*var particle = [[id:1, xPos:20, yPos:20, x:5, y:0],[id:2, xPos:200, yPos:200, x:-5, y:0]]
document.getElementById("particle")
*/

const targetDiv = document.getElementById('svg-target');
const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgNode.setAttributeNS(null, 'viewBox', '0 0 100 50');
targetDiv.appendChild(svgNode);

//pomocnicze
var recent = 1;
var vxpop;
var vypop;
var vx2pop;
var vy2pop;
var relpos;
var relposx;
var reset_request=0;
var animon=0;


//kulka 1
var m=1;
var x=7.3;
var y=25;
var vx=-0.4;
var vy=0;
var r=3;
var vxsign=0;
var vysign=0;

//kulka 2
var m2=1;
var x2=80;
var y2=25;
var vx2=0;
var vy2=0;
var r2=2;
var vxsign2=0;
var vysign2=0;

//ss



function reset_button(){
    if(animon){
    reset_request=1;
    x = parseFloat(document.getElementById("x").value);
    y = parseFloat(document.getElementById("y").value);
    vx=0;
    vy=0;
    m = parseFloat(document.getElementById("m").value);
    m2 = parseFloat(document.getElementById("m2").value);
    r = parseFloat(document.getElementById("r").value);
    circleNode.setAttributeNS(null, 'r', r);
    r2 = parseFloat(document.getElementById("r2").value);
    circleNode2.setAttributeNS(null, 'r', r2);
    x2=80;
    y2=25;
    vx2=0;
    vy2=0;
    circleNode.setAttributeNS(null, 'cx', x);
    circleNode.setAttributeNS(null, 'cy', y);
    enable_sliders();
    }
}

function disable_sliders(){
    document.getElementById("x").disabled = true;
    document.getElementById("y").disabled = true;
    document.getElementById("vx").disabled = true;
    document.getElementById("vy").disabled = true;
    document.getElementById("m").disabled = true;
    document.getElementById("m2").disabled = true;
    document.getElementById("r").disabled = true;
    document.getElementById("r2").disabled = true;
}

function enable_sliders(){
    document.getElementById("x").disabled = false;
    document.getElementById("y").disabled = false;
    document.getElementById("vx").disabled = false;
    document.getElementById("vy").disabled = false;
    document.getElementById("m").disabled = false;
    document.getElementById("m2").disabled = false;
    document.getElementById("r").disabled = false;
    document.getElementById("r2").disabled = false;
}



function start(){
    if(!animon){
    x = parseFloat(document.getElementById("x").value);
    y = parseFloat(document.getElementById("y").value);
    vx = parseFloat(document.getElementById("vx").value);
    vy = parseFloat(document.getElementById("vy").value);
    m = parseFloat(document.getElementById("m").value);
    m2 = parseFloat(document.getElementById("m2").value);
    r = parseFloat(document.getElementById("r").value);
    circleNode.setAttributeNS(null, 'r', r);
    r2 = parseFloat(document.getElementById("r2").value);
    circleNode2.setAttributeNS(null, 'r', r2);
    circleNode.setAttributeNS(null, 'cx', x);
    circleNode.setAttributeNS(null, 'cy', y);
    animate();
    disable_sliders();
    }
}

function getx(){
    if(!animon){
    x = parseFloat(document.getElementById("x").value);
	document.getElementById("xV").innerHTML = x;
    }
}

function gety(){
    if(!animon){
    y = parseFloat(document.getElementById("y").value);
	document.getElementById("yV").innerHTML = y;
    }
}

function getvx(){
    if(!animon){
    vx = parseFloat(document.getElementById("vx").value);
	document.getElementById("vxV").innerHTML = vx;
    }
}

function getvy(){
    if(!animon){
    vy = parseFloat(document.getElementById("vy").value);
	document.getElementById("vyV").innerHTML = vy;
    }
}

function getm(){
    if(!animon){
    m = parseFloat(document.getElementById("m").value);
	document.getElementById("mV").innerHTML = m;
    }
}

function getm2(){
    if(!animon){
    m2 = parseFloat(document.getElementById("m2").value);
	document.getElementById("m2V").innerHTML = m2;
    }
}

function getr(){
    if(!animon){
    r = parseFloat(document.getElementById("r").value);
	document.getElementById("rV").innerHTML = r;
    }
}

function getr2(){
    if(!animon){
    r2 = parseFloat(document.getElementById("r2").value);
	document.getElementById("r2V").innerHTML = r2;
    }
}


function domyslne(){
    
    document.getElementById("x").value = "7.3";
    //x = parseFloat(document.getElementById("x").value);
    //document.getElementById("xV").innerHTML = x;
	document.getElementById("y").value = "25";
    //y = parseFloat(document.getElementById("y").value);
    //document.getElementById("yV").innerHTML = y;
	document.getElementById("vx").value = "1";
    //vx = parseFloat(document.getElementById("vx").value);
    //document.getElementById("vxV").innerHTML = vx;
	document.getElementById("vy").value = "0";
    //vy = parseFloat(document.getElementById("vy").value);
    //document.getElementById("vyV").innerHTML = vy;
	document.getElementById("m").value = "1";
    //m = parseFloat(document.getElementById("m").value);
    //document.getElementById("mV").innerHTML = m;
	document.getElementById("m2").value = "1";
    //m2 = parseFloat(document.getElementById("m2").value);
    //document.getElementById("m2V").innerHTML = m2;
	document.getElementById("r").value = "1";
    //r = parseFloat(document.getElementById("r").value);
    //document.getElementById("rV").innerHTML = r;
	document.getElementById("r2").value = "1";
    //r2 = parseFloat(document.getElementById("r2").value);
    //document.getElementById("r2V").innerHTML = r2;
    circleNode.setAttributeNS(null, 'r', r);
    circleNode2.setAttributeNS(null, 'r', r2);
    reset_button();
}

function domyslneol(){
    document.getElementById("x").value = "7.3";
    x = parseFloat(document.getElementById("x").value);
    document.getElementById("xV").innerHTML = x;
	document.getElementById("y").value = "25";
    y = parseFloat(document.getElementById("y").value);
    document.getElementById("yV").innerHTML = y;
	document.getElementById("vx").value = "1";
    vx = parseFloat(document.getElementById("vx").value);
    document.getElementById("vxV").innerHTML = vx;
	document.getElementById("vy").value = "0";
    vy = parseFloat(document.getElementById("vy").value);
    document.getElementById("vyV").innerHTML = vy;
	document.getElementById("m").value = "1";
    m = parseFloat(document.getElementById("m").value);
    document.getElementById("mV").innerHTML = m;
	document.getElementById("m2").value = "1";
    m2 = parseFloat(document.getElementById("m2").value);
    document.getElementById("m2V").innerHTML = m2;
	document.getElementById("r").value = "1";
    r = parseFloat(document.getElementById("r").value);
    document.getElementById("rV").innerHTML = r;
	document.getElementById("r2").value = "1";
    r2 = parseFloat(document.getElementById("r2").value);
    document.getElementById("r2V").innerHTML = r2;
    circleNode.setAttributeNS(null, 'r', r);
    circleNode2.setAttributeNS(null, 'r', r2);
}


//animacja
function animate() {
    window.requestAnimationFrame(draw);
}
/*
        vx=((Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*(Math.abs(y2-y)/(r+r2)))*((x2-x)/(r+r2)));
        vy=((Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*(Math.abs(y2-y)/(r+r2)))*((y2-y)/(r+r2)));
        
        vx2=(m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*Math.abs(x2-x)/(r+r2))/m)*((x2-x)/(r+r2));
        vy2=(m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*Math.abs(x2-x)/(r+r2))/m)*((y2-y)/(r+r2))
*/

function draw() {
    animon=1;
    x+=vx;
    y+=vy;
    x2+=vx2;
    y2+=vy2;
    circleNode.setAttributeNS(null, 'cx', x);
    circleNode.setAttributeNS(null, 'cy', y);
    circleNode2.setAttributeNS(null, 'cx', x2);
    circleNode2.setAttributeNS(null, 'cy', y2);
    
    if(intersect(circleNode, circleNode2)&&recent){
        
        var p=Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2))*m;
        vxpop=vx;
        vypop=vy;
        vx2pop=vx2;
        vy2pop=vy2;
        
        if(x-x2<0){
            relposx=1;
        }
        else{
            relposx=-1;
        }
        if(y-y2<0){
            relpos=1;
        }
        else{
            relpos=-1;
        }
        if(Math.sign(vx)===0 || Math.sign(vx)===-0){
            vxsign = 1;
        }
        else{
            vxsign = Math.sign(vx);
        }
        
         if(Math.sign(vy)===0 || Math.sign(vy)===-0){
            vysign = 1;
        }
        else{
            vysign = Math.sign(vy);
        }
        
        if(Math.sign(vy2)===0 || Math.sign(vy2)===-0){
            vysign2 = 1;
        }
        else{
            vysign2 = Math.sign(vy2);
        }
        
        if(Math.sign(vx2)===0 || Math.sign(vx2)===-0){
            vxsign2 = 1;
        }
        else{
            vxsign2 = Math.sign(vx2);
        }
        /*
        vx=((vx*Math.abs((y2-y)/(r+r2)))-(vy*Math.abs((x2-x)/(r+r2))))*Math.abs((y2-y)/(r+r2));
        vy=-relpos*((vx*Math.abs((y2-y)/(r+r2)))-(vy*Math.abs((x2-x)/(r+r2))))*Math.abs((x2-x)/(r+r2));
        */
        
        vx=relposx*(p/m)*Math.abs((y2-y)/(r+r2))*Math.abs((y2-y)/(r+r2));
        vy=-relpos*(p/m)*Math.abs((y2-y)/(r+r2))*Math.abs((x2-x)/(r+r2));
        
        vy2=relpos*p*Math.abs((x2-x)/(r+r2))*Math.abs((y2-y)/(r+r2))/m2;
        vx2=relposx*p*Math.abs((x2-x)/(r+r2))*Math.abs((x2-x)/(r+r2))/m2;
        
        /*
        vy2=m/m2*relpos*((vx*Math.abs((x2-x)/(r+r2)))+(vy*Math.abs((y2-y)/(r+r2))))**Math.abs((x2-x)/(r+r2));
        vx2=m/m2*((vx*Math.abs((x2-x)/(r+r2)))+(vy*Math.abs((y2-y)/(r+r2))))**Math.abs((y2-y)/(r+r2))
        */
        /*
        vx=
        vxsign*((Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2))*Math.abs((y2-y)/(r+r2)))*Math.abs((y2-y)/(r+r2))) + 
        vxsign2*(m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*Math.abs((x2-x)/(r+r2)))*Math.abs((x2-x)/(r+r2)))/m;
        
        vy=
        -relpos*((Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2))*Math.abs((y2-y)/(r+r2)))*Math.abs((x2-x)/(r+r2))) + 
        -relpos*(m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*Math.abs((y2-y)/(r+r2)))*Math.abs((x2-x)/(r+r2)))/m;
        
        
        vx2=
        vxsign*((m*(Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2))*Math.abs(x2-x)/(r+r2)))*Math.abs((x2-x)/(r+r2)))/m2 + 
        vxsign2*((Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*Math.abs((y2-y)/(r+r2)))*Math.abs((y2-y)/(r+r2)));
        
        vy2=
        relpos*((m*(Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2))*Math.abs(x2-x)/(r+r2)))*Math.abs((y2-y)/(r+r2)))/m2 + 
        relpos*((Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))*Math.abs((y2-y)/(r+r2)))*Math.abs((x2-x)/(r+r2)));
        */
        
        /*
        if((((m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))))+(m*(Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2)))))-((m2*(Math.sqrt(Math.pow(vy2pop,2)+Math.pow(vx2pop,2))))+(m*(Math.sqrt(Math.pow(vypop,2)+Math.pow(vxpop,2))))))>0.0001){
            while((((m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))))+(m*(Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2)))))-((m2*(Math.sqrt(Math.pow(vy2pop,2)+Math.pow(vx2pop,2))))+(m*(Math.sqrt(Math.pow(vypop,2)+Math.pow(vxpop,2))))))>0.0001){
                vx-=vxsign*0.00001*Math.abs((y2-y)/(r+r2));
                vy-=vysign*0.00001*Math.abs((x2-x)/(r+r2));
                vx2-=vxsign2*0.00001*Math.abs((y2-y)/(r+r2));
                vy2-=vysign2*0.00001*Math.abs((x2-x)/(r+r2));
            }
        }
        if((((m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))))+(m*(Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2)))))-((m2*(Math.sqrt(Math.pow(vy2pop,2)+Math.pow(vx2pop,2))))+(m*(Math.sqrt(Math.pow(vypop,2)+Math.pow(vxpop,2))))))<0.0001){
            while((((m2*(Math.sqrt(Math.pow(vy2,2)+Math.pow(vx2,2))))+(m*(Math.sqrt(Math.pow(vy,2)+Math.pow(vx,2)))))-((m2*(Math.sqrt(Math.pow(vy2pop,2)+Math.pow(vx2pop,2))))+(m*(Math.sqrt(Math.pow(vypop,2)+Math.pow(vxpop,2))))))<0.0001){
                vx+=vxsign*0.00001*Math.abs((y2-y)/(r+r2));
                vy+=vysign*0.00001*Math.abs((x2-x)/(r+r2));
                vx2+=vxsign2*0.00001*Math.abs((y2-y)/(r+r2));
                vy2+=vysign2*0.00001*Math.abs((x2-x)/(r+r2));
            }
        }
        */
        
        
        
        recent = 0;
            
    }
    
    /*if(!recent&&!intersect(circleNode, circleNode2)){
        recent = 1;
    }*/
    
    if(intersectRect(circleNode,rectNode)||intersectRect(circleNode,rectNode4)){
        vx=-vx;
    }
    if(intersectRect(circleNode2,rectNode)||intersectRect(circleNode2,rectNode4)){
        vx2=-vx2;
    }
    if(intersectRect(circleNode,rectNode2)||intersectRect(circleNode,rectNode3)){
        vy=-vy;
    }
    if(intersectRect(circleNode2,rectNode2)||intersectRect(circleNode2,rectNode3)){
        vy2=-vy2;
    }
    
    var frameID = window.requestAnimationFrame(draw);
    if(reset_request){
        animon=0;
        reset_request=0;
        recent =1;
        window.cancelAnimationFrame(frameID);
        
        return 0;
    }
    
   
}

//deklaracje kształtów
circleNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circleNode.setAttributeNS(null, 'cx', x);
circleNode.setAttributeNS(null, 'cy', y);
circleNode.setAttributeNS(null, 'r', r);
circleNode.setAttributeNS(null, 'fill', 'rgb(134, 139, 157)');
svgNode.appendChild(circleNode);

const circleNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circleNode2.setAttributeNS(null, 'cx', x2);
circleNode2.setAttributeNS(null, 'cy', y2);
circleNode2.setAttributeNS(null, 'r', r2);
circleNode2.setAttributeNS(null, 'fill', 'rgb(134, 139, 157)');
svgNode.appendChild(circleNode2);

const rectNode = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rectNode.setAttributeNS(null, 'height', '50');
rectNode.setAttributeNS(null, 'width', '1');
rectNode.setAttributeNS(null, 'x', '0');
rectNode.setAttributeNS(null, 'y', '0');
rectNode.setAttributeNS(null, 'fill', 'rgb(134, 139, 157)');
svgNode.appendChild(rectNode);

const rectNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rectNode2.setAttributeNS(null, 'height', '1');
rectNode2.setAttributeNS(null, 'width', '99');
rectNode2.setAttributeNS(null, 'x', '0');
rectNode2.setAttributeNS(null, 'y', '0');
rectNode2.setAttributeNS(null, 'fill', 'rgb(134, 139, 157)');
svgNode.appendChild(rectNode2);

const rectNode3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rectNode3.setAttributeNS(null, 'height', '1');
rectNode3.setAttributeNS(null, 'width', '99');
rectNode3.setAttributeNS(null, 'x', '0');
rectNode3.setAttributeNS(null, 'y', '49');
rectNode3.setAttributeNS(null, 'fill', 'rgb(134, 139, 157)');
svgNode.appendChild(rectNode3);

const rectNode4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rectNode4.setAttributeNS(null, 'height', '50');
rectNode4.setAttributeNS(null, 'width', '1');
rectNode4.setAttributeNS(null, 'x', '99');
rectNode4.setAttributeNS(null, 'y', '0');
rectNode4.setAttributeNS(null, 'fill', 'rgb(134, 139, 157)');
svgNode.appendChild(rectNode4);

function intersectRect(r1, r2) {
    var r1 = r1.getBoundingClientRect();
    var r2 = r2.getBoundingClientRect();

  return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

function intersect(o1, o2){
    if((Math.pow(y2-y,2)+Math.pow(x2-x,2)) < Math.pow(r+r2,2)){
        return 1;
    }
    else{
        return 0;
    }    
}











