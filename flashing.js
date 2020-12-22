dudefar = document.getElementById("dudefar")
dudeclose = document.getElementById("dudeclose")

const close = (x=dudefar, y=dudeclose, blinkInterval = 200)=> {
  x.className = "hidden"
  y.className = "visible"
  setTimeout(far, blinkInterval)
}

const far = (x=dudefar, y=dudeclose, openInterval = 200)=> {
  x.className = "visible"
  y.className = "hidden"
  setTimeout(close, openInterval)
}

close()
