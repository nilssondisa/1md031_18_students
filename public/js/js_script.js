//function MenuItem(nm, kC, gl, la, img, ing) {
  //this.burgerName = nm; // The this keyword refers to the object itself
  //this.kCal = kC;
  //this.gluten = gl;
  //this.lactose = la;
  //this.image= img;
  //this.info=ing;

  //this.burger = function() {
  //  this.burgerName + ' ' + this.kCal;

//  };
//}
function GetContactInfo() {
orderArray =[];

var fullname=document.getElementById('fullname');
var email=document.getElementById('email');
var street=document.getElementById('street');
var house=document.getElementById('house');
var payment=document.getElementById('payment');

var titleList=document.getElementsByName('kön');
for (i=0; i<titleList.length; i++) {
  if (titleList[i].checked)
    var title= titleList[i];
}


orderArray.push(title.value)
orderArray.push(fullname.value);
orderArray.push(email.value);
orderArray.push(street.value);
orderArray.push(house.value);
orderArray.push(payment.value);



return orderArray;

}

function GetBurgerInfo() {
  burgerArray=[];

 var burgerList=document.getElementsByName('burgcheck');
  for (i=0; i<burgerList.length; i++) {
   if (burgerList[i].checked) {
     burgerArray.push(burgerList[i].value);

 }

}
return burgerArray;
}
