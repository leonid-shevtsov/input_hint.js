// inputHint.js 
// Подсказки внутри <INPUT>
// (c) 2008 Леонид Шевцов (http://leonid.shevtsov.me)


var fields=Array();

function inputHint_init(id,emptyValue)
{
    inputField=document.getElementById(id);
    fields[id]=new Array();
    fields[id]["emptyValue"]=emptyValue;
    fields[id]["isFocused"]=false;
    inputField.onfocus=inputHint_focus;
    inputField.onblur=inputHint_blur;
    if (inputField.value==="") {
        inputField.value=emptyValue;
        inputField.style.color='#aaaaaa';
        fields[id]["isEmpty"]=true;
    } else {
        fields[id]["isEmpty"]=false;
    }
}

function inputHint_focus(e)
{
    if (e === null) { 
      e = window.event;
    }
    element = (e.target !== null) ? e.target : e.srcElement;    
    fields[element.id]["isFocused"]=true;
    if (fields[element.id]["isEmpty"]) {
        element.style.color='#000000';
        element.value='';
    }
}

function inputHint_blur(e)
{
    if (e === null) { 
      e = window.event;
    }
    element = (e.target !== null) ? e.target : e.srcElement;    
    if (element.value === '') {
        fields[element.id]["isEmpty"]=true;
        element.value=fields[element.id]["emptyValue"];
        element.style.color='#aaaaaa';
    } else {
        fields[element.id]["isEmpty"]=false;
    }
    fields[element.id]["isFocused"]=false;
}

function inputHint_isEmpty(id)
{
    return fields[id]["isFocused"] ? (document.getElementById(id).value === '') : fields[id]["isEmpty"];
}
