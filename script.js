const getpexel = function (search){
 fetch('https://api.pexels.com/v1/search?query=' + search, {
    headers: {
      Authorization: "vJ9PZDu4ZdnBpXR3BUx8drXxqJoBBU8DfqRuFtIXz1kFZRiQQLWtOB8l"
    }
  })
  .then((resp) => {
    console.log(resp)
    if(resp.ok)
        return resp.json()
    else 
        throw new Error("errore nella chiamata della api")
  })
  .then((data) => {
    console.log(data)
    loadimg(data.photos)
  })
  .catch((err) => {
    console.log("Error", err)
  })
}

const loadimg = function(photo){
    console.log(photo)
    const imgHTML = document.getElementsByClassName("card-img-top")
    let index = 0
    photo.forEach(element => {
        console.log(element.src.original)
        imgHTML[index].setAttribute("src", `${element.src.original}`)
        imgHTML[index].classList.add("object-fit-cover")
        index = index + 1
    });
}

const load = function (){
    getpexel("cock") 
}

const load2 = function(){
    getpexel("music")
}