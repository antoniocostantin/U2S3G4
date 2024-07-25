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
    changesmall(data.photos)
  })
  .catch((err) => {
    console.log("Error", err)
  })
}

const loadimg = function(photo){
    console.log(photo)
    const imgHTML = document.getElementsByClassName("card-img-top")
    const img = Array.from(imgHTML)
    let index = 0

    img.forEach(el => {
        el.setAttribute("src", `${photo[index].src.original}`)
        el.classList.add("object-fit-cover")
        index = index + 1
    })
}

const load = function (){
    getpexel("kitten") 
}

const load2 = function(){
    getpexel("doggo")
}


const changewritebtn = function(){
    const btnHTML = document.getElementsByClassName("btn-outline-secondary")
    const btn = Array.from(btnHTML)
    btn.forEach((el) => {
       if(el.innerText === "Edit"){
        el.innerText = "Hide"
        el.classList.add("hidefun")
       }
    })
}

changewritebtn()

const changesmall = function(photo){
    const spanHTML = document.getElementsByTagName("small")
    const span = Array.from(spanHTML)
    let i = 0;
    span.forEach(el => {
        el.innerText = `${photo[i].id}`
    })
}

const searchformHTML = document.querySelector(".form-control")
 searchformHTML.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        getpexel(`${searchformHTML.value}`)
    }
 })