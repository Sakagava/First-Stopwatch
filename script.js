let timer = null;
    let clock = document.getElementById('clock');

    function clockStart() {
      let startTime = new Date();
      let min = 0;
      let hour = 0;
      if (timer !== null) return;
      timer = setTimeout(function tick() {
        let currentTime = new Date();
        let sec = ((currentTime - startTime)/1000).toFixed(0);

        if (sec == 60) {
          min += 1;
          sec = 0;
          startTime = new Date();
        }

        if (min == 60) {
          hour +=1;
          min = 0;
        }

        let date = [hour, 0, min, 0, sec];
        let arrOfElements = Array.from(clock.children);

        arrOfElements.map( (item,index) => {
          if (item.textContent == ':') return item
          item.innerHTML = date[index]
          if (item.textContent.length < 2) { 
            item.innerHTML = '0' + date[index]
          }
        })

        timer = setTimeout(tick, 1000)
      }, 1000)
      buttonStart.style.backgroundColor = '#949494';
    }

    function clockStop() {
      clearTimeout(timer);
      timer = null;
      buttonStart.style.backgroundColor = '#a3a3a3';
    }

    function clearTimer() {
      Array.from(clock.children).map(item => {
        if (item.textContent == ':') return item.textContent = ':'
        item.innerHTML = '00'
      })
    }

    buttonStart.onmouseover = function () {
        buttonStart.style.backgroundColor = '#949494';
    };
    buttonStart.onmouseleave = function () {
      if (timer) {
        buttonStart.style.backgroundColor = '#949494';
      } else buttonStart.style.backgroundColor = '#a3a3a3';    
    }