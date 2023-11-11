(function(){  

  const typed = () => {

    var typedItem = document.querySelector('#typed');
 
    // item 1
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";                        
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Performance CG.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";                        
    }, 0);                                           
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";                        
      typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> na Performance CG.</span><span class='cursor-blink'></span>";                        
      document.querySelector('#typed > .typed2 > span').className = "green";                        
    }, 5000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 5850);

    // item 2
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";                        
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Menes LearnInsight.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 6000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";                        
      typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> na Menes LearnInsight.</span><span class='cursor-blink'></span>";                        
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 11000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";                                                        
    }, 11850);

    // item 3
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na ESI Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 12000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na ESI Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 17000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 17850);
    
    // item 4
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> no Grupo TV1.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 18000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> no Grupo TV1.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 23000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 23850);

    // item 5
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Wunderman Thompson Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 24000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> na Wunderman Thompson Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 29000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 29850);
    
    // item 6
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Agência Moustache.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 30000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na Agência Moustache.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 35000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 35850);
    
    // item 7
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> no Olhar Digital.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 36000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> no Olhar Digital.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 41000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 41850);
    
    // item 8
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Cheil Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 42000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na Cheil Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 47000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 47850);
    
    // item 9
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na ADIN - Oracle CX.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 48000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na ADIN - Oracle CX.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 53000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>"; 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 53850);
   
  }
  
  typed();
  setInterval(typed, 54000);
 
})();