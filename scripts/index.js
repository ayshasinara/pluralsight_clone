document.querySelector(".btn").addEventListener("click", core)
changingText();

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

function changingText(){
  let text = document.getElementsByClassName("changing-text")[0];
  console.log(text);
}