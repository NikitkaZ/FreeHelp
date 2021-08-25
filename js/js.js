document.getElementById('form').addEventListener("submit", checkForm)


function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('form');

    var needhelp = el.needhelp.value;
    var radio = el.radio.value;
    var needhelpproblem = el.needhelpproblem.value;
    var fail = "";

    if (needhelp == "" || radio == "" || needhelpproblem == "")
        fail = "Заполните все поля";
    
    if (fail != "") {
        alert(fail) ;

        return false;
    }
    else {
        
        window.location = '/FreeHelp/';
       
        return false;
    }
    
}

//document.querySelector('.buttoncontener').addEventListener('click', () => {
  //          let data = document.querySelector('.needhelpwindow').value;
      //      document.querySelector('.menu1').innerHTML = data;
    //    })
