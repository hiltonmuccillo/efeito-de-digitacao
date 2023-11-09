(function(){

  let typedItem = document.querySelector('#typed');

  function typed() {
  
    // item 1
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";                        
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> no Grupo TV1.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";                        
    }, 0)                                           
    setTimeout (function() {
        typedItem.innerHTML = "<span class='typed1'></span>";                        
        typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> no Grupo TV1.</span><span class='cursor-blink'></span>";                        
        document.querySelector('#typed > .typed2 > span').className = "green";                        
    }, 5000)            
    setTimeout (function() {
        typedItem.innerHTML = "<span class='typed2'></span>";
    }, 5900)

    // item 2
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";                        
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Wunderman Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 6000)            
    setTimeout (function() {
        typedItem.innerHTML = "<span class='typed1'></span>";                        
        typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> na Wunderman Brasil.</span><span class='cursor-blink'></span>";                        
        document.querySelector('#typed > .typed2 > span').className = "green";
    }, 11000)            
    setTimeout (function() {
        typedItem.innerHTML = "<span class='typed2'></span>";                                                        
    }, 11900)

    // item 3
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Cheil Brasil.</span><span class='cursor-blink'></span>";
       document.querySelector('#typed > .typed1 > span').className = "green";
    }, 12000)            
    setTimeout (function() {
        typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na Cheil Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 17000)            
    setTimeout (function() {
        typedItem.innerHTML = "<span class='typed2'></span>";
    }, 17900)
    
  }

  typed();
  setInterval(typed, 18000);
 
})();