const inputText = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

convertBtn.addEventListener("click", function() {
    const numToConvert = inputText.value
    const feetFromMeters = numToConvert * 3.28084
    const metersFromFeet = numToConvert / 3.28084
    const gallonsFromLiters = numToConvert * 0.26417192785386
    const litersFromGallons = numToConvert / 0.26417192785386
    const poundsFromKilos = numToConvert * 2.20462
    const kilosFromPounds = numToConvert / 2.20462
    lengthText.textContent = `${numToConvert} meters = ${feetFromMeters.toFixed(3)} feet | ${numToConvert} feet = ${metersFromFeet.toFixed(3)} meters`
    volumeText.textContent = `${numToConvert} liters = ${gallonsFromLiters.toFixed(3)} gallons | ${numToConvert} gallons = ${litersFromGallons.toFixed(3)} meters`
    massText.textContent = `${numToConvert} kilos = ${poundsFromKilos.toFixed(3)} pounds | ${numToConvert} pounds = ${kilosFromPounds.toFixed(3)} kilos`
})