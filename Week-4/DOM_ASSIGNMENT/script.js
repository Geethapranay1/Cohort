
let timeout;

function optimizedInterestCalculater() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        interestCalculater();
    }, 1000);

}




async function interestCalculater() {
    const prin = parseInt(document.getElementById("principle").value);
    const time = parseInt(document.getElementById("time").value);
    const rate = parseInt(document.getElementById("rate").value);
    const response = await fetch("http://localhost:3001/interest?p=" + prin + "&t=" + time + "&r=" + rate);
    const ans = await response.json();
    document.getElementById("result").innerHTML = "The total amount is " + ans["total"] + "      The interest is " + ans["interest"];



}