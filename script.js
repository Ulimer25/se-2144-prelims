let display = document.getElementById('display');
let isOn = true;

const language = ["Hello!", "Kumusta!", "Hola!"];

document.querySelector(".ac-btn").addEventListener("click", turnOn);
document.querySelector(".bye-btn").addEventListener("click", turnOff)

function appendToDisplay(value) {
    if (isOn) {
        const lastChar = display.value[display.value.length - 1];
        const isOperator = ['+', '-', '*', '/'].includes(value);
        const hasOperator = ['+', '-', '*', '/'].includes(lastChar);
        
        if (isOperator && hasOperator) return; // Tjis will prevent multiple operators.
        if (value === '.' && lastChar === '.') return; // And this will prevent multiple decimal points.
        if (display.value.length <= 8) {
            display.value += value;
        }
    }
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    if (isOn) {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
            setTimeout(() => {
                display.value = '';
                isOn = true;
            }, 1000);
        }
    }
}

function turnOff() {
    isOn = false;
    const btn = document.querySelectorAll("button")
    display.value = 'Goodbye!';
    
    setTimeout(() => {
        btn.forEach(btns => {
            if (!btns.classList.contains("ac-btn")) {
                btn.disabled = true
                display.value = ""
            }
        });
    }, 1000);
}

function turnOn() {
    const btn = document.querySelectorAll("button")
    display.value = ""

    setTimeout(() => {
        isOn = true;
        btn.forEach(btns => {
            btn.disabled = true
            display.value = ""
        });
    }, 500);
}

function showHello() {
    if (isOn) {
        display.value = language[Math.floor(Math.random() * language.length)];
        setTimeout(() => {
            display.value = '';
        }, 2000);
    }
}

