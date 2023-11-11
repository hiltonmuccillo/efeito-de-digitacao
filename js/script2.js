  const typed = () => {

    var typedItem1 = document.querySelector('.item1');
    var typedItem2 = document.querySelector('.item2');
    var typedItem3 = document.querySelector('.item3');
    var typedItem4 = document.querySelector('.item4');
    var typedItem5 = document.querySelector('.item5');
    var typedItem6 = document.querySelector('.item6');
    var typedItem7 = document.querySelector('.item7');
    var typedItem8 = document.querySelector('.item8');
    var typedItem9 = document.querySelector('.item9');
    var cursorBlink1 = document.querySelector('.cursor-blink1');
    var cursorBlink2 = document.querySelector('.cursor-blink2');
    var cursorBlink3 = document.querySelector('.cursor-blink3');
    var cursorBlink4 = document.querySelector('.cursor-blink4');
    var cursorBlink5 = document.querySelector('.cursor-blink5');
    var cursorBlink6 = document.querySelector('.cursor-blink6');
    var cursorBlink7 = document.querySelector('.cursor-blink7');
    var cursorBlink8 = document.querySelector('.cursor-blink8');
    var cursorBlink9 = document.querySelector('.cursor-blink9');

    // item 1
    setTimeout (function() {
      if (typedItem1.classList.contains("item1")) {
        typedItem1.classList.toggle("typed-right");
      }      
      if (cursorBlink1.classList.contains("cursor-blink1")) {
        cursorBlink1.classList.toggle("show-cursor-blink");
      }      
    }, 0);                                          
    setTimeout (function() {      
      typedItem1.classList.toggle("typed-left");                            
    }, 5000);           
    setTimeout (function() {      
      typedItem1.classList.remove("typed-right");                           
      typedItem1.classList.remove("typed-left");
      cursorBlink1.classList.remove("show-cursor-blink");                                                            
    }, 5850);           
    
    // item2
    setTimeout (function() {
      if (typedItem2.classList.contains("item2")) {
        typedItem2.classList.toggle("typed-right");
      }
      if (cursorBlink2.classList.contains("cursor-blink2")) {
        cursorBlink2.classList.toggle("show-cursor-blink");
      }
    }, 6000);                                           
    setTimeout (function() {      
      typedItem2.classList.toggle("typed-left");                            
    }, 11000);           
    setTimeout (function() {      
      typedItem2.classList.remove("typed-right");                           
      typedItem2.classList.remove("typed-left");
      cursorBlink2.classList.remove("show-cursor-blink");                           
    }, 11850);
    
    // item3
    setTimeout (function() {
      if (typedItem3.classList.contains("item3")) {
        typedItem3.classList.toggle("typed-right");
      }
      if (cursorBlink3.classList.contains("cursor-blink3")) {
        cursorBlink3.classList.toggle("show-cursor-blink");
      }
    }, 12000);                                           
    setTimeout (function() {      
      typedItem3.classList.toggle("typed-left");                            
    }, 17000);           
    setTimeout (function() {      
      typedItem3.classList.remove("typed-right");                           
      typedItem3.classList.remove("typed-left");
      cursorBlink3.classList.remove("show-cursor-blink");                           
    }, 17850);

    // item4
    setTimeout (function() {
      if (typedItem4.classList.contains("item4")) {
        typedItem4.classList.toggle("typed-right");
      }
      if (cursorBlink4.classList.contains("cursor-blink4")) {
        cursorBlink4.classList.toggle("show-cursor-blink");
      }
    }, 18000);                                           
    setTimeout (function() {      
      typedItem4.classList.toggle("typed-left");                            
    }, 23000);           
    setTimeout (function() {      
      typedItem4.classList.remove("typed-right");                           
      typedItem4.classList.remove("typed-left");  
      cursorBlink4.classList.remove("show-cursor-blink");                         
    }, 23850);

    // item5
    setTimeout (function() {
      if (typedItem5.classList.contains("item5")) {
        typedItem5.classList.toggle("typed-right");
      }
      if (cursorBlink5.classList.contains("cursor-blink5")) {
        cursorBlink5.classList.toggle("show-cursor-blink");
      }
    }, 24000);                                           
    setTimeout (function() {      
      typedItem5.classList.toggle("typed-left");                            
    }, 29000);           
    setTimeout (function() {      
      typedItem5.classList.remove("typed-right");                           
      typedItem5.classList.remove("typed-left");
      cursorBlink5.classList.remove("show-cursor-blink");                           
    }, 29850);

    // item6
    setTimeout (function() {
      if (typedItem6.classList.contains("item6")) {
        typedItem6.classList.toggle("typed-right");
      }
      if (cursorBlink6.classList.contains("cursor-blink6")) {
        cursorBlink6.classList.toggle("show-cursor-blink");
      }
    }, 30000);                                           
    setTimeout (function() {      
      typedItem6.classList.toggle("typed-left");                            
    }, 35000);           
    setTimeout (function() {      
      typedItem6.classList.remove("typed-right");                           
      typedItem6.classList.remove("typed-left"); 
      cursorBlink6.classList.remove("show-cursor-blink");                          
    }, 35850);
    
    // item7
    setTimeout (function() {
      if (typedItem7.classList.contains("item7")) {
        typedItem7.classList.toggle("typed-right");
      }
      if (cursorBlink7.classList.contains("cursor-blink7")) {
        cursorBlink7.classList.toggle("show-cursor-blink");
      }
    }, 36000);                                           
    setTimeout (function() {      
      typedItem7.classList.toggle("typed-left");                            
    }, 41000);           
    setTimeout (function() {      
      typedItem7.classList.remove("typed-right");                           
      typedItem7.classList.remove("typed-left");
      cursorBlink7.classList.remove("show-cursor-blink");                           
    }, 41850);

    // item8
    setTimeout (function() {
      if (typedItem8.classList.contains("item8")) {
        typedItem8.classList.toggle("typed-right");
      }
      if (cursorBlink8.classList.contains("cursor-blink8")) {
        cursorBlink8.classList.toggle("show-cursor-blink");
      }
    }, 42000);                                           
    setTimeout (function() {      
      typedItem8.classList.toggle("typed-left");                            
    }, 47000);           
    setTimeout (function() {      
      typedItem8.classList.remove("typed-right");                           
      typedItem8.classList.remove("typed-left");
      cursorBlink8.classList.remove("show-cursor-blink");                            
    }, 47850);

    // item9
    setTimeout (function() {
      if (typedItem9.classList.contains("item9")) {
        typedItem9.classList.toggle("typed-right");
      }
      if (cursorBlink9.classList.contains("cursor-blink9")) {
        cursorBlink9.classList.toggle("show-cursor-blink");
      }
    }, 48000);                                           
    setTimeout (function() {      
      typedItem9.classList.toggle("typed-left");                            
    }, 53000);           
    setTimeout (function() {      
      typedItem9.classList.remove("typed-right");                           
      typedItem9.classList.remove("typed-left");
      cursorBlink9.classList.remove("show-cursor-blink");                           
    }, 53850);

  }

  typed();
  setInterval(typed, 54000);