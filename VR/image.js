const func2 = ( data , ) => {
    let rightDiv = document.createElement("div")
    rightDiv.innerHTML = `
    <img class="Prof" src="${data}" alt="">
    <div class="ClassR"></div>
    `

    rightDiv.className = "ClassR"


    return rightDiv;
}

export { func2 };