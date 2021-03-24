const pieces =[];
const z=[[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],
        [[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],
        [[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],
        [[0,1,0,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]]];

const s=[[[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],
        [[0,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]],
        [[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],
        [[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]]];

const j=[[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]],
        [[1,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],
        [[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],
        [[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]]];

const t=[[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],
        [[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],
        [[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],
        [[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]];

const l=[[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],
        [[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]],
        [[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],
        [[0,0,1,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]]];

const o=[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],
        [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],
        [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],
        [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]];

const i=[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],
        [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
        [[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
        [[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]]];

pieces.push(z,s,j,t,l,o,i);
mapp={0:"rgb(68, 159, 191)",1:"rgb(200, 216, 35)",2:"rgb(3, 117, 3)",3:"rgb(82, 11, 106)",4:"rgb(160, 11, 49)",5:"rgb(55, 33, 40)",6:"rgb(199, 118, 18)"}

var scoreDisplay=document.querySelector("#score");
var st=document.querySelector(".btn-primary");
st.addEventListener('click',start_game);
var currPos=0;
var currCol=0;
var curr_index=get_random_index();
var curr_rotation=0;
var current=pieces[curr_index][curr_rotation];
var nextRandom=0;
var timerId;

function start_game()
{
  console.log("play now was clicked");
  if (timerId)
   {
      clearInterval(timerId)
      timerId = null
    }
    else
     {
      draw(curr_index)
      timerId = setInterval(moveDown, 1000)
      nextRandom = Math.floor(Math.random()*pieces.length)
      show_shape()
    }
}

function get_random_index()
{
  console.log("get random shape was callled");
  var ix=Math.floor(Math.random()*pieces.length);
  console.log("index "+ix+" was returned");
  return ix;
}


function show_shape()
{
  console.log("get show shape was callled");
  var tbl=document.querySelector('.child_table_three');
  var index=nextRandom;
  var colour=mapp[index];

  for(k=0;k<4;k++)
  {
    var x=tbl.rows[k].cells;
    for(p=0;p<4;p++)
    {
        x[p].style.backgroundColor="";
        x[p].style.border=null;
    }
  }

  for(k=0;k<4;k++)
  {
    var x=tbl.rows[k].cells;
    for(p=0;p<4;p++)
    {
      if(current[k][p]==1)
      {
        x[p].style.backgroundColor=colour;
        x[p].style.border='2px solid black';

      }
    }
  }
}


function draw(idx)
{
  console.log("inside draw");
  var tbl=document.querySelector('.child_table_two');
  var colour=mapp[idx];
  for(k=0;k<4;k++)
  {
    if(k+currPos<=19)
      var x1=tbl.rows[k+currPos].cells;
    else
        break;
    for(p=0;p<4;p++)
    {
      if(current[k][p]==1)
      {
        x1[p+currCol].style.backgroundColor=colour;
        x1[p+currCol].style.border='2px solid black';
      }
    }
  }
}

function undraw(idx)
{
  console.log("inside undraw");
  var tbl=document.querySelector('.child_table_two');
  var colour=mapp[idx];
  for(k=0;k<4;k++)
  {
    if(k+currPos<=19)
      var x1=tbl.rows[k+currPos].cells;
    else
      break;
    for(p=0;p<4;p++)
    {
      if(current[k][p]==1)
      {
        x1[p+currCol].style.backgroundColor="";
        x1[p+currCol].style.border=null;
      }
    }
  }
}

function control(e) {
    if(e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }
document.addEventListener('keyup', control)

function moveDown()
{
  console.log("value of currPos: "+currPos);
  if(!check_for_freeze())
  {
    undraw(curr_index);
    currPos+= 1;
    draw(curr_index);
  }
  else {
    alert("can't move down!")
    freeze();
  }
}

function check_for_freeze() {
  console.log("inside check for freeze");
  var x=document.querySelector('.child_table_two');
//  console.log("value of currPos"+currPos);
  var flag=false;
  var ro;
  var col;
  var sum;
    for(k=3;k>=0;k--)
    {
      //console.log("value of k:" +k);
      for(p=0;p<4;p++)
      {
      //  console.log("value of p:" +p);
        sum=currPos+k+1;
      //  console.log("value of currPos+k+1:"+sum);
        if(current[k][p]==1)
        {
          ro=k;
          col=p;

          if(sum>=19)
         {
          console.log("excedded 19");
          flag=true;
         }
          break;
        }
      }

      if(current[k][p]==1)
      break;
    }

    if(flag!=true)
    {
      var first_coloured_tile=false;
        //  console.log("currPos:"+currPos);
        //  console.log("considering cells of row:"+ro);
          var x1=x.rows[sum].cells;
          for(p=0;p<3;p++)
          {
            if(current[k][p]==1)
            {
              first_coloured_tile=true;
              if(x1[currCol+p].style.backgroundColor!="")
             {
              console.log("colour neeche hai");
               flag=true;
             }
             break;
            }
          }
        }
      /*for(k=0;k<4;k++)
      {
        for(p=0;p<4;p++)
        {
          console.log("k value: "+k);
          console.log("currPos value: "+currPos);
          console.log("p value: "+p);

          if(currPos+k+1<=19)
          {
            var x1=x.rows[k+currPos+1].cells;
            console.log("Value is not exceeded ");
          }
          else if(currPos+k+1>19)
          {
            console.log("Value exceeded:"+(k+currPos+1));
            break;
          }

          else if(current[k][p]==1 && x1[currCol+p].style.backgroundColor=="")
          {
            console.log("colour neeche hai");
            flag=true;
            break;
          }
        }
      }*/

    console.log("value of flag to be returned "+flag);
    return flag;
  }

  function freeze()
  {
    var x=document.querySelector('.child_table_two');
      for(k=0;k<4;k++)
      {
        if(k+currPos<=19)
          var x1=x.rows[currPos+k].cells;
        else
          break;
        for(p=0;p<4;p++)
        {
          if(currCol+p>9 || currCol+p<0)
            break;
          if(current[p][k]==1)
          {
            x1[currCol+p].backgroundColor==mapp[curr_index];
          }
        }
      }

      curr_rotation=0;
      currPos=0;
      currCol=0;
      random = nextRandom;
      curr_index=random;
      nextRandom = Math.floor(Math.random() * pieces.length);
      current = pieces[random][curr_rotation];
      draw(curr_index);

      show_shape();
      //addScore();
      gameOver();
  }




function moveLeft() {
    undraw(curr_index);
    var isAtLeftEdge = false;
    for(k=0;k<4;k++)
    {
      for(p=0;p<4;p++)
      {
          if(p+currCol-1<0 && current[k][p]==1)
            isAtLeftEdge=true;
      }
    }
    if(!isAtLeftEdge)
      currCol -=1;
    else {
      alert("Can't move left!");
    }
    draw(curr_index);
  }

  function moveRight() {
      undraw(curr_index);
      var isAtRightEdge = false;
      for(k=0;k<4;k++)
      {
        for(p=0;p<4;p++)
        {
            if(p+currCol+1>9 && current[k][p]==1)
              isAtRightEdge=true;
        }
      }

      if(!isAtRightEdge)
        currCol +=1
      else {
          alert("Can't move right!");
        }
      draw(curr_index);
    }

  function rotate(){
      console.log("inside roatation");
      console.log("value of rotation: "+curr_rotation);
      undraw(curr_index);
      curr_rotation+= 1;

      if(curr_rotation>=4)
      {
        curr_rotation=0;
      }
      current=pieces[curr_index][curr_rotation];
      draw(curr_index);
  }

  function gameOver()
  {
    var flag=false;
    for(k=0;k<4;k++)
    {
      var x1=tbl.rows[k+currPos].cells;
      for(p=0;p<4;p++)
      {
        if(current[k][p]==1 && x1[p+currCol].style.backgroundColor!="")
        {
          flag=true;
          break;
        }
      }
      if(flag)
        break;
    }

    if(flag)
    {
      scoreDisplay.innerHTML = 'end';
      alert("Game Over!");
      clearInterval(timerId);
    }
  }
