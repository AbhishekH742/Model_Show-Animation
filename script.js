// variables

const openModel = document.querySelector('.open-model');
const modelContainer = document.querySelector('.model-container');
const closeBtn = document.querySelector('.close');

openModel.addEventListener('click', function () {

    modelContainer.style.display = "block";
});

closeBtn.addEventListener('click', function () {
    modelContainer.style.display = "none";
});

// Using this we can close the model by clicking anywhere on the window
window.addEventListener('click', function (e) {
    if (e.target === modelContainer) {
        modelContainer.style.display = "none";
    }
});