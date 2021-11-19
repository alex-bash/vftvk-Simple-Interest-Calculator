function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100.0;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = 
    "If you deposit <span class='resultSpan'>" + principal + "</span>,<br/>" + 
    "at an interest rate of <span class='resultSpan'>" + rate + "%</span>.<br/>" +
    "You will receive an amount of <span class='resultSpan'>" + interest + "</span>,<br/>" + 
    "in the year <span class='resultSpan'>" + year + "</span>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}
