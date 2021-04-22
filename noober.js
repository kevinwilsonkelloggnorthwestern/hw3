// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Create variable names for the data needed for the console log.
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupLocationStreet = ride.pickupLocation.address
  let pickupLocationCity = ride.pickupLocation.city
  let pickupLocationState = ride.pickupLocation.state
  let pickupLocationZip = ride.pickupLocation.zip
  let dropoffLocationStreet = ride.dropoffLocation.address
  let dropoffLocationCity = ride.dropoffLocation.city
  let dropoffLocationState = ride.dropoffLocation.state
  let dropoffLocationZip = ride.dropoffLocation.zip
  let purplerequested = ride.purpleRequested
  let cartype
  let passengerNumber = ride.numberOfPassengers
  

  // Create conditional such that the car type is always purple if requested, is XL if passengers is over 3 and purple isn't selected, and is X if none apply
  if(purplerequested == true){
  cartype = `Noober Purple`  
  } else if(passengerNumber > 3){
    cartype = `Noober XL`
  } else {
    cartype = `Noober X`
  }

  // Write out the ride description to the console
  console.log(`${cartype} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupLocationStreet}, ${pickupLocationCity}, ${pickupLocationState} ${pickupLocationZip}. Dropoff at ${dropoffLocationStreet}, ${dropoffLocationCity}, ${dropoffLocationState} ${dropoffLocationZip}`)
  


  // 🔥 YOUR CODE ENDS HERE 🔥
})
