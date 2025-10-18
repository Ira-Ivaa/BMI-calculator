function getUserData() {
    let weightInput = document.querySelector(".weight");
    let heightInput = document.querySelector(".height");
    let bmiDiv = document.querySelector(".bmi");
    let categoryDiv = document.querySelector(".category");

    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (isNaN(weight) || weight === 0) {
        bmiDiv.innerHTML = "Enter your weight";
        categoryDiv.innerHTML = "";
        weightInput.focus();
        return null;
    }
    if (isNaN(height || height === 0)) {
        bmiDiv.innerHTML = "Enter your height";
        categoryDiv.innerHTML = "";
        heightInput.focus();
        return null;
    }

    return { weight, height };
}

function calculateBMI(weight, height) {
    return weight / (height / 100) ** 2;
}

function getCategory(bmi) {
    if (bmi < 18.5) return "underweight";
    else if (bmi < 25) return "normal weight";
    else if (bmi < 30) return "overweight";
    else return "obesity";
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const bmiDiv = document.querySelector(".bmi");
    const categoryDiv = document.querySelector(".category");

    const userData = getUserData();
    if (!userData) return;

    const bmi = calculateBMI(userData.weight, userData.height);
    const result = getCategory(bmi);

    bmiDiv.innerHTML = "Your BMI: " + bmi.toFixed(2);
    categoryDiv.innerHTML = result;
});
