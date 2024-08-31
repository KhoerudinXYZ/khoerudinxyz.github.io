const wrap = document.querySelector('.wrapper')
const theme = document.querySelector('#theme')
const themeI = document.querySelector('#theme-icon')
const LTheme = 'styleLight.css'
const DTheme = 'styleDark.css'
const Igit = document.getElementById('github-icon')
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

// Change Theme function
themeI.addEventListener('click', function changeTheme() {
        c += 1
        if(c % 2 == 1) { //change to light mode
         theme.setAttribute("href", DTheme);
         themeI.setAttribute("src", 'assets/SunIcon.svg');
         Igit.setAttribute('src', 'assets/GitHubLight.svg');
        } else { // change to dark mode
            theme.setAttribute("href", LTheme);
            themeI.setAttribute("src", 'assets/MoonIcon.svg');
            Igit.setAttribute('src', 'assets/GitHubDark.svg');
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
    
