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

function createEmail()
{

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    window.open("mailto:isimpson2@zagmail.gonzaga.edu" + "?subject=" + subject + " - " + name + "&body=" + message + " Email: " + email);
}