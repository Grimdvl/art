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
            data.forEach((data) => {
                switch (data) {
                    case "sizes":
                        for (const sizeKey in data.sizes) {
                            if (Object.hasOwnProperty.call(data.sizes, sizeKey)) {
                                const sizeValue = data.sizes[sizeKey];
                                const sizeAttribute = document.getElementById('size').getAttribute('attribute');
                                if (sizeAttribute === sizeKey) {
                                console.log(`  ${sizeKey}: ${sizeValue}`);
                                }
                            }
                        }
                        break;
                    case "materials":
                        for (const materialKey in data.materials) {
                            if (Object.hasOwnProperty.call(data.materials, materialKey)) {
                                const materialValue = data.materials[materialKey];
                                const materialAttribute = document.getElementById('material').getAttribute('attribute');
                                if (materialAttribute === materialKey) {
                                console.log(`  ${materialKey}: ${materialValue}`);
                                }
                            }
                        }
                        break;
                    case "options":
                        for (const optionKey in data.options) {
                            if (Object.hasOwnProperty.call(data.options, optionKey)) {
                                const optionValue = data.options[optionKey];
                                const optionAttribute = document.getElementById('options').getAttribute('attribute');
                                if (optionAttribute === optionKey) {
                                console.log(`  ${optionKey}: ${optionValue}`);
                                }
                            }
                        }
                        break;
                    case "discount":
                        // Обработка поля discount, если нужно
                        break;
                    default:
                        // Обработка других случаев, если нужно
                }
            });
            // switch (true) {
            //     case sizes.options[sizeBlock.selectedIndex].text === 'Выберите размер картины' || materialBlock.options[materialBlock.selectedIndex].text === 'Выберите материал картины':
            //         resultBlock.textContent = "Please, choose picture size and material";
            //         break;
            //     case promocodeBlock.value === 'IWANTPOPART':
            //         state.size = sizeBlock.options[sizeBlock.selectedIndex].text;
            //         state.material = materialBlock.options[materialBlock.selectedIndex].text;
            //         state.options = optionsBlock.options[optionsBlock.selectedIndex].text;
            //         state.withoutDiscount = '';
            //         state.withDiscount = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value)) * 0.7;
            //         resultBlock.textContent = state.withDiscount;
            //         break;
            //     default:
            //         state.size = sizeBlock.options[sizeBlock.selectedIndex].text;
            //         state.material = materialBlock.options[materialBlock.selectedIndex].text;
            //         state.options = optionsBlock.options[optionsBlock.selectedIndex].text;
            //         state.withoutDiscount = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
            //         state.withDiscount = '';
            //         resultBlock.textContent = state.withoutDiscount;
            // }
            // console.log(state);
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error);
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
        });
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
