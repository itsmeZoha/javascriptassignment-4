// let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
//    let firstName = prompt("Please Enter Your First Name?")
//    let lastName = prompt("Please Enter Your Last Name?")
//    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}
//-------------------------------------------------------------------------------
var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland."
var cities = ['FSD','LHR','ISB','GOJRA','KCH']
// console.log(originalText)
document.getElementById('originalTextBox').innerHTML = originalText

 // -----------------Clear Output ----------------//
 document.getElementById('clearOutputButton').onclick = function(){
   document.getElementById('output').innerHTML = ""
 }
 // -----------------Clear original string ----------------//
 document.getElementById('clearstatementButton').onclick = function(){
   document.getElementById('originalTextBox').innerHTML = ""
 }
  // -----------------Clear Input ----------------//
  function clearInput(){
   document.getElementById('inputText').value = ""
 }
 //--------Convert to Lowercase----------//
 function lowerCase(){
   // let lowerCaseText = originalText.toLowerCase()
   let lowerCaseText = document.getElementById('inputText').value
   lowerCaseText = lowerCaseText.toLowerCase()
   document.getElementById('output').innerHTML = lowerCaseText
 }
 //--------Convert to Uppercase----------//
 function upperCase(){
   // let upperCaseText = originalText.toUpperCase()
   let upperCaseText = document.getElementById('inputText').value
   upperCaseText = upperCaseText.toUpperCase()
   document.getElementById('output').innerHTML = upperCaseText
 }
 //--------Convert to Capitalize----------//                       ?? //javascript k apna koi bi textCapitalize k method nahi ha //
 function capitalize(){
   let capitalizeText = '<span style="text-transform:capitalize;">'+ originalText +'</span>'
   document.getElementById('output').style.textTransform = "capitalize"
   document.getElementById('output').innerHTML = capitalizeText
 }
 //--------Better Formatting----------// 
function betterFormatting(){
   let text = document.getElementById('inputText').value
   if(!text){
      alert('Please Some Text...')
      return
   }
   text = text.toLowerCase()
   document.getElementById('output').style.textTransform = "capitalize" 
      document.getElementById('output').innerHTML = text
}
//--------Print All Cities----------//
function printAllCities(){
   document.getElementById('output').innerHTML = " "
   for(let i=0;i< cities.length ;i++){
      let num = i + 1
      document.getElementById('output').innerHTML += '(' + num + ') ' + cities [i] +"<br>"
   }
}
//--------Add Your City in List----------//
function addYourCityInList(){
   var city = document.getElementById('inputText').value
   // if(!city){
      if(city.length < 3){
      alert('Please Type Your City Name...')
      return
   }
   // cities.push(city)
   // document.getElementById('output').innerHTML = '<span style = "color:green;text-font:20px;">" ' + city +' "</span> has been added successfully.'
   let cityFirstLetter = city.slice(0,1).toUpperCase()
   let cityAllLetter = city.slice(1).toLowerCase()
   let cityWordInCapitalize = cityFirstLetter + cityAllLetter
   // console.log(cityWordInCapitalize)
    let cityFound = false 
    for(let i = 0; i < cities.length; i++){
      if(cities[i] === cityWordInCapitalize){
         cityFound = true 
      document.getElementById('output').innerHTML = '<span style = "color:green;text-font:20px;">" ' + cityWordInCapitalize +' "</span> is already in List.'
      }
    }
    if(cityFound === false){
      cities.push(cityWordInCapitalize)
      let html = '<span style = "color:green;text-font:20px;">" ' + cityWordInCapitalize +' "</span> has been successfully added into list.  '
      document.getElementById('output').innerHTML = html
    }
}
//--------Check Your City in List----------//
function checkCityInList(){
   var city = document.getElementById('inputText').value
   if(city.length < 3){
      alert('Please Type Your City Name Correctly...')
      return
   }
   let cityFirstLetter = city.slice(0,1).toUpperCase()
   let cityAllLetter = city.slice(1).toLowerCase()
   let cityWordInCapitalize = cityFirstLetter + cityAllLetter
   // console.log(cityWordInCapitalize)
    let cityFound = false 
    for(let i = 0; i < cities.length; i++){
      if(cities[i] === cityWordInCapitalize){
         cityFound = true 
      document.getElementById('output').innerHTML = '<span style = "color:green;text-font:20px;">" ' + cityWordInCapitalize +' "</span> found in the List &#128151;.'
      return
   }
    }
    if(cityFound === false){
      let html = 'SORRY &#128524; we couldn\'t find your city <span style = "color:green;text-font:20px;">" ' + cityWordInCapitalize +' "</span>in list.<br>Click <span style = "color:green;text-font:16px;">"Add Your City in List &#128522; '
      document.getElementById('output').innerHTML = html
      return
   }
}
//----------------------Find Word in the Original Text--------------------------------//
function findWord(){
   let newOriginalText = originalText.toLowerCase()
   let word = document.getElementById('inputText').value;
   if(!word){
      alert('Please type a word to find...')
      return
   }
   word = word.toLowerCase()
   let findWord = newOriginalText.indexOf(word)
   // console.log(findWord)
   if(findWord !== -1){
      let html ='Your word <span style="color: green; font-size:18px;"> "'+ word +'"</span> found at index: ' +findWord
      document.getElementById('output').innerHTML =html
   }
   else{
      let html ='Your word <span style="color: green; font-size:18px;"> "'+ word +'"</span> does not exist in the original string. '
      document.getElementById('output').innerHTML =html
     
   }
}
//--------------------------Replace This Word--------------------------------//
function replaceWord(){
   // let cnic = 33102-1234567-8
   // let word = "-"
   // let replaceWith = " "
   // word = new RegExp(word, 'g')
   // let cnicWithoutDashes = cnic.replace(word ,replaceWith);
   // console.log(cnicWithoutDashes)
    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById('inputText').value;
    if(!word){
       alert('Please type a word for replacing...')
       return
    }
    let replaceWith = prompt('Enter a word that you want to replace with...')
    if(!replaceWith){
      alert('Please type a word to replace it with '+ word +'.')
      return
    }
   word = word.toLowerCase()
   word = new RegExp(word, 'g')
   replaceWith = replaceWith.toLowerCase()
   let replaceWord = newOriginalText.replace(word,replaceWith)
   document.getElementById('output').innerHTML = replaceWord
}
//----------------------Emoji Buttons--------------------------------//
function addEmoji(para1){
   document.getElementById('output').innerHTML += para1
}