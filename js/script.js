(() => {
    const typed = () => {
        const typedItem = document.querySelector('#typed');
        const messages = [
            'na Performance CG.',
            'na Menes Learninsight.',
            'na ESI Brasil.',
            'no Grupo TV1.',
            'na Wunderman Brasil.',
            'na Agência Moustache.',
            'no Olhar Digital.',
            'na Cheil Brasil.',
            'na ADIN - Oracle CX.',
            'no Banco Industrial do Brasil.'
        ];

        // Determine the initial class
        const colorCycle = ['green', 'yellow', 'blue'];
        const currentClass = colorCycle[typed.colorIndex];

        messages.forEach((message, index) => {
            const delay = index * 6000; // 6 seconds for each item
            const nextDelay = delay + 5000; // 5 seconds later for the second part

            setTimeout(() => {
                typedItem.innerHTML = `<span class='typed1'>Já <span>atuei</span> ${message}</span><span class='cursor-blink'></span>`;
                document.querySelector('#typed > .typed1 > span').className = currentClass;
            }, delay);

            setTimeout(() => {
                typedItem.innerHTML = `<span class='typed2'>Já <span>atuei</span> ${message}</span><span class='cursor-blink'></span>`;
                document.querySelector('#typed > .typed2 > span').className = currentClass;
            }, nextDelay);
        });
    };

    typed.colorIndex = 0; // Color starting index

    // Recursive function for 60s cycle
    const startTypedCycle = () => {
        typed();
        // Update color
        typed.colorIndex = (typed.colorIndex + 1) % 3;
        // Schedule next cycle in 60 seconds
        setTimeout(startTypedCycle, 60000);
    };

    // Start the cycle
    startTypedCycle();
})();
