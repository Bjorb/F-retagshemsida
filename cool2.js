function openNav() {
  document.getElementById('frontPage').style.height = '8.5rem' 
  document.getElementById('abouttitel').style.top = '-60rem'
  document.getElementById('open').style.display = "block"
  document.getElementById('close').style.display = "none"
}


function closeNav() {
  document.getElementById('frontPage').style.height = '100vh'
  document.getElementById('abouttitel').style.top = '20vh'
  document.getElementById('open').style.display = "none"
  document.getElementById('close').style.display = "block"
}

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});