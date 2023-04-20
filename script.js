document.getElementById("u1").addEventListener("input",function(){kilo(this.value)});
document.getElementById("u2").addEventListener("input",function(){pou(this.value)});
function kilo(d)
        {
       let a=d*0.454;
       document.getElementById("u2").value=a.toFixed(2)
        }
function pou(d)
        {
        let pounds=d/0.454;
        document.getElementById("u1").value=pounds.toFixed(2)         
       }

