function unhide(job_ID)
{
    let element = document.getElementById(job_ID)
    if (element.classList.contains("hidden"))
    {
        element.classList.remove("hidden")
    }else
    {
        element.classList.add("hidden") 
    }
      
}