
const sudy_el = document.getElementById("el-study");

const condition_el = document.getElementById("el-condition");

const model_el = document.getElementById("el-selectModel");

const inputBtn = document.getElementById("submitBtn")

const resultado_el = document.getElementById("result-el")

const resDes_el = document.getElementById("resDes-el")


let study_Condition;

let model;

let backPathModel;

let results;

inputBtn.addEventListener("click", function (e) {
    e.preventDefault();

    study_Condition = sudy_el.value + " " + condition_el.value
    model = model_el.options[model_el.selectedIndex].value;

    console.log("El número del modelo es :" + model + " datatype:" + typeof model)

    if (model == "1") {
        backPathModel = "http://127.0.0.1:8000/predict1"
    } else if (model == "2") {
        backPathModel = "http://127.0.0.1:8000/predict2"
    } else {
        backPathModel = "http://127.0.0.1:8000/predict3"
    }

    let data = {
        study_and_condition: study_Condition,
    }

    predict(data, backPathModel);



})

function predict(datos, path) {
    fetch(path, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            results = data
            console.log(typeof (results))
            renderResults(results)
        })
}

function renderResults(results) {





    if (results[0].includes("[0]")) {
        resultado_el.textContent = "✓"
        resDes_el.textContent = `De acuerdo a los datos del paciente, este SÍ es apto para el tratamiento: ${results}`

    } else {
        resultado_el.textContent = "X"
        resDes_el.textContent = `De acuerdo a los datos del paciente, este NO es apto para el tratamiento: ${results}`
    }

}








/*

*/



