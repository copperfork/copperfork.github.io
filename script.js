function confirmData(){
    const plaintext = document.getElementById(cipherEntry);
    const plaintextGet = cipherEntry.value.toUpperCase();
    console.log("Unprocessed Input: " +plaintextGet);
    const characters = plaintextGet.split("");
    console.log(characters.charCodeAt(""));
    // The "key part"
    const key = document.getElementById(keyInput);
    const keyGet = keyInput.value;
    console.log("Unprocessed Input: " +keyGet);
    const keyProcessed = keyGet.split("");
    console.log(keyProcessed.length);
    // Shifting
    if(characters.length > keyProcessed.length){
       const indexed = characters.length % keyProcessed.length
       console.log('shift: ' +indexed)
    }
}