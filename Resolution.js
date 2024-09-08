function loadResolutionHTML(callback) {
  fetch('Resolution.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('Resolution-container').innerHTML = html;
      callback();
    });
}


let resolutionResult; // Declare forceResult as a global variable

loadResolutionHTML(function() {
  convertResolution();
  updateLabels();
  document.querySelectorAll('input[name="surfaceFromUnit"], input[name="surfaceToUnit"]').forEach(function(radio) {
    radio.addEventListener('change', convertResolution);
    radio.addEventListener('change', updateLabels);
  });
  
  // Display the result
  document.getElementById("resolution-result-value").innerHTML = resolutionResult;
});
 
function openResolution() {
let resolution = document.getElementById('Resolution');
        
    if  (resolution.style.right = '0'){
    menu.style.left = '-360px';
    jum.style.left = '-360px';
    
    
    
  }

}
let resolution;

function closeResolution() {
    let resolution = document.getElementById('Resolution');
    if  (resolution.style.right = '-360px'){
    menu.style.left = '0px';
    jum.style.left = '0px';
    
    }
}
    
    function convertResolution() {
    //try {
      let inputValue = parseFloat(document.getElementById("resolutionInputValue").value);
      if (isNaN(inputValue)) {
        document.getElementById("resolution-result-value").innerHTML = "please add a value";
        return;
      }
      document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('resolutionInputValue').cursor();
});
 

      
      let fromUnit = document.querySelector('input[name="surfaceFromUnit"]:checked').value;
      let toUnit = document.querySelector('input[name="surfaceToUnit"]:checked').value;
      document.querySelectorAll('input[name="surfaceFromUnit"], input[name="surfaceToUnit"]').forEach(function(radio) {
        radio.addEventListener('change', convertResolution);
      });
      var resolutionResult;
      
//N/m (Newton/Meter) conversions to other units.

if (fromUnit === "N/m (Newton/Meter)" && toUnit === "mN/m (Milli Newton/Meter)") {
  resolutionResult = inputValue * 1000;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "N/m (Newton/Meter)") {
  resolutionResult = inputValue / 1000;
} else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "gf/cm (Gram Force/Centimeter)") {
  surfaceResult = inputValue * 101.971;
} else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 101.971;
} else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "dyn/cm (Dyne/Centimeter)") {
  surfaceResult = inputValue * 100000;
} else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 100000;
} else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "erg/cm²") {
  surfaceResult = inputValue * 1000;
}
}