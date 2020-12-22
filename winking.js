smiles = document.getElementById("bigsmiles")
winks = document.getElementById("bigwinks")

const blink = (x=smiles, y=winks, blinkInterval = 200)=> {
  x.className = "hidden"
  y.className = "visible"
  setTimeout(openThenBlink, blinkInterval)
}

const openThenBlink = (x=smiles, y=winks, openInterval = 2000)=> {
  x.className = "visible"
  y.className = "hidden"
  setTimeout(blink, openInterval)
}

blink()
