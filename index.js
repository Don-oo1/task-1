const inputNum = document.getElementById("input-num")
const indicator = document.getElementById("indicator")
inputNum.addEventListener("input",(t,i)=>{
    iValue = Number(inputNum.value)
    if(!inputNum.value){
        indicator.textContent=""
    }
    else if(iValue < 0){
        indicator.textContent="enter a positive value"
    }
    else {
        indicator.textContent=`${iValue+2},${iValue+4},${iValue+6}`

    }

})