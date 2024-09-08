function loadForceHTML(callback) {
  fetch('force.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('force-container').innerHTML = html;
      callback();
    });
    updateLabels();
}


let forceResult; // Declare forceResult as a global variable

loadForceHTML(function() {
  convertForce();
  updateLabels();
  document.querySelectorAll('input[name="forceFromUnit"], input[name="forceToUnit"]').forEach(function(radio) {
    radio.addEventListener('change', convertForce);
    radio.addEventListener('change', updateLabels);
  });
  
  // Display the result
  document.getElementById("force-result-value").innerHTML = forceResult;
});
 

function openForce() {
   let menu = document.getElementById('menu') ;
const force = document.getElementById('Force');

    if (force) {
        
    if  (force.style.right = '0'){
    menu.style.left = '-360px';
    jum.style.left = '-360px';
    
    }
    
  }

}


function closeForce() {
   let menu = document.getElementById('menu') ;
const force = document.getElementById('Force');

    if (force) {
        
    if  (force.style.right = '-360px'){
    menu.style.left = '0px';
    jum.style.left = '0px';
    
    }
    
  }

}

/*document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.getElementById('');
  if (inputElement) {
    inputElement.focus();
  } else {
    console.error('Element not found');
  }
});*/




 
 function convertForce() {
    try {
      let inputValue = parseFloat(document.getElementById("forceInputValue").value);
      if (isNaN(inputValue)) {
        document.getElementById("force-result-value").innerHTML = "please add a value";
        return;
      }
      document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('forceInputValue').cursor();
});
 

      
      let fromUnit = document.querySelector('input[name="forceFromUnit"]:checked').value;
      let toUnit = document.querySelector('input[name="forceToUnit"]:checked').value;
      document.querySelectorAll('input[name="forceFromUnit"], input[name="forceToUnit"]').forEach(function(radio) {
        radio.addEventListener('change', convertForce);
      });
      var forceResult;
      
//Newton conversions to other units.
if (fromUnit === "N (Newton)" && toUnit === "μN (Micro Newton)") {
  forceResult = inputValue * 1000000;
} else if (fromUnit === "μN (Micro Newton" && toUnit === "N (Newton)") {
  forceResult = inputValue / 1000000;
} else if (fromUnit === "N (Newton)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 100000;
} else if (fromUnit === "dyn (Dyne)" && toUnit === "N (Newton)") {
  forceResult = inputValue / 100000;
} else if (fromUnit === "N (Newton)" && toUnit === "J/m (Joule/Meter)") {
  forceResult = inputValue * 1;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "N (Newton)") {
  forceResult = inputValue / 1 ;
} else if (fromUnit === "N (Newton)" && toUnit === "J/cm (Joule/Centimeter)") {
  forceResult = inputValue * 100;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "N (Newton)") {
  forceResult = inputValue / 100;
} else if (fromUnit === "N (Newton)" && toUnit === "gf (Gram Force)") {
  forceResult = inputValue * 101.97162;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue / 101.97162;
} else if (fromUnit === "N (Newton)" && toUnit === "tonf (US) (Ton Force)") {
  forceResult = inputValue / 8896.44323;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 8896.44323;
} else if (fromUnit === "N (Newton)" && toUnit === "tonf (UK) (Ton Force)") {
  forceResult = inputValue / 9964.01641;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 9964.01641;
} else if (fromUnit === "N (Newton)" && toUnit === "tf (Metric Ton Force)") {
  forceResult = inputValue / 9806.65;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 9806.65;
} else if (fromUnit === "N (Newton)" && toUnit === "kipf (Kilo Pound Force)") {
  forceResult = inputValue / 4.44822162;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 4.44822162;
} else if (fromUnit === "N (Newton)" && toUnit === "ozf (Ounce Force)") {
  forceResult = inputValue / 0.27801385;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 0.27801385;
} else if (fromUnit === "N (Newton)" && toUnit === "pdl (Poundal)") {
  forceResult = inputValue / 0.138254954;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 0.138254954;
} else if (fromUnit === "N (Newton)" && toUnit === "lbf (Pound Force)") {
  forceResult = inputValue / 4.44822162;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "N (Newton)") {
  forceResult = inputValue * 4.44822162;
}


//Micro Newton conversions to other units.



  if (fromUnit === 'μN (Micro Newton)' && toUnit === 'N (Newton)') {
    forceResult = inputValue * 0.000001;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'dyn (Dyne)') {
    forceResult = inputValue * 0.00001;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'J/m (Joule/Meter)') {
    forceResult = inputValue * 0.000001;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'J/cm (Joule/Centimeter)') {
    forceResult = inputValue * 0.0001;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'gf (Gram Force)') {
    forceResult = inputValue * 0.00010197162;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'tonf (US) (Ton Force)') {
    forceResult = inputValue * 0.000000224809;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'tonf (UK) (Ton Force)') {
    forceResult = inputValue * 0.000000157473;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'tf (Metric Ton Force)') {
    forceResult = inputValue * 0.00000010197162;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'kipf (Kilo Pound Force)') {
    forceResult = inputValue * 0.000000224809;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'ozf (Ounce Force)') {
    forceResult = inputValue * 0.00000359694;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'pdl (Poundal)') {
    forceResult = inputValue * 0.00000721764;
  } else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'lbf (Pound Force)') {
    forceResult = inputValue * 0.000000224809;
    }
    
else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'J/m (Joule/Meter)') {
  forceResult = inputValue * 0.000001;
} else if (fromUnit === 'μN (Micro Newton)' && toUnit === 'J/cm (Joule/Centimeter)') {
  forceResult = inputValue * 0.0001;
}



  // Reverse conversions
  else if (fromUnit === 'N (Newton)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 1000000;
  } else if (fromUnit === 'dyn (Dyne)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 100000;
  } else if (fromUnit === 'J/m (Joule/Meter)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 1000000;
  } else if (fromUnit === 'J/cm (Joule/Centimeter)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 10000;
  } else if (fromUnit === 'gf (Gram Force)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 9810.00027778;
  } else if (fromUnit === 'tonf (US) (Ton Force)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 4448220.0002778;
  } else if (fromUnit === 'tonf (UK) (Ton Force)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 8896438.0002778;
  } else if (fromUnit === 'tf (Metric Ton Force)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 9806650.0002778;
  } else if (fromUnit === 'kipf (Kilo Pound Force)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 4448220.0002778;
  } else if (fromUnit === 'ozf (Ounce Force)' && toUnit === 'μN (Micro Newton)') {
    forceResult = inputValue * 277.77777777778;
  } else if (fromUnit === 'pdl (Poundal)' && toUnit === 'μN (Micro Newton)'){
      forceResult = inputValue ;
      }
      
else if (fromUnit === 'J/m (Joule/Meter)' && toUnit === 'μN (Micro Newton)') {
  forceResult = inputValue * 1000000;
} else if (fromUnit === 'J/cm (Joule/Centimeter)' && toUnit === 'μN (Micro Newton)') {
  forceResult = inputValue * 10000;
}
  
//DYN CONVERSIONS to other units.

else if (fromUnit === "dyn (Dyne)" && toUnit === "μN (Micro Newton)") {
  forceResult = inputValue / 10000;
} else if (fromUnit === "μN (Micro Newton)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 10000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "N (Newton)") {
  forceResult = inputValue / 100000;
} else if (fromUnit === "N (Newton)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 100000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "J/m (Joule/Meter)") {
  forceResult = inputValue / 100000000;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 100000000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "J/cm (Joule/Centimeter)") {
  forceResult = inputValue / 1000000;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 1000000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "gf (Gram Force)") {
  forceResult = inputValue / 101971.62;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 101971.62;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "tonf (US) (Ton Force)") {
  forceResult = inputValue / 89070700000;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 89070700000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "tonf (UK) (Ton Force)") {
  forceResult = inputValue / 88964470000;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 88964470000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "tf (Metric Ton Force)") {
  forceResult = inputValue / 9806650000;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 9806650000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "kipf (Kilo Pound Force)") {
  forceResult = inputValue / 4448220000;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 4448220000;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "ozf (Ounce Force)") {
  forceResult = inputValue / 70105.6;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 70105.6;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "pdl (Poundal)") {
  forceResult = inputValue / 138254.954;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 138254.954;
}

else if (fromUnit === "dyn (Dyne)" && toUnit === "lbf (Pound Force)") {
  forceResult = inputValue / 444822;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "dyn (Dyne)") {
  forceResult = inputValue * 444822;
}


//JOULE/METER CONVERSIONS TO OTHER UNITS.

//Joule/Meter conversion

if (fromUnit === "J/m (Joule/Meter)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue * 100;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 100;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 101971.62;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 101971.62;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue * 1124005.86;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 1124005.86;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue * 1124895.04;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 1124895.04;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue * 1019716.2;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 1019716.2;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue * 1124005.86;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 1124005.86;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 3527396.18;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 3527396.18;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 7233014.36;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 7233014.36;
} else if (fromUnit === "J/m (Joule/Meter)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue * 224809.142;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "J/m (Joule/Meter)") {
forceResult = inputValue / 224809.142;
}


//J/CM (JOULE CENTIMETER) CONVERSIONS TO OTHER UNITS.
//Here are the conversions from J/cm (Joule/Centimeter) to the units  specified, using the full unit names:

