// let sort = (array) => {
//     let swapped = true;
//     do {
//         swapped = false;
//         for (let i = 0; i < Object.keys(array).length; i++) {
//             if (array[i] > array[i + 1]) {
//                 setTimeout(() => {
//                     let temp = array[i]
//                     array[i] = array[i + 1]
//                     array[i + 1] = temp
//                     swapped = true
//                 }, 10)
//             }
//         }
//     } while (swapped)
//     displayColumns(array)
//     return array
// }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let sort = async (array) => {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < Object.keys(array).length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
                displayColumns(array)
                await sleep(1)
            }
        }
    } while (swapped)
    return array
}


let generateArray = (number) => {
    let array = {}
    for (let i = 0; i < number; i++) {
        array[i] = Math.floor(Math.random() * 29) + 1
    }
    return array
}

let displayColumns = (array) => {
    document.getElementsByClassName("columns")[0].innerHTML = ""

    for (let i = 0; i < Object.keys(array).length; i++) {
        let column = document.createElement("div")
        column.className = "column"
        column.style.backgroundColor = "white"
        column.style.height = `${array[i]}vh`
        column.style.width = '5px'
        document.getElementsByClassName("columns")[0].appendChild(column)
    }
}

let array = generateArray(50)
displayColumns(array)
document.getElementById('sortBtn').addEventListener('click', () => {
    sort(array)
})
