document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
// Retrieve the saved code from localStorage
var savedHtmlCode = localStorage.getItem("htmlCode");
var savedCssCode = localStorage.getItem("cssCode");
var savedJsCode = localStorage.getItem("jsCode");

// Set the saved code in the text areas
document.getElementById("htmlCode").value = savedHtmlCode || "<div>\n\n</div>";
document.getElementById("cssCode").value = savedCssCode || "<style>\n\n</style>";
document.getElementById("jsCode").value = savedJsCode || "<script>\n\n</script>";

// Show the preview of the code
showPreview();

// Save the code in localStorage whenever there is an input
document.getElementById("htmlCode").addEventListener("input", saveCode);
document.getElementById("cssCode").addEventListener("input", saveCode);
document.getElementById("jsCode").addEventListener("input", saveCode);

// Function to save the code in localStorage
function saveCode() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = document.getElementById("cssCode").value;
  var jsCode = document.getElementById("jsCode").value;

  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCode);
  localStorage.setItem("jsCode", jsCode);
}

// Rest of your existing code...