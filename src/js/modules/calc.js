import {getResource} from "../services/requests";

const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, state) => {
    const sizeBlock = document.querySelector(sizeSelector),
          materialBlock = document.querySelector(materialSelector),
          optionsBlock = document.querySelector(optionsSelector),
          promocodeBlock = document.querySelector(promocodeSelector),
          resultBlock = document.querySelector(resultSelector);

    const calcFunc = () => {
        getResource('http://localhost:3000/calc')
        .then(data => {
            const selectedSizeAttribute = sizeBlock.options[sizeBlock.selectedIndex].getAttribute('attribute'),
                  selectedMaterialAttribute = materialBlock.options[materialBlock.selectedIndex].getAttribute('attribute'),
                  selectedOptionsAttribute = optionsBlock.options[optionsBlock.selectedIndex].getAttribute('attribute');

            let discount = 1;

            data.forEach(category => {
                for (const key in category) {
                    if (Object.hasOwnProperty.call(category, key)) {
                        const values = category[key];
        
                        if (key === "sizes") {
                            state.size = values[selectedSizeAttribute];
                        } else if (key === "materials") {
                            state.material = values[selectedMaterialAttribute];
                        } else if (key === "options") {
                            state.options = values[selectedOptionsAttribute];
                        } else if (key === "discount") {
                            discount = values;
                        } else {
                            console.log("We don't have chosen parameters.");
                        }
                    }
                }
            });
        
            switch (true) {
                case state.size === 'Выберите размер картины' || state.material === 'Выберите материал картины':
                    resultBlock.textContent = "Please, choose picture size and material";
                    state.withoutDiscount = '';
                    state.withDiscount = '';
                    break;
                case promocodeBlock.value === 'IWANTPOPART':
                    state.withoutDiscount = '';
                    state.withDiscount = Math.round((+state.size) * (+state.material) + (+state.options)) * discount;
                    resultBlock.textContent = state.withDiscount;
                    break;
                default:
                    state.withoutDiscount = Math.round((+state.size) * (+state.material) + (+state.options));
                    state.withDiscount = '';
                    resultBlock.textContent = state.withoutDiscount;
            }
            console.log(state);
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
            state.size = sizeBlock.options[sizeBlock.selectedIndex].value;
            state.material = materialBlock.options[materialBlock.selectedIndex].value;
            state.options = optionsBlock.options[optionsBlock.selectedIndex].value;
            switch (true) {
                case state.size === 'Выберите размер картины' || state.material === 'Выберите материал картины':
                    resultBlock.textContent = "Please, choose picture size and material";
                    state.withoutDiscount = '';
                    state.withDiscount = '';
                    break;
                case promocodeBlock.value === 'IWANTPOPART':
                    state.withoutDiscount = '';
                    state.withDiscount = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value)) * 0.7;
                    resultBlock.textContent = state.withDiscount;
                    break;
                default:
                    state.withoutDiscount = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
                    state.withDiscount = '';
                    resultBlock.textContent = state.withoutDiscount;
            }
            console.log(state);
        });
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
