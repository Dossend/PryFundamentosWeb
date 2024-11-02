const consoleText = (words, id, colors = ["#fff"]) => {
    
    let visible = true;
    const con = document.getElementById("console");
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);

    setInterval(() => {
        if (letterCount === 0 && !waiting) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            setTimeout(() => {
                const usedColor = colors.shift();
                colors.push(usedColor);
                const usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute("style", "color:" + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && !waiting) {
            waiting = true;
            setTimeout(() => {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (!waiting) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);

    setInterval(() => {
        con.classList.toggle("hidden");
        visible = !visible;
    }, 400);
};

consoleText(["Welcome.", "Designed by Leandro Donneys G", "¡Loading!"], "text", ["#00CDAC", "#EB3349", "#F09819"]);

setTimeout(() => {
    window.location.href = '/html/Registro.html'; 
}, 16000);
