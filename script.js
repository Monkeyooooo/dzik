let i = 0;
let licznik=0;
var guzik = false;
let licznikp= 0;
let przerwa;
let p1=document.getElementById("licznik");
const but = document.getElementById("przycisk");
let wynik = document.getElementById("wynik");
function dzik()
{
    i++;
    console.log(i);
    p1.textContent=i;
    if((i-1)%7==0 || (i-1).toString().includes('7')==true)
    {
        if(licznikp!=licznik)
        {
            clearInterval(przerwa);
            alert("Przegrałeś!");
        }
    }
    if(i%7==0 || i.toString().includes('7')==true)
    {
         guzik=true;
         licznikp++;
    }
   
}

function przyciskFunc()
{ 
    console.log(but);
    but.addEventListener("click",function(){
        if(guzik==true){
            licznik++;
            
        }
        if(guzik==false){
            clearInterval(przerwa);
            alert("Przegrałeś!");
            
        }
        console.log("chuj");
        guzik = false
        wynik.textContent=licznik;
    }
    )};
but.addEventListener("click", przyciskFunc());
przerwa = setInterval(dzik,1000);
