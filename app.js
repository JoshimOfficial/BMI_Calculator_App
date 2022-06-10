let foot = document.querySelector(".user_foot");
let inch = document.querySelector(".user_inch");
let kg = document.querySelector(".user_kg");

let btn = document.querySelector(".chk_bmi");

let bmi_advise = ['"You need to more exersise"', '"Eat frutes more"', '"Walk in the morning regularly"', '"Rest enough time"']

let f_sec = document.querySelector(".first_sec");
let sec_sec = document.querySelector(".second_sec");

btn.addEventListener("click", ()=>{

    if(foot.value === "" || inch.value === "" || kg.value === "") {
        alert("Full fill the all field")
    }

    else {
        f_sec.style.opacity="0";
        sec_sec.style.display = "block";
    
        setTimeout(()=>{
            f_sec.style.display = "none";
            sec_sec.style.opacity = "1";
        },500)
    

        function convert_inch(foot_value) {
            return foot_value*12;
        }
    
        function convert_meter(inch_value) {
            return inch_value*0.0254;
        }
    
    
    
        function user_height(user_foot, user_inch) {
            let user_cnvrt_inch = convert_inch(user_foot);
            let user_input_inch = user_inch;
            let user_total_inch = user_cnvrt_inch + user_input_inch;
    
            return   convert_meter(user_total_inch);
        }
    
    
    
        function calculate_bmi(user_weight , user_meter_height) {
    
            return (user_weight / (Math.pow(user_meter_height, 2)))
        }
    
    
        let bmi_replace = document.querySelector(".bmi_numner");
        bmi_replace.innerText = calculate_bmi(kg.value, user_height(parseInt(foot.value), parseInt(inch.value))).toFixed(2);
    
        let create_random = Math.floor(Math.random()*4);
        let bmi_advise_sec = document.querySelector(".bmi_advise");
    
        bmi_advise_sec.innerText = bmi_advise[create_random];
    
    
    }






})