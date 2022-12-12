
let inputel = document.getElementById("input-el")
let outputel = document.getElementById("output-el")
let tempel = document.getElementById("temp-el")

let list = []

function convert() {

    list.push(inputel.value)
    
    for( let i=0; i<list.length; i++)
    {
        let temp = tempel.value
        let num = parseInt(list[i]) 
        if(temp==1)
        {
            let kelvin = num + 273.15
            outputel.innerHTML= kelvin + " K" 
        }
        else if(temp==2)
        {
            let fra = (num * 1.8) + 32
            outputel.innerHTML= fra + " <sup>o</sup>F"
        }
        else
        {
            outputel.innerHTML= num + " <sup>o</sup>C"
        }
    }
}
