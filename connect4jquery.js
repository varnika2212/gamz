var col1=document.querySelectorAll('.one')
var col2=document.querySelectorAll('.two')
var col3=document.querySelectorAll('.three')
var col4=document.querySelectorAll('.four')
var col5=document.querySelectorAll('.five')
var col6=document.querySelectorAll('.six')
var col7=document.querySelectorAll('.seven')
var flag=true;
var count=0;
var mapp={0:'.one',1:'.two',2:'.three',3:'.four',4:'.five',5:'.six',6:'.seven'};

var Ori=document.querySelectorAll('.btn-primary');
Ori[0].addEventListener('click',res);
// col1
for(i=0;i<col1.length;i++)
{
  col1[i].addEventListener('click',function(){
    flag=!flag;
    colourChange(col1,flag);
    colWin(col1,0);
    colWin(col1,1);
    colWin(col1,2);
  })
}

// col2
for(i=0;i<col2.length;i++)
{
  col2[i].addEventListener('click',function(){
    flag=!flag;

    colourChange(col2,flag);
    colWin(col2,0);
    colWin(col2,1);
    colWin(col2,2);
  })
}

// col3
for(i=0;i<col3.length;i++)
{
  col3[i].addEventListener('click',function(){
    flag=!flag;

    colourChange(col3,flag);
    colWin(col3,0);
    colWin(col3,1);
    colWin(col3,2);
  })
}

// col4
for(i=0;i<col4.length;i++)
{
  col4[i].addEventListener('click',function(){
    flag=!flag;

    colourChange(col4,flag);
    colWin(col4,0);
    colWin(col4,1);
    colWin(col4,2);
  })
}

// col5
for(i=0;i<col5.length;i++)
{
  col5[i].addEventListener('click',function(){
    flag=!flag;

    colourChange(col5,flag);
    colWin(col5,0);
    colWin(col5,1);
    colWin(col5,2);
  })
}

// col6
for(i=0;i<col6.length;i++)
{
  col6[i].addEventListener('click',function(){
    flag=!flag;
  colourChange(col6,flag);
  colWin(col6,0);
  colWin(col6,1);
  colWin(col6,2);

  })

}

// col7
for(i=0;i<col7.length;i++)
{
  col7[i].addEventListener('click',function(){
  flag=!flag;
  colourChange(col7,flag);
  colWin(col7,0);
  colWin(col7,1);
  colWin(col7,2);
  })
}

function colourChange(col,flag){
  console.log("checking "+count++);
  for(i=col.length-1;i>=0;i--)
  {
    if(col[i].style.backgroundColor=='')
    {
      if(flag==true)
      {
          col[i].style.backgroundColor="rgb(111, 90, 118)";
      }
      else {
        col[i].style.backgroundColor="rgb(232, 153, 155)";
      }
      break;
    }
  }
  checkRow();
  diagonalCheck();
}

function rowWin(col_start,index)
{
  var columnOne=document.querySelectorAll(mapp[col_start++]);
  var columnTwo=document.querySelectorAll(mapp[col_start++]);
  var columnThree=document.querySelectorAll(mapp[col_start++]);
  var columnFour=document.querySelectorAll(mapp[col_start++]);

  var c1=columnOne[index].style.backgroundColor;
  var c2=columnTwo[index].style.backgroundColor;
  var c3=columnThree[index].style.backgroundColor;
  var c4=columnFour[index].style.backgroundColor;
  console.log(c1+','+c2+''+c3+''+c4);
  if(c1==c2 && c2==c3 && c3==c4 && (c1=="rgb(111, 90, 118)" || c1=="rgb(232, 153, 155)"))
  {
    alert("GAME OVER");
  }
}

function colWin(col,index)
{
  var c1=col[index].style.backgroundColor;
  var c2=col[index+1].style.backgroundColor;
  var c3=col[index+2].style.backgroundColor;
  var c4=col[index+3].style.backgroundColor;
  if(c1==c2 && c2==c3 && c3==c4 && (c1=="rgb(111, 90, 118)" || c1=="rgb(232, 153, 155)"))
    {
      alert("GAME OVER");
    }
}

function checkRow()
{
  for(i=0;i<=3;i++)
  {
    for(j=0;j<=5;j++)
    {
      rowWin(i,j);
    }
  }
}

function returnColor(rowIndex,colIndex) {
  if(rowIndex<0 || rowIndex>=6)
    return '';
  else if(colIndex<0 || colIndex>=7)
    return '';
    
  var clm=document.querySelectorAll(mapp[colIndex]);
  var fin_co=clm[rowIndex].style.backgroundColor;
  return fin_co;
}


function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== '');
}

function diagonalCheck() {
  for ( c = 0; c <=6; c++) {
    for ( r = 0; r <=5; r++) {
      if (colorMatchCheck(returnColor(r,c), returnColor(r+1,c+1) ,returnColor(r+2,c+2), returnColor(r+3,c+3))) {
        console.log('diag');
        alert("GAME OVER");
      }else if (colorMatchCheck(returnColor(r,c), returnColor(r-1,c+1) ,returnColor(r-2,c+2), returnColor(r-3,c+3))) {
        console.log('diag');
        alert("GAME OVER");
      }else {
        continue;
      }
    }
  }
}

function res() {
  col1.forEach(original);
  col2.forEach(original);
  col3.forEach(original);
  col4.forEach(original);
  col5.forEach(original);
  col6.forEach(original);
  col7.forEach(original);
}

function original(item)
{
  item.style.backgroundColor='';
}
