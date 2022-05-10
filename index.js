let sudy_el = document.getElementById("el-study");
console.log(sudy_el)
let condition_el = document.getElementById("el-condition");


let model_el = document.getElementById("el-selectModel");



let inputBtn = document.getElementById("submitBtn")

if (inputBtn) {
    inputBtn.addEventListener("click", function () {
        let studyVal = sudy_el.value;
        let conditionVal = condition_el.value;
        let modelVal = model_el.options[model_el.selectedIndex].value;

        console.log(`Study: ${studyVal};Condition:${conditionVal};Condition:${modelVal}`)
    })

} else {
    console.log("fffffff")
}
