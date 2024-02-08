const express = require('express')
const app = express()
const PORT = 8000

//always commas between for objects
//making all of this stuff lowercase to match our params
const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph'
  },
  'chance the rapper': {
    'age': 29, 
    'birthName': 'Chancelor Bennet'
  },
  'unknown': {
    'age': 0, 
    'birthName': 'unknown'
  }
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
  const rapperName = request.params.name.toLowerCase()
  console.log(rapperName)
  if(rappers[rapperName]){
    //this finds the objects with the property in brackets
    response.json(rappers[rapperName])
  }else{
    response.json(rappers['unknown'])
  }
})

app.listen(PORT, ()=>{
  console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})