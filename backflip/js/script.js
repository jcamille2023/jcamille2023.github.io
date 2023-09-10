
const gif_1 = "https://jcamille2023.github.io/jcamille2023/backflip/backflip-its-a-man-doing-a-backflip.gif"
const time = 2.3
const photo_1 = "https://jcamille2023.github.io/jcamille2023/backflip/ezgif-1-6edddceba4.png"
const gif_2 = "https://jcamille2023.github.io/jcamille2023/backflip/ezgif-1-6edddceba4.gif"
const photo_2 = "https://jcamille2023.github.io/jcamille2023/backflip/backflip-its-a-man-doing-a-backflip.png"

function wait() {
    console.log(".")
}


function do_a_flip() {
    var photo = document.getElementById("photo")
    photo.setAttribute("src",gif_1)
    setTimeout(wait(),2300)
    photo.setAttribute("src",photo_1)
    


}
