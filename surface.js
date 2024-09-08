function loadSurfaceHTML(callback) {
  fetch('surface.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('surface-container').innerHTML = html;
      callback();
    });
}


let surfaceResult; // Declare forceResult as a global variable

loadSurfaceHTML(function() {
  convertSurface();
  updateLabels();
  document.querySelectorAll('input[name="surfaceFromUnit"], input[name="surfaceToUnit"]').forEach(function(radio) {
    radio.addEventListener('change', convertSurface);
    radio.addEventListener('change', updateLabels);
  });
  
  // Display the result
  document.getElementById("surface-result-value").innerHTML = surfaceResult;
});
 
 function openSurface() {
let surface = document.getElementById('Surface');
        
    if  (surface.style.right = '0'){
    menu.style.left = '-360px';
    jum.style.left = '-360px';
    
    
    
  }

}


function closeSurface() {
    let surface = document.getElementById('Surface');
    if  (surface.style.right = '-360px'){
    menu.style.left = '0px';
    jum.style.left = '0px';
    
    }
}
    
 function convertSurface() {
    try {
      let inputValue = parseFloat(document.getElementById("surfaceInputValue").value);
      if (isNaN(inputValue)) {
        document.getElementById("surface-result-value").innerHTML = "please add a value";
        return;
      }
      document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('surfaceInputValue').cursor();
});
 

      
      let fromUnit = document.querySelector('input[name="surfaceFromUnit"]:checked').value;
      let toUnit = document.querySelector('input[name="surfaceToUnit"]:checked').value;
      document.querySelectorAll('input[name="surfaceFromUnit"], input[name="surfaceToUnit"]').forEach(function(radio) {
        radio.addEventListener('change', convertSurface);
      });
      var surfaceResult;
      
//N/m (Newton/Meter) conversions to other units.

if (fromUnit === "N/m (Newton/Meter)" && toUnit === "mN/m (Milli Newton/Meter)") {
  surfaceResult = inputValue * 1000;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 1000;
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
} else if (fromUnit === "erg/cm²" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 1000;
} else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "erg/mm²") {
  surfaceResult = inputValue * 1000000;
} else if (fromUnit === "erg/mm²" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 1000000;
} else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "pdl/in (Poundal/Inch)") {
  surfaceResult = inputValue * 0.224809;
} else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 0.224809;
} else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "lbf/in (Pound Force/Inch)") {
  surfaceResult = inputValue * 0.00571015;
} else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue / 0.00571015;
}else if (fromUnit === "N/m (Newton/Meter)" && toUnit === "N/m (Newton/Meter)") {
  surfaceResult = inputValue;
}
  
  // mN/m (Milli Newton/Meter) conversions to.other units.
  

else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "gf/cm (Gram Force/Centimeter)") {
surfaceResult = inputValue * 0.101971;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "dyn/cm (Dyne/Centimeter)") {
surfaceResult = inputValue * 100;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "erg/cm²") {
surfaceResult = inputValue * 1;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "erg/mm²") {
surfaceResult = inputValue * 1000;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue * 0.000224809;
} else if (fromUnit === "mN/m (Milli Newton/Meter)" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue * 0.00000571015;
}

// Reverse conversions of mN/m (Milli Newton/Meter).

else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "mN/m (Milli Newton/Meter)") {
surfaceResult = inputValue / 0.101971;
} else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "mN/m (Milli Newton/Meter)") {
surfaceResult = inputValue / 100;
} else if (fromUnit === "erg/cm²" && toUnit === "mN/m (Milli Newton/Meter)") {
surfaceResult = inputValue / 1;
} else if (fromUnit === "erg/mm²" && toUnit === "mN/m (Milli Newton/Meter)") {
surfaceResult = inputValue / 1000;
} else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "mN/m (Milli Newton/Meter)") {
surfaceResult = inputValue / 0.000224809;
} else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "mN/m (Milli Newton/Meter)") {
surfaceResult = inputValue / 0.00000571015;
}


//gf/cm (Gram Force/Centimeter) conversions to other units.
//Here are the conversions:

else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "dyn/cm (Dyne/Centimeter)") {
surfaceResult = inputValue * 980.665;
} else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "erg/cm²") {
surfaceResult = inputValue * 98.0665;
} else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "erg/mm²") {
surfaceResult = inputValue * 9806.65;
} else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue * 0.00220462;
} else if (fromUnit === "gf/cm (Gram Force/Centimeter)" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue * 0.0000724784;
}

//And here are the reverse conversions:

else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "gf/cm (Gram Force/Centimeter)") {
surfaceResult = inputValue / 980.665;
} else if (fromUnit === "erg/cm²" && toUnit === "gf/cm (Gram Force/Centimeter)") {
surfaceResult = inputValue / 98.0665;
} else if (fromUnit === "erg/mm²" && toUnit === "gf/cm (Gram Force/Centimeter)") {
surfaceResult = inputValue / 9806.65;
} else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "gf/cm (Gram Force/Centimeter)") {
surfaceResult = inputValue / 0.00220462;
} else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "gf/cm (Gram Force/Centimeter)") {
surfaceResult = inputValue / 0.0000724784;
}

//Here are the conversions dyn/cm (Dyne/Centimeter) to other units.

else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "erg/cm²") {
surfaceResult = inputValue * 0.1;
} else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "erg/mm²") {
surfaceResult = inputValue * 10;
} else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue * 0.00000224809;
} else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue * 0.000000071044;
}
else if (fromUnit === "dyn/cm (Dyne/Centimeter)" && toUnit === "dyn/cm (Dyne/Centimeter)") 
{
surfaceResult = inputValue;
}
//And here are the reverse conversions:

else if (fromUnit === "erg/cm²" && toUnit === "dyn/cm (Dyne/Centimeter)") {
surfaceResult = inputValue / 0.1;
} else if (fromUnit === "erg/mm²" && toUnit === "dyn/cm (Dyne/Centimeter)") {
surfaceResult = inputValue / 10;
} else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "dyn/cm (Dyne/Centimeter)") {
surfaceResult = inputValue / 0.00000224809;
} else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "dyn/cm (Dyne/Centimeter)") {
surfaceResult = inputValue / 0.000000071044;
}


//Here are the conversions dyn/cm (Dyne/Centimeter) to other units.

else if (fromUnit === "erg/cm²" && toUnit === "erg/mm²") {
surfaceResult = inputValue * 100;
} else if (fromUnit === "erg/cm²" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue * 0.0224809;
} else if (fromUnit === "erg/cm²" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue * 0.00071444;
}

//And here are the reverse conversions:


else if (fromUnit === "erg/mm²" && toUnit === "erg/cm²") {
surfaceResult = inputValue / 100;
} else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "erg/cm²") {
surfaceResult = inputValue / 0.0224809;
} else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "erg/cm²") {
surfaceResult = inputValue / 0.00071444;
}
else if (fromUnit === "erg/cm²" && toUnit === "erg/cm²") {
surfaceResult = inputValue;
}

//Here are the conversions erg/mm²:

else if (fromUnit === "erg/mm²" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue * 0.000224809;
} else if (fromUnit === "erg/mm²" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue * 0.0000071444;
}
else if (fromUnit === "erg/mm²" && toUnit === "erg/mm²") {
surfaceResult = inputValue;
}
//And here are the reverse conversions:

else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "erg/mm²") {
surfaceResult = inputValue / 0.000224809;
} else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "erg/mm²") {
surfaceResult = inputValue / 0.0000071444;
}

else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue;
}

//Here are the conversions for pdl/in (Poundal/Inch):

else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "lbf/in (Pound Force/Inch)") {
surfaceResult = inputValue / 32.174;
}

//And here is the reverse conversion:

else if (fromUnit === "lbf/in (Pound Force/Inch)" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue * 32.174;
}
else if (fromUnit === "pdl/in (Poundal/Inch)" && toUnit === "pdl/in (Poundal/Inch)") {
surfaceResult = inputValue;
}
//Note that 1 poundal is equal to 1/32.174 pound-force, so we're dividing by that constant to convert from poundals to pound-force, and multiplying by it to convert back.


  
  document.getElementById("surface-result-value").innerHTML = surfaceResult.toFixed(2);
    } catch (error) {
      document.getElementById("surface-result-value").innerHTML = "Error: Cannot perform operation";
    }
  }
  
  
function updateLabels() {
  let fromUnit = document.querySelector('input[name="surfaceFromUnit"]:checked');
  let toUnit = document.querySelector('input[name="surfaceToUnit"]:checked');
  
  if (fromUnit && toUnit) {
    document.getElementById("surface-input-label").innerHTML = `${fromUnit.value}`;
    document.getElementById("surface-result-label").innerHTML = `${toUnit.value}`;
  }
}

// Call the function to update labels on page load
updateLabels();

