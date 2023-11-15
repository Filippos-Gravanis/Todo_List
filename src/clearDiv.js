export function clearDiv(divElement){
    console.log(divElement);
    while(divElement.lastChild){
        divElement.removeChild(divElement.lastChild)
    }
    divElement.remove()
}