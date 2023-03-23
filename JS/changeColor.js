function changeColor() {
  const scroll = document.documentElement.scrollTop
  const topbar = document.querySelector(".top")
  if (Number(scroll) > 0) {
    topbar.style.backgroundColor = "#fff"
  }
  if (Number(scroll) === 0) {
    topbar.style.backgroundColor = ""
  }
}
window.addEventListener('scroll', changeColor);