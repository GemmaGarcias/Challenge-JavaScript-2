function translate (text) {
  var textArray = text.split('')
  var numLetters = textArray.length
  var textToTranslate = []
  for (var i = 0; i < numLetters; i++) {
    var currentLetter = textArray[i]
    if ((currentLetter === 'a') ||(currentLetter === "e") ||(currentLetter === "i")||(currentLetter === "o") || (currentLetter ==="u")){
      textToTranslate.push(currentLetter)
    } else if ((currentLetter !== "a") || (currentLetter !== "e") ||(currentLetter !== "i") ||(currentLetter !== "o") ||(currentLetter!=="u")) {
    textToTranslate.push(currentLetter)
    textToTranslate.push( "o")
    textToTranslate.push(currentLetter)
    }
  }console.log(textToTranslate.join(""))
}
translate("rara")

//-----------
function translate(textToTranslate) {
  return text.text.replace([b-df-hj-np-tv-z]/g, '$&o$&')
}
