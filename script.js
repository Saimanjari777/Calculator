let input= document.getElementById('inputBox');
let buttons= document.querySelectorAll('button');
let string="";
let a= Array.from(buttons);
a.forEach(button => {
  button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML =='C'){
      string = "";
      input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
      string = string.substring(0,string.length-1);
      input.value = string;
    }
    else{
    string += e.target.innerHTML;
    input.value = string;
    }
  })
})