const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const pattern = /^[a-z]{6,12}$/;



// console.log(form);
form.addEventListener("submit" , e => {
    e.preventDefault();
    // console.log(user.value);
    console.log(form.username.value);
    const users = form.username.value;


    // let results = pattern.test(username);
    // console.log(results);

    if(pattern.test(users)) {
        //then feedback good
        feedback.textContent = `(${form.username.value}) - This is a good Username`;
        form.username.value = "";
        console.log(form.username.textContent);
    } else {
        //feedback bad
        feedback.textContent = `(${form.username.value}) - Try a different Username between 6 & 12 characters long`;
        form.username.value = "";
    };
});
// live feedback - keyboard event
form.username.addEventListener("keyup" , e => {
    // console.log(e.target.textContent , form.username.value);
    if(form.username.value === "") {
        form.username.setAttribute("class" , "blank");
    }
    else if(pattern.test(e.target.value)) {
        //keep it green
        console.log("This is good");
        form.username.setAttribute("class" , "success");
    } else {
        // keep it red
        console.log("This is bad");
        form.username.setAttribute("class" , "error");
    }
});


