async function displayCount() {
    const response = await fetch(" https://e46jm6tda7.execute-api.ap-southeast-2.amazonaws.com/prod/CloudResumeFunction");
    const views = await response.json();

    document.getElementById("jsViewCount").innerHTML = views.Views
}

displayCount()

