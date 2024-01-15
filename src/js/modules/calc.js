const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, state) => {
    const sizeBlock = document.querySelector(sizeSelector),
          materialBlock = document.querySelector(materialSelector),
          optionsBlock = document.querySelector(optionsSelector),
          promocodeBlock = document.querySelector(promocodeSelector),
          resultBlock = document.querySelector(resultSelector);

    const calcFunc = () => {
        switch (true) {
            case sizeBlock.options[sizeBlock.selectedIndex].text === 'Выберите размер картины' || materialBlock.options[materialBlock.selectedIndex].text === 'Выберите материал картины':
                resultBlock.textContent = "Please, choose picture size and material";
                break;
            case promocodeBlock.value === 'IWANTPOPART':
                state.size = sizeBlock.options[sizeBlock.selectedIndex].text;
                state.material = materialBlock.options[materialBlock.selectedIndex].text;
                state.options = optionsBlock.options[optionsBlock.selectedIndex].text;
                state.withoutDiscount = '';
                state.withDiscount = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value)) * 0.7;
                resultBlock.textContent = state.withDiscount;
                break;
            default:
                state.size = sizeBlock.options[sizeBlock.selectedIndex].text;
                state.material = materialBlock.options[materialBlock.selectedIndex].text;
                state.options = optionsBlock.options[optionsBlock.selectedIndex].text;
                state.withoutDiscount = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
                state.withDiscount = '';
                resultBlock.textContent = state.withoutDiscount;
        }
        console.log(state);
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
