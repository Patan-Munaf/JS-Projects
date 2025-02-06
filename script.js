function calculatelove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if (name1 === null || name1 === undefined || name2 === null || name2 === undefined) {
        alert("Please enter both names");
    }
    else{
        const lovepercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's Love percentage is : ${lovepercentage}`;

        if(lovepercentage <30){
            result.innerHTML += "<br> Not a great Match!"
        }else if(lovepercentage >= 30 && lovepercentage <70){
            result.innerHTML += "<br> It's a good match!"
            }else{
                result.innerHTML += "<br> It's a perfect match!"
        }
    }

}