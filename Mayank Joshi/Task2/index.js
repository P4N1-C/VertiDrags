const tab_titles = document.getElementsByClassName("tab-links")
const tab_content = document.getElementsByClassName("tab-content")
const toggle_icon =  document.getElementsByClassName("t-i")
const toggle = document.getElementById('toggle')

toggle.addEventListener('click',()=>{
    toggle_icon.classList.toggle('t-i')
})

const toggle_link = (event) => {

    if (event.target.classList.contains("active")) {
        return
    }

    for (link of tab_titles) {
        if (link.classList.contains("active")) {
            link.classList.remove("active")
        }
    }
    for (content of tab_content) {
        if (content.dataset.show == "true") {
            content.setAttribute("data-show", "false");
        }
    }
    console.log(event.target.dataset.target)
    event.target.classList.add("active")
    document.getElementById(`tab-content-${event.target.dataset.target}`).setAttribute("data-show", "true")
}

for (link of tab_titles) {
    link.addEventListener("click", toggle_link)
}

