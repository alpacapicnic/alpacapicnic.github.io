var selectedSize;
var selectedFloor;
var selectedCute;

    //iterate through 'name' input radios using onclick to store 'value' then call checkAnswers function
    var radios = document.forms["form"].elements["size"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedSize = this.value;
            checkAnswers();
        }
    }
    var radios = document.forms["form"].elements["floor"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedFloor = this.value;
            checkAnswers();
        }
    }
    var radios = document.forms["form"].elements["cute"];
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            selectedCute = this.value;
            checkAnswers();
        }
    }
//store selected 'value' in a key to be accessed later
function checkAnswers(){
    localStorage.setItem('size', selectedSize);
    localStorage.setItem('floor', selectedFloor);
    localStorage.setItem('cute', selectedCute);
}