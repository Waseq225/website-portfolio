async function displayCount() {
    const response = await fetch("https://5rud07xpp7.execute-api.ap-southeast-2.amazonaws.com/CloudResumeFunction");
    const views = await response.json();

    document.getElementById("jsViewCount").innerHTML = views.Views
}

displayCount()