function add(event){

    var display=document.getElementById("display")
    
    display.value=display.value+event.target.textContent
    
}

function cl(){

    var display=document.getElementById("display")

    display.value=""

}

function total(){

    var display=document.getElementById("display")
    
    display_value=display.value

    var result=eval(display_value)

    display.value=result
}

function back(){

    var display=document.getElementById("display")
    
    display_value=display.value

    remove=display_value.slice(0,-1)
    
    display.value=remove

}

function changecolour(event){
 
    event.target.style.backgroundColor="red"
}