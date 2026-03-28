
let element=document.getElementById('title-two');

// element.onclick=display;
element.onmouseover=display;
// element.onmouseout=reverse

function display()
{

    element.style.color='red';
    element.innerHTML='Welcome to class';

}

function reverse()
{
    element.style.color='blue';
    element.innerHTML='javascript class';
}

