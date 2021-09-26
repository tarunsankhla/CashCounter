
const bill_amount = document.querySelector("#bill-amount");
const checkbutton = document.querySelector("#check-button");
const cashgiven = document.querySelector("#Cash-given");
const errormessage = document.querySelector("#error-Message");
const numberofnotes = document.querySelectorAll(".no-of-note");
var amount =[2000,500,100,20,10,5,1];

checkbutton.addEventListener('click',function ValidCashAmount(){
    console.log(bill_amount.value , cashgiven.value , "hi");
    hidemessage
    if(bill_amount.value >0){
        errormessage.innerHTML= ""
        if(cashgiven.value >= bill_amount.value){
            const change= cashgiven.value - bill_amount.value;
            calculatechange(change)
        }else{
            showmessage("Do you want wash plates.")
        }
    }else{
        showmessage("Invald bill amount")
    }
})
function hidemessage(){
    errormessage.style.display = "none";
}
function calculatechange(changeamount){
    for(let i=0;i <amount.length ; i++)
    {
        console.log(changeamount)
        const nono = Math.trunc(changeamount/amount[i]);
        changeamount %= amount[i];
        numberofnotes[i].innerHTML = nono;

    }
}

function showmessage(message){
    errormessage.style.display = "block";
    errormessage.innerHTML =message
}

 