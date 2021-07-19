const correctAns = ["A","C","C","D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
// const display = document.querySelector(".resDisp");
//console.log(display);


form.addEventListener("submit", e => {
 e.preventDefault();

let score = 0;
const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

// Compare Answers
userAnswer.forEach((answer, index)=>{
    if(answer === correctAns[index]) {
        score += 25;

        // result.classList.remove("d-none");
        // display.textContent = `${score += 25}%`;
        }
    });
        // Display Result
        scrollTo(0,0);
        result.classList.remove("d-none");

        let output = 0;

        const timer = setInterval(()=>{
            result.querySelector("span").textContent = `${output}%`;

            if(output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 25);




});

        // Setting Interval
    // let i = 0;
    // const timer = setInterval(()=> {
    //     console.log("Hello");
    //     i++;
    //     if(i === 5) {
    //         clearInterval(timer);
    //     }
    // }, 1000);
