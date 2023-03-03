document.querySelector(".toggle").addEventListener("click", function () {
    var cssChanger = document.querySelector(".css");
    
    if (cssChanger.getAttribute("href")==="roys.css") {
        cssChanger.setAttribute("href",'roys2.css')
    } else {
        cssChanger.setAttribute("href",'roys.css')
    }
})