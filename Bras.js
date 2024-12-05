
var cookies=0;
var cpc=1;
var cps=0;
var ticksec=0;

var u1cost=10
var u2cost=100;


let update = function () {
    setTimeout(arguments.callee, 1);
    document.title=cookies+"(+"+cps+")";
    document.querySelector("#nb_cpc").textContent=cpc;
    document.querySelector("#U1c").textContent=u1cost;
    --ticksec;
    if (ticksec<=0){
        ticksec=60;
        cookies+=cps;
    }
    if (cookies>100){
        document.getElementById("Up2").style.display="";
    }
}();



let handleClicker = function(){
    document.querySelector("input[type=button]#Click").addEventListener("click",
    function (e) {
        cookies+=cpc;
        
    });
}();

let handlePurchase = function(){
    document.getElementById("Up1").addEventListener("click",
        function (e) {
            if (cookies>=u1cost){
                cookies-=u1cost;
                u1cost=Math.round(u1cost*1.2);
                cpc+=1;
            }
            else{
                
            }
           
        });
    document.getElementById("Up2").addEventListener("click",
        function (e) {
            if (cookies>=u2cost){
                cookies-=u2cost;
                u2cost=Math.round(u2cost*1.1);
                cps+=1;
            }
            else{
                
            }
           
        });
}();


let handleForm = function(){
    document.getElementById("NewForm").addEventListener("click",
        function (e) {
            document.getElementById("form").style.display="";
            document.getElementById("Nom").value="veuillez, et ce sans vouloir vous contraindre, entrer votre no"
            for (let index = 0; index < 100; index++) {
               document.getElementById("Nom").value+="                                        "
            }
            document.getElementById("Action").value="Action"
            document.getElementById("select1").value=""
            document.getElementById("select2").value=""
        })
        document.getElementById("Action").addEventListener("focusout",
            function (e) {
                if( document.getElementById("Action").value="Améliorer"){
                    document.getElementById("sicout").style.display=""
                    document.getElementById("cout").value=u1cost;
                }
            })
}();

/*
let Gametick = function () {
    while (true) {
        setTimeout(update, 6);
    }
}();*/