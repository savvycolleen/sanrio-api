const express = require('express')
const app = express()
const PORT = 8000

//always commas between for objects
//making all of this stuff lowercase to match our params
const sanrioCharacters = {
  'charmy kitty': {
    'fact': "Hello Kitty's pet cat",
    'birthdate': '2004'
  },
  'chococat': {
    'fact': "His whiskers have the ability to pick up things (like information), so he is often first to know about things.", 
    'birthdate': 'May 10, 1996'
  },
  'cinnamoroll': {
    'fact': "He was originally named 'Baby Cinammon.'", 
    'birthdate': 'March 6, 2002'
  },
  'hello kitty': {
    'fact': "Hello Kitty is globally known and is the most popular Sanrio character.", 
    'birthdate': '1974'
  },
  'keroppi': {
    'fact': "A bubbly and adventurous frog with a best friend named Den Den", 
    'birthdate': 'unknown'
  },
  'unknown': {
    'fact': 'This sanrio character has not yet been added to this api.',
    'birthdate': 'n/a'
  },
}

//testing server to see if we can serve up a page
//the first thing a user will do is go to main page
//use forward slash to represent main page
//remember... this is like an event listener!
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})


//in node, the way you set up query params is with a colon
//you can use whatever you want for 'name' but it's helpfor to know what it is
app.get('/api/:name', (request, response)=>{
  //this is just saving whatever they put in the url as a variable with lower case letters
  const sanrioCharacter = request.params.name.toLowerCase()
  console.log(sanrioCharacter)
  if(sanrioCharacters[sanrioCharacter]){
    //this finds the objects with the property in brackets
    response.json(sanrioCharacters[sanrioCharacter])
  }else{
    response.json(sanrioCharacters['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})

