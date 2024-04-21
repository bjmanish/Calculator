
function display(value){

  document.getElementById('result').value += value;

}

function solve(){

    let x = document.getElementById('result').value;
    if(x==null || x==""){
      document.getElementById('result').value += value;
    }else{
    let y = eval(x);
    document.getElementById('result').value = y;
    }
}


function clearScreen(){
  document.getElementById('result').value = '';

}

function deleteLastCharacter() {
  const display = document.getElementById('result').value;
  display.value=display.slice(0,-1);
}
