export function storedTodos (){
    function getTodos(){
        if (localStorage.getItem('todos')){
            return JSON.parse(localStorage.getItem('todos'))
        }
        else{
            return []
        }
    }
    function setTodos(todos){
        localStorage.setItem('todos',JSON.stringify(todos))
    }
    return {getTodos,setTodos}
}