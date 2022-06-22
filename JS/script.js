const dropdown_icon = document.getElementById("dropdown--unclick");

dropdown_icon.addEventListener("click", dropdown_check())


function  dropdown_check(){
    if (dropdown_icon.classList.contains("dropdown--click")) {
        dropdown_icon.classList.remove("dropdown--click");
        dropdown_icon.classList.add("dropdown--unclick")
    }
    else {
        dropdown_icon.classList.remove("dropdown--unclick")
        dropdown_icon.classList.add("dropdown--click");
    }
}