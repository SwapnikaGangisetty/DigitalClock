var date=new Date
function clk()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fulltime=`${hh}:${mm}:${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="April"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="June"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("Date").innerHTML=fullDate
    switch(dy)
    {
        case 0 : dy="sunday"
        bdy.style.backgroundImage="url(mon.png)"
        break;
        case 1 : dy="Monday"
        bdy.style.backgroundImage="url(tue.png)"
        break;
        case 2 : dy="tuesday"
        bdy.style.backgroundImage="url(wed.png)"
        break;
        case 3 : dy="wednesday"
        bdy.style.backgroundImage="url(thurs.png)"
        break;
        case 4 : dy="thursday"
        bdy.style.backgroundImage="url(fri.png)"
        break;
        case 5 : dy="friday"
        bdy.style.backgroundImage="url(sat.png)"
        break;
        case 6 : dy="saturday"
        bdy.style.backgroundImage="url(sun.png)"
        break;
    }
    document.getElementById("Day").innerHTML=dy
    document.getElementById("sec").innerHTML=ss
    setTimeout(clk,1000)
}
function greet()
{
    var time=date.getHours()
    if(time>=5 && time<=12)
    {
        document.getElementById("message").innerHTML="Good Morning...!!"
        document.getElementById("vid").src="./morning.mp4"
        document.getElementById("container").style.backgroundColor="rgba(219,245,255,0.619"
        document.getElementById("Time").style.color="black"
        document.getElementById("Date").style.Color="darkblue"
        document.getElementById("Day").style.Color="darkblue"
        document.getElementById("sec").style.Color="white"
    }
    else if(time>=12 && time<=16)
    {
        document.getElementById("message").innerHTML="Good Afternoon...!!"
        document.getElementById("vid").src="./afternoon.mp4"
    }
    else if(time>=16 && time<=20)
    {
        document.getElementById("message").innerHTML="Good Evening...!!"
        document.getElementById("vid").src="./evening.mp4"
        document.getElementById("container").style.backgroundColor="rgba(0,0,0,0.57)"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.Color="wheat"
        document.getElementById("Day").style.Color="wheat"
        document.getElementById("sec").style.Color="black"
    }
    else 
    {
        document.getElementById("message").innerHTML="Good Night...!!"
        document.getElementById("vid").src="./night.mp4"
        document.getElementById("container").style.backgroundColor="rgba(0,0,0,0.57)"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.Color="wheat"
        document.getElementById("Day").style.Color="wheat"
        document.getElementById("sec").style.Color="black"
    }
}
greet()
function removeTheGreetWindow()
{
    document.getElementById("greet").style.display="none"
}
setTimeout(removeTheGreetWindow,5000)
function removeAlarm()
{
    document.getElementById("alarm").style.display="none"
}
function loadAlarm()
{
    document.getElementById("alarm").style.display="flex"
}
var audioFile=new Audio()
audioFile.src="./mastaru.mp3"
function setAlarm()
{
    var selec=document.querySelectorAll("select")
    var userhh=selec[0].value
    var usermm=selec[1].value
    var useram_pm=selec[2].value
    console.log(userhh,usermm,useram_pm)

    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    console.log(hh,mm,am_pm)
    if(userhh==hh && usermm==mm && useram_pm==am_pm)
    {
        audioFile.play()
    }
    else
    {
        audioFile.pause()
    }
    setTimeout(setAlarm,1000)
    document.getElementById("alarm").style.display="none"
}