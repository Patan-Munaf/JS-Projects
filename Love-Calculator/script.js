function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if (!name1 || !name2) {
        alert("Please enter both names");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);
    document.getElementById("result").innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;
    
    // Send data to backend
    fetch('https://munna.42web.io/backend/save_love.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `name1=${name1}&name2=${name2}&love=${lovePercentage}`
    });
}
