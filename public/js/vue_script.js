//var ss = new MenuItem('Silvias Smaskiga', '1000kCal', false, true, "https://whoabella.com/wp-content/uploads/2014/01/thenutellaburger.png", 'Chokladkött och glass');
//var rsa = new MenuItem('Royal-Snack-Attack', '1 kCal', false, false,"https://www.partyhallen.se/cache/d7/799x799-Produktbilder_Asba_godis-hamburgare-mini-2.jpg", 'Lokalproducerad gummi');
//var qe = new MenuItem('Queen-ElizaBurger', '10000 kCal', true, true,"https://cdn3.cdnme.se/cdn/6-2/112338/images/2008/hamburgare_allt_19890169.jpg",'Lyxig ost och fint kött');
//var ld = new MenuItem('Lady-D', '3 kCal', true, false,"https://whoabella.com/wp-content/uploads/2014/01/thenutellaburger.png",'Mums')
//var pb = new MenuItem('Pöbel-Burgaren', '400 kCal', true, true,"https://whoabella.com/wp-content/uploads/2014/01/thenutellaburger.png",'Svampar')


//var allBurg = [ss, rsa, qe, ld, pb];
'use strict';
var socket = io();

var newID = new Vue({


  el: '#allt',
  data: {
    burgers: food,
    karta: {
      details: {
        x: 0,
        y: 0
      }
    }
  },



  methods: {
    displayOrder: function(event) {
      var offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.karta = {
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y

        }

      }

    },
    getNext: function() {
      var lastOrder = GetContactInfo();
      var orderer = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      return orderer;
    },

    addOrder: function(event) {
      socket.emit("addOrder", {
        orderId: this.getNext(),
        details: {
          x: this.karta.details.x,
          y: this.karta.details.y
        },

        orderItems: GetBurgerInfo(),
        contactInfo: GetContactInfo()

      });
    }
  }
});


var myButton = document.getElementById("orderss");
myButton.addEventListener("click", clickOrder);


function clickOrder() {
  console.log("Button clicked!");
  console.log(GetContactInfo());
  console.log(GetBurgerInfo());



  document.getElementById("displayOrderInfo").innerHTML = 'Kundinformation: ' + GetContactInfo();

  //var lista1=GetContactInfo();
  //for (i=0; i<lista1.length; i++) {
  //    document.getElementById("displayOrderInfo").innerHTML+= lista1[i]+' ';
  //}


  document.getElementById("displayBurgerInfo").innerHTML = 'Vald burgare: ' + GetBurgerInfo();

}