if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 1019.7162;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 1019.7162;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue * 11240.0586;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 11240.0586;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue * 11248.9504;
} else if (fromUnit === "tonf(UK) (Ton Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 11248.9504;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue * 1019.7162;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 1019.7162;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue * 11240.0586;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 11240.0586;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 35273.9618;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 35273.9618;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 72330.1436;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 72330.1436;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue * 2248.09142;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue / 2248.09142;
}

//GF (GRAM FORCE) conversions to other units.
//Here are the conversions from GF (Gram Force) to the specified units, using the pattern.

if (fromUnit === "gf (Gram Force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 8904.47;
} else if (fromUnit === "Tonf (US) (Ton Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 8904.47;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 8862.65;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 8862.65;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue / 9806.65;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 9806.65;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue / 8904.47;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 8904.47;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 28.3495;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue / 28.3495;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 70.9316;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue / 70.9316;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue / 453.592;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 453.592;
}


//TONF (US) (TON FORCE) conversions to other units.
//Here are the conversions from Tonf(US) (Ton Force) to the specified units, using the full unit names.

if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "gf (Gram force)") {
forceResult = inputValue * 8904467;
} else if (fromUnit === "gf (Gram force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 8904467;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue * 0.9842065;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 0.9842065;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue * 0.9071847;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 0.9071847;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue * 1;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue * 1;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 32064215.4;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 32064215.4;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 6377181.8;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 6377181.8;
} else if (fromUnit === "tonf (US) (Ton Force)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue * 2000;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "tonf (US) (Ton Force)") {
forceResult = inputValue / 2000;
}

//TONF (UK) (TON FORCE) conversions to other units.

//Here are the conversions from tonf(UK) (Ton Force) to the specified units, using the full unit names.

else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue * 1.0160469;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 1.0160469;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue * 1.0160469;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 1.0160469;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 32571.93;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 32571.93;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 6451.6063;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 6451.6063;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue * 2240;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 2240;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "gf (Gram Force)") {
forceResult = inputValue * 8862.65;
} else if (fromUnit === "gf (Gram Force)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 8862.65;
} else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue * 1019.7162;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 1019.7162;
}
else if (fromUnit === "tonf (UK) (Ton Force)" && toUnit === "J/cm (Joule/Centimeter)") {
forceResult = inputValue * 1019.7162;
} else if (fromUnit === "J/cm (Joule/Centimeter)" && toUnit === "tonf (UK) (Ton Force)") {
forceResult = inputValue / 1019.7162;
}


//Here are the conversions from tf (Metric Ton Force) to the specified units, using the full unit names.

if (fromUnit === "tf (Metric Ton Force)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue * 1.1023113;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue / 1.1023113;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 35273.962;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue / 35273.962;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 7104.6999;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue / 7104.6999;
} else if (fromUnit === "tf (Metric Ton Force)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue * 2240.9244;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "tf (Metric Ton Force)") {
forceResult = inputValue / 2240.9244;
}

//Here are the conversions from kipf (Kilo Pound Force) to the specified units, using the full unit names.

if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 32000;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue / 32000;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 6.4806379;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue / 6.4806379;
} else if (fromUnit === "kipf (Kilo Pound Force)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue * 1000;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "kipf (Kilo Pound Force)") {
forceResult = inputValue / 1000;
}

//Here are the conversions from ozf (Ounce Force) to the specified units, using the full unit names.

if (fromUnit === "ozf (Ounce Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 0.20299645;
} else if (fromUnit === "pdl (Poundal)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue / 0.20299645;
} else if (fromUnit === "ozf (Ounce Force)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue / 16;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "ozf (Ounce Force)") {
forceResult = inputValue * 16;
}


if (fromUnit === "pdl (Poundal)" && toUnit === "lbf (Pound Force)") {
forceResult = inputValue / 32.174048;
} else if (fromUnit === "lbf (Pound Force)" && toUnit === "pdl (Poundal)") {
forceResult = inputValue * 32.174048;
}

//Note that 1 poundal is equal to 1/32.174048 pound-force, so we're using this conversion factor to switch between the two units.



      document.getElementById("force-result-value").innerHTML = forceResult.toFixed(2);
    } catch (error) {
      document.getElementById("force-result-value").innerHTML = "Error: Cannot perform operation";
    }
  }
  
  
function updateLabels() {
  let fromUnit = document.querySelector('input[name="forceFromUnit"]:checked');
  let toUnit = document.querySelector('input[name="forceToUnit"]:checked');
  
  if (fromUnit && toUnit) {
    document.getElementById("input-Label").innerHTML = `${fromUnit.value}`;
    document.getElementById("result-Label").innerHTML = `${toUnit.value}`;
  }
}

// Call the function to update labels on page load
updateLabels();


