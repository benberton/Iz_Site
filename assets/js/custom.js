function unhide(job_ID)
{
    let element = document.getElementById(job_ID)
    let caret = element.parentElement.childNodes[1].childNodes[3]
    if (element.classList.contains("hidden"))
    {
        caret.innerHTML = "&#9650;"
        element.classList.remove("hidden")
    }else
    {
        caret.innerHTML = "&#9660;"
        element.classList.add("hidden") 
    }
      
}