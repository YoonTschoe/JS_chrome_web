const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

const todaysImagesURL = `img/${images[Math.floor(Math.random()*images.length)]}`
console.log(todaysImagesURL)

document.body.style.backgroundImage = `url("${todaysImagesURL}")`
console.log(document.body.style.backgroundImage)