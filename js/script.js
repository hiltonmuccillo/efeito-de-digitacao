// Função autoexecutável para encapsular o escopo
(function(){

  // Obtém a referência para o elemento com o id 'typed'
  var typedItem = document.querySelector('#typed');

  // Função principal que controla o efeito de digitação
  function typed () {    
 
    // item 1 - Primeiro conjunto de mensagens para o efeito de digitação
    setTimeout (function() {
      // Define o conteúdo HTML para simular a digitação da primeira mensagem                            
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Performance CG.</span><span class='cursor-blink'></span>";
      // Muda a classe do primeiro filho do elemento '#typed > .typed1 > span' para 'green'
      document.querySelector('#typed > .typed1 > span').className = "green";                        
    }, 0);
    
    // Aguarda 5 segundos antes de passar para a próxima parte da animação
    setTimeout (function() {
      // Limpa o conteúdo HTML anterior
      typedItem.innerHTML = "<span class='typed1'></span>";
      // Define o conteúdo HTML para simular a digitação da segunda mensagem                        
      typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> na Performance CG.</span><span class='cursor-blink'></span>";
      // Muda a classe do primeiro filho do elemento '#typed > .typed2 > span' para 'green'                        
      document.querySelector('#typed > .typed2 > span').className = "green";                        
    }, 5000);
    
    // Aguarda mais 1 segundo antes de limpar o conteúdo HTML
    setTimeout (function() {
      
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 6000);

    // item 2
    setTimeout (function() {                              
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Menes Learninsight.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";                        
    }, 6000);                                           
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";                        
      typedItem.innerHTML = "<span class='typed2'>Já <span>atuei</span> na Menes Learninsight.</span><span class='cursor-blink'></span>";                        
      document.querySelector('#typed > .typed2 > span').className = "green";                        
    }, 11000);            
    setTimeout (function() { 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 12000);

    // item 3
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na ESI Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 12000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na ESI Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 17000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 18000);
    
    // item 4
    setTimeout (function() {      
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> no Grupo TV1.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 18000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> no Grupo TV1.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 23000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 24000);

    // item 5
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Wunderman Thompson Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 24000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na Wunderman Thompson Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 29000);            
    setTimeout (function() { 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 30000);
    
    // item 6
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Agência Moustache.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 30000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na Agência Moustache.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 35000);            
    setTimeout (function() { 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 36000);
    
    // item 7
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> no Olhar Digital.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 36000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> no Olhar Digital.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 41000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 42000);
    
    // item 8
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na Cheil Brasil.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 42000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na Cheil Brasil.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 47000);            
    setTimeout (function() { 
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 48000);
    
    // item 9
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'>Já <span>atuei</span> na ADIN - Oracle CX.</span><span class='cursor-blink'></span>";
      document.querySelector('#typed > .typed1 > span').className = "green";
    }, 48000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed1'></span>";
      typedItem.innerHTML = "<span class='typed2'>Já <span >atuei</span> na ADIN - Oracle CX.</span><span class='cursor-blink'></span>";              
      document.querySelector('#typed > .typed2 > span').className = "green";
    }, 53000);            
    setTimeout (function() {
      typedItem.innerHTML = "<span class='typed2'></span>";
    }, 54000);
   
  }
  
  // Chama a função typed() uma vez quando a página é carregada
  typed();

  // Configura um intervalo para chamar a função typed() a cada 54 segundos
  setInterval(typed, 54000);

})();