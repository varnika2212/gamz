var cells=document.querySelectorAll("td")
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cm1);
    cells[i].addEventListener('dblclick',cm2);
}

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function assign()
{
  for (var i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor=getRandomColor();
  }
}
  setInterval("assign()",500);


// Now perform the action over intervals (milliseocnds):

function cm1()
{
  this.textContent='X';
}

function cm2()
{
  this.textContent="O";
}

var res=document.querySelector(".btn-primary")
res.addEventListener('click',reload)

function reload()
{
  var c=document.querySelectorAll("td")
  for (var i = 0; i < c.length; i++) {
      c[i].textContent="";
  }
  alert("NEW GAME!");
}


function check()
{
  var c=document.querySelectorAll("td");
  if(c[0].textContent==c[1].textContent && c[1].textContent==c[2].textContent && c[0].textContent!="")
  {
    alert("Game Over!")
    reload();
  }

  if(c[3].textContent==c[4].textContent && c[4].textContent==c[5].textContent && c[3].textContent!="")
  {
    alert("Game Over!")
    reload();
  }

  if(c[6].textContent==c[7].textContent && c[7].textContent==c[8].textContent && c[6].textContent!="")
  {
    alert("Game Over!")
    reload();
  }

  if(c[0].textContent==c[3].textContent && c[3].textContent==c[6].textContent && c[0].textContent!="")
  {
    alert("Game Over!")
    reload();
  }

  if(c[1].textContent==c[4].textContent && c[4].textContent==c[7].textContent && c[1].textContent!="")
  {
    alert("Game Over!")
    reload();
  }
  if(c[2].textContent==c[5].textContent && c[5].textContent==c[8].textContent && c[2].textContent!="")
  {
    alert("Game Over!")
    reload();
  }

  if(c[2].textContent==c[4].textContent && c[4].textContent==c[6].textContent && c[2].textContent!="")
  {
    alert("Game Over!")
    reload();
  }

  if(c[0].textContent==c[4].textContent && c[4].textContent==c[8].textContent && c[0].textContent!="")
  {
    alert("Game Over!")
    reload();
  }
}

setInterval("check()",1000);
