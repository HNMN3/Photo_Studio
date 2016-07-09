var imgarr=new Array();
var i=0;
function cycle(){
document.banner.src=imgarr[i].src;
i++;
if(i>5)
{
i=0;
}
setTimeout("cycle()",5000);
return;
}
function start(){
imgarr[0]=new Image;
imgarr[1]=new Image;
imgarr[2]=new Image;
imgarr[3]=new Image;
imgarr[4]=new Image;
imgarr[5]=new Image;

imgarr[0].src="images/main1.jpg";
imgarr[1].src="images/main2.jpg";
imgarr[2].src="images/main3.jpg";
imgarr[3].src="images/main4.jpg";
imgarr[4].src="images/main5.jpg";
imgarr[5].src="images/main6.jpg";

cycle();
return;
}