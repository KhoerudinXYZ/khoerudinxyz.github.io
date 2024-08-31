const wrap = document.querySelector('.wrapper')
const theme = document.querySelector('#theme')
const themeI = document.querySelector('#theme-icon')
const LTheme = 'styleLight.css'
const DTheme = 'styleDark.css'
const input = document.querySelector('input')
const inputB = document.querySelectorAll('.buttons')
const result = document.querySelector('#result')
const bs = document.getElementById('bs')
let c = 0;

// calculate function
function calculate(value) {
        try {
            const calculatedValue = new Function('return ' + value)();
            
            if (isNaN(calculatedValue)) {
                result.value = "undefined";
                setTimeout(() => {
                    result.value = "";
                }, 1000);
            } else {
                result.value = calculatedValue;
            }
        } catch (error) {
            result.value = "error";
            setTimeout(() => {
                result.value = "";
            }, 1000);
        }
    }
    
// Change placeholder color
function changeColor(toColor) {
        addCSS = document.createElement('style');
        addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
        document.body.append(addCSS);
      }
//   Change Hover color
      function changeHover(toColor) {
        var css = 'input:hover { background-color: black; }';
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        inputB[0].appendChild(style);

      }

// Change Theme function
themeI.addEventListener('click', function changeTheme() {
        c += 1
        if(c % 2 == 1) { //change to light mode
         theme.setAttribute("href", DTheme);
         themeI.setAttribute("src", 'assets/SunIcon.svg');
        //    wrap.style.backgroundColor = 'lightblue'
        //    wrap.style.color = 'black'
        //    themeI.setAttribute('src', "assets/MoonIcon.svg")
        //    input.style.backgroundColor = 'white'
        //    changeColor('black')
        //    changeHover('black')
        //    result.style.color = 'Black';
        //    for(let i = 0;i < inputB.length; i++) {
        //         inputB[i].style.backgroundColor = 'white'
        //         inputB[i].style.color = 'black'
        // }
        } else { // change to dark mode
            theme.setAttribute("href", LTheme);
            themeI.setAttribute("src", 'assets/MoonIcon.svg');
        //    wrap.style.backgroundColor = ('rgb(29,27,27)')
        //    wrap.style.color = 'white'
        //    themeI.setAttribute('src', 'assets/SunIcon.svg')
        //    input.style.backgroundColor = 'rgb(80, 80, 80)'
        //    changeColor('white')
        //    result.style.color = 'white';
        //    for(let i = 0;i < inputB.length; i++) {
        //         inputB[i].style.backgroundColor = 'rgb(80,80,80)'
        //         inputB[i].style.color = 'white'
        //  }
        }

})

function Numbers(number) {
result.value += number;
console.log(typeof(result.value))
}
// Backspace function
function backspace(str) {
        return str.slice(0, -1);
    }
    
    bs.addEventListener('click', () => {
        result.value = backspace(result.value);
    });
    
