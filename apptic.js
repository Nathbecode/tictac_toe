document.querySelector('.board').addEventListener('click',(e)=>{inputs(e)});

const inputs = (e) => {
    for (let i = 0; i < 10; i++) {
        if (e.target.classList.contains(`cell${i}`)) {
            let where = document.querySelector(`.cell${i}`);
            if (where.querySelector('input') == null) {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = `child val${i}`;
                where.appendChild(input);

                let stylegrid = input.style;
                stylegrid.backgroundColor = 'rgb(237, 237, 198)';
                stylegrid.width = '95px';
                stylegrid.height = '95px';
                stylegrid.textAlign = 'center';
                stylegrid.fontSize = '70px';
                stylegrid.border = '0';
                input.innerText.toUpperCase();
            }
            
            let ele = document.querySelectorAll('.child');
            let invalidInputFound = false;
            ele.forEach(element => {
                let val = element.value.toUpperCase();
                if (val !== 'X' && val !== 'O' && val !== '') {
                    invalidInputFound = true;
                }
            });

            if (invalidInputFound) {
                rest();
            }
            ele.forEach(element => {
                let val = element.value.toUpperCase();
                if (val !== 'X' && val !== 'O') {
                    if (where.querySelector('input') && document.getElementById('xo') == null) {
                        const p = document.createElement('p');
                        p.textContent = 'Write X or O';
                        p.id = 'xo';
                        where.appendChild(p);

                        let stylep = p.style;
                        stylep.fontSize = '13px';
                        stylep.color = 'red';
                        stylep.margin = '0 auto';
                    }
                }
            });
            where.removeEventListener('click', (e) => { inputs(e) });
        }
    }
    checkInputs();
};


const rest = () => {
    let ele = document.querySelectorAll('.child');
    ele.forEach(element => {
        element.remove();
    });
    if (document.querySelector('.win')!==null){
        document.querySelector('.win').remove();
    };
    if (document.getElementById('xo')!==null){
        document.getElementById('xo').remove();
    };
}


const checkInputs = () => {
    let ans = document.querySelectorAll('.child');
    if (ans.length >= 3) {
        play();
    }
};
        
const msg = (x) => {
    let p = document.createElement('p');
    p.textContent = x;
    p.className= `win`;
    if (document.querySelector('.win')==null) {
    document.querySelector('.message').appendChild(p);
    }  
}
const play = () => {
    const getVal = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.value.toUpperCase() : null;
    };

    let val1 = getVal('.val1');
    let val2 = getVal('.val2');
    let val3 = getVal('.val3');
    let val4 = getVal('.val4');
    let val5 = getVal('.val5');
    let val6 = getVal('.val6');
    let val7 = getVal('.val7');
    let val8 = getVal('.val8');
    let val9 = getVal('.val9');

    if (val1 && val2 && val3 && val1 === val2 && val2 === val3) {
        msg(`Congratulations player ${val1} wins!`);
    }
    if (val4 && val5 && val6 && val4 === val5 && val5 === val6) {
        msg(`Congratulations player ${val4} wins!`);
    }
    if (val7 && val8 && val9 && val7 === val8 && val8 === val9) {
        msg(`Congratulations player ${val7} wins!`);
    }
    if (val1 && val4 && val7 && val1 === val4 && val4 === val7) {
        msg(`Congratulations player ${val1} wins!`);
    }
    if (val2 && val5 && val8 && val2 === val5 && val5 === val8) {
        msg(`Congratulations player ${val2} wins!`);
    }
    if (val3 && val6 && val9 && val3 === val6 && val6 === val9) {
        msg(`Congratulations player ${val3} wins!`);
    }
    if (val1 && val5 && val9 && val1 === val5 && val5 === val9) {
        msg(`Congratulations player ${val1} wins!`);
    }
    if (val3 && val5 && val7 && val3 === val5 && val5 === val7) {
        msg(`Congratulations player ${val3} wins!`);
    }
}


document.querySelector('.restart').addEventListener('click',rest);

