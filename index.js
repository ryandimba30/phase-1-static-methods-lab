class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}static sanitize(string) {
  return string.replace(/[^A-Za-z0-9\-\'\ ]/g,"")
}
static titleize(string) {
let wordArray = string.split(" ")
  let capitalizedWordArray = wordArray.map(string => {
    let word = string.toLowerCase()
    let desiredCase
    if(word !== "the" && word !== "a" && word !== "an" && word !== "but" && word !== "of" && word !== "and" && word !== "for" && word !== "at" && word !== "by" && word !== "from") {
      desiredCase = word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    }else{
        desiredCase = word
    }
    return desiredCase
  })
  let title = capitalizedWordArray.join(" ")
  title = title.replace(title.charAt(0), title.charAt(0).toUpperCase())
  return title
}
}