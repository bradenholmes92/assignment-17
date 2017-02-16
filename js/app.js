
//console.log('hey')

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function (serverRES){
  //console.log(serverRES)

  //FETCH a containing div from the HTML
  var congressListFullEl = document.querySelector('.politician-container')
  var congressObj = serverRES.results
  //console.log(congressObj)
  //MAKE a function that is going to create a html element with the current congress info (document.createElement()) or (create a HTML string)

  //PUSH the new element up to the DOM so it can be seen (.append()) or (innerHTML)
  var htmlString = ''

  forEach(congressObj, function(congressElement, index, theArray){

      var firstName = congressElement.first_name
      var lastName = congressElement.last_name
      //console.log(firstName)
      //console.log(lastName)
      var title = congressElement.title
      //console.log(title)
      var partyName = congressElement.party
      var stateName = congressElement.state_name
      var emailName = congressElement.oc_email
      var websiteName = congressElement.website
      var faceBook = congressElement.facebook_id
      var twitterId = congressElement.twitter_id
      var termEnd = congressElement.term_end
      //console.log(termEnd)

      var infoBlock = `
      <div>
        <h4>${firstName}   ${lastName}</h4>
        <h5>${title} -- ${partyName}-${stateName}</h5>
        <ul>
          <li> email: ${emailName}</li>
          <li> website: ${websiteName}</li>
          <li> facebook: ${faceBook}</li>
          <li> twitter: ${twitterId}</li>
        </ul>
        <h6>Term End${termEnd}</h6>
      </div>
      `


      htmlString += infoBlock
  })

  congressListFullEl.innerHTML = htmlString

})




// function TEST (aray){
//   let holder = document.createElement('div')
//   let name = document.createElement('h1')
//   name.textContent = aray.first_name
//   holder.append(name)
// }





// function TEST (aray){
//   let daString = `
//     <div>
//       <h1></h1>
//       <ul>
//         <li></li>
//       </ul>
//     </div>
//   `
//
//   appcontainer.innerHTML += daString
// }
