let state = {
    columnsArray: []
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let sort = async array => {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < Object.keys(array).length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
                displayColumns(array);
                await sleep(1);
            }
        }
    } while (swapped);
    return array;
};

let generateArray = number => {
    let array = {};
    for (let i = 0; i < number; i++) {
        array[i] = Math.floor(Math.random() * 40) + 1;
    }
    return array;
};

let displayColumns = array => {
    document.getElementsByClassName("columns")[0].innerHTML = "";

    for (let i = 0; i < Object.keys(array).length; i++) {
        let column = document.createElement("div");
        column.className = "column";
        column.style.backgroundColor = "white";
        column.style.height = `${array[i]}vh`;
        column.style.width = "10px";
        document.getElementsByClassName("columns")[0].appendChild(column);
    }
};

let reset = () => {
    document.getElementsByClassName("columns")[0].innerHTML = "";
    state.columnsArray = generateArray(50);
    displayColumns(state.columnsArray);
};

let render = () => {
    state.columnsArray = generateArray(50);
    displayColumns(state.columnsArray);
    document.getElementById("sortBtn").addEventListener("click", () => {
        sort(state.columnsArray);
    });
    document.getElementById("resetBtn").addEventListener("click", () => {
        reset();
    });
};

render();
