export function clearDiv(divElement){
    
    while(divElement.lastChild){
        divElement.removeChild(divElement.lastChild)
    }
    divElement.remove()
}