var rotationInput = document.querySelector('.parc1__range');
var rotationImage = document.querySelector('.parc1__img');

function handleRotationInput() {
    var index = rotationInput.value;
    // rotationImage.setAttribute('transform', 'rotate(' + index + 'deg);');
    rotationImage.style.transform = ('rotate(' + index + 'deg)');
}

handleRotationInput();
rotationInput.addEventListener('input', handleRotationInput);