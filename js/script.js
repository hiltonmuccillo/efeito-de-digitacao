(function () {
  const typed = () => {
      const typedItem = document.querySelector('#typed');
      const messages = [
          'na Performance CG.',
          'na Menes Learninsight.',
          'na ESI Brasil.',
          'no Grupo TV1.',
          'na Wunderman Thompson Brasil.',
          'na Agência Moustache.',
          'no Olhar Digital.',
          'na Cheil Brasil.',
          'na ADIN - Oracle CX.',
          'no Banco Ind. do Brasil.'
      ];

      // Determina a classe inicial
      const colorCycle = ['green', 'yellow', 'blue'];
      const currentClass = colorCycle[typed.colorIndex];

      messages.forEach((message, index) => {
          const delay = index * 6000; // 6 segundos para cada item
          const nextDelay = delay + 5000; // 5 segundos depois para a segunda parte

          setTimeout(() => {
              typedItem.innerHTML = "<span class='typed2'></span>";
              typedItem.innerHTML = `<span class='typed1'>Já <span>atuei</span> ${message}</span><span class='cursor-blink'></span>`;
              document.querySelector('#typed > .typed1 > span').className = currentClass;
          }, delay);

          setTimeout(() => {
              typedItem.innerHTML = "<span class='typed1'></span>";
              typedItem.innerHTML = `<span class='typed2'>Já <span>atuei</span> ${message}</span><span class='cursor-blink'></span>`;
              document.querySelector('#typed > .typed2 > span').className = currentClass;
          }, nextDelay);
      });
  };

  typed.colorIndex = 0; // Índice inicial da cor
  typed();

  // Atualiza a cor a cada 60 segundos e reinicia o ciclo a cada 180 segundos
  setInterval(() => {
      typed.colorIndex = (typed.colorIndex + 1) % 3; // Ciclo de cores green -> yellow -> blue
      typed();
  }, 60000);
})();
