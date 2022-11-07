function selectPet(petType){

    // Get the specific pet data set
   const thePet = petData[petType];
   console.log(thePet);
    // Set the title
document.querySelector('.petDisplayName').innerText = thePet['displayName'];


    // Empty the specification data
let space = "";

    // Add the space required, size, weight
 specs  += "<dt>Weight</dt><dd>" + thePet['weight'] + "</"
 specs += "<dt>Size</dt><dd>"+thePet['size']+"</dd>";
specs += "<dt>Space Required</dt><dd>"+thePet['spaceRequired']+"</dd>";
    // Add logic to add the trainability and lap size images

if(thePet['trainability'] == true){
    specs += "<dt>Trainable</dt><dd><img src="
}
    // Add the foods (may require loop)
   

    // Update the images

  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector(".myClass").addEventListener("change",function(){});
});






