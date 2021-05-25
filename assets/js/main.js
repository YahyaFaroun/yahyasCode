src = "https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"


let menuArray = ["navHome", "navAbout", "navHTML", "navJS", "navReact", "navNode", "navExpress", "navMongoDB", "navContact"]

function navBar(num) {
    document.getElementById(menuArray[num]).classList.add("selectedNav")
    let i = 0
    menuArray.forEach(elt => {
        if (i != num) {
            document.getElementById(elt).classList.remove("selectedNav")
        }
        i++
    })
}




html.forEach(element => {
    document.getElementById("hmtlCss").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.website_link}" target="_blank">Website</a>
                    <a href="${element.github_link}" target="_blank">Github</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});
js.forEach(element => {
    document.getElementById("js").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.website_link}" target="_blank">Website</a>
                    <a href="${element.github_link}" target="_blank">Github</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});
react.forEach(element => {
    document.getElementById("react").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.website_link}" target="_blank">Website</a>
                    <a href="${element.github_link}" target="_blank">Github</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});
node.forEach(element => {
    document.getElementById("node").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.github_link}" target="_blank">Github</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});
express.forEach(element => {
    document.getElementById("express").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.website_link}" target="_blank">Website</a>
                    <a href="${element.github_link}" target="_blank">Github</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});
mongoDB.forEach(element => {
    document.getElementById("mongoDB").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.website_link}" target="_blank">Website</a>
                    <a href="${element.github_link}" target="_blank">Github</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});
wordpress.forEach(element => {
    document.getElementById("wordpress").innerHTML +=
        `
        <article>
            <h3>${element.title}</h3>
            <div class="overlayBox">
                <img src="${element.img}" alt="">
                <div class="overlay">
                    <a href="${element.website_link}" target="_blank">Website</a>
                </div>
            </div>
            <div>
                <p>${element.about}</p>
                <p>${element.date}</p>
            </div>
        </article>
        `
});

