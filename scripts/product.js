document.querySelector(".btn").addEventListener("click", core)

var count=0;
function core(){
   count++
    
  var a =  document.querySelector("#dropdown")
  if(count%2==0){
    a.style="display:block"
  }
  else{
      a.style="display:none"
  }
}