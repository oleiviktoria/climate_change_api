const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
.then(response => response.json())
.then(data => {

    Object.entries(data).forEach(entry => {
        const [key, value] = entry;
        const articleItem = `<div><h2>` + value.source + ` </h2><a href="` + value.url + `">` + value.title + `</a></div>`
        feedDisplay.insertAdjacentHTML("beforeend", articleItem)
      });
}
).catch(err => console.log(err))



