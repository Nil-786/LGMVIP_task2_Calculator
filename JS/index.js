var expression = '';
function getValue(val){
    expression+=val;
    document.getElementById("display").value=expression;
}

function calcResult(){
    var result=eval(expression);
    document.getElementById('display').value=result;
    expression='';
}

function clearDisplay(){
    document.getElementById('display').value='';
    expression='';
}