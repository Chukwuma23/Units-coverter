let distance = document.getElementById('distance-container');
let menu = document.getElementById('menu');
let jum = document.getElementById('Jumbotron');
function openDistance() {
  if  (distance.style.right = '0'){
    menu.style.left = '-360px';
    jum.style.left = '-360px';
    
};
    
};

function closeDistance() {
  if  (distance.style.right = '-360px'){
    menu.style.left = '0px';
    jum.style.left = '0';
    
};
    
};



function convert() {
      try {
          
    
        let inputValue = parseFloat(document.getElementById("inputValue").value);
        if (isNaN(inputValue)) {
          document.getElementById("result").innerHTML.display = "none";
          return;
        }
        let fromUnit = document.querySelector('input[name="fromUnit"]:checked').value;
        let toUnit = document.querySelector('input[name="toUnit"]:checked').value;


document.querySelectorAll('input[name="fromUnit"], input[name="toUnit"]').forEach(function(radio) {
  radio.addEventListener('change', convert);
});

        // Convert the length based on the selected units
        var result;
        
        if (fromUnit === "CM" && toUnit === "Inch") {
    result = inputValue / 2.54;
  } else if (fromUnit === "Inch" && toUnit === "CM") {
    result = inputValue * 2.54;
    
  }else if (fromUnit === "CM" && toUnit === "CM") {
    result = inputValue;
  }else if (fromUnit === "CM" && toUnit === "Feet") {
    result = inputValue / 30.48;
  } else if (fromUnit === "Feet" && toUnit === "CM") {
    result = inputValue * 30.48;
  } else if (fromUnit === "CM" && toUnit === "Meter") {
    result = inputValue / 100;
  } else if (fromUnit === "Meter" && toUnit === "CM") {
    result = inputValue * 100;
  } else if (fromUnit === "Inch" && toUnit === "Feet") {
    result = inputValue / 12;
  } else if (fromUnit === "Feet" && toUnit === "Inch") {
    result = inputValue * 12;
  }else if (fromUnit === "Inch" && toUnit === "Inch") {
    result = inputValue;
  }  else if (fromUnit === "Inch" && toUnit === "Meter") {
    result = inputValue * 0.0254;
  } else if (fromUnit === "Meter" && toUnit === "Inch") {
    result = inputValue / 0.0254;
  } else if (fromUnit === "Feet" && toUnit === "Meter") {
    result = inputValue * 0.3048;
  } else if (fromUnit === "Meter" && toUnit === "Feet") {
    result = inputValue / 0.3048;
  } else if (fromUnit === "CM" && toUnit === "Yard") {
    result = inputValue / 91.44;
  } else if (fromUnit === "Yard" && toUnit === "CM") {
    result = inputValue * 91.44;
  } else if (fromUnit === "CM" && toUnit === "Mile") {
    result = inputValue / 160934.4;
  } else if (fromUnit === "Mile" && toUnit === "CM") {
    result = inputValue * 160934.4;
  } else if (fromUnit === "CM" && toUnit === "Kilometer") {
    result = inputValue / 100000;
  } else if (fromUnit === "Kilometer" && toUnit === "CM") {
    result = inputValue * 100000;
  } else if (fromUnit === "Inch" && toUnit === "Yard") {
    result = inputValue / 36;
  } else if (fromUnit === "yard" && toUnit === "Inch") {
    result = inputValue * 36;
  } else if (fromUnit === "Inch" && toUnit === "Mile") {
    result = inputValue / 63360;
  } else if (fromUnit === "Mile" && toUnit === "Inch") {
    result = inputValue * 63360;
  } else if (fromUnit === "Inch" && toUnit === "Kilometer") {
    result = inputValue * 0.0000254;
  } else if (fromUnit === "kilometer" && toUnit === "Inch") {
    result = inputValue / 0.0000254;
  } else if (fromUnit === "Feet" && toUnit === "Yard") {
    result = inputValue / 3;
  } else if (fromUnit === "Yard" && toUnit === "Feet") {
    result = inputValue * 3;
  } else if (fromUnit === "Feet" && toUnit === "Mile") {
    result = inputValue / 5280;
  } else if (fromUnit === "Mile" && toUnit === "Feet") {
    result = inputValue * 5280;
  } else if (fromUnit === "Feet" && toUnit === "Kilometer") {
    result = inputValue * 0.0003048;
  } else if (fromUnit === "Kilometer" && toUnit === "Feet") {
    result = inputValue / 0.0003048;
  } else if (fromUnit === "Meter" && toUnit === "Yard") {
    result = inputValue * 1.09361;
  } else if (fromUnit === "Yard" && toUnit === "Meter") {
    result = inputValue / 1.093

}else if (fromUnit === "Meter" && toUnit === "Kilometer") {
    result = inputValue / 1000

}else if (fromUnit === "kilometer" && toUnit === "Meter") {
    result = inputValue * 1000
    }
    
    
    //CENTIMETER
    

else if (fromUnit === "CM" && toUnit === "Decimeter") {
  result = inputValue * 0.1;
} else if (fromUnit === "Decimeter" && toUnit === "CM") {
  result = inputValue / 0.1;
} else if (fromUnit === "CM" && toUnit === "Miles") {
  result = inputValue * 0.0000062137;
} else if (fromUnit === "Miles" && toUnit === "CM") {
  result = inputValue / 0.0000062137;
} else if (fromUnit === "CM" && toUnit === "Nanometer") {
  result = inputValue * 10000000;
} else if (fromUnit === "Nanometer" && toUnit === "CM") {
  result = inputValue / 10000000;
} else if (fromUnit === "CM" && toUnit === "Nautical") {
  result = inputValue * 0.0000053995;
} else if (fromUnit === "Nautical" && toUnit === "CM") {
  result = inputValue / 0.0000053995;
} else if (fromUnit === "CM" && toUnit === "Furlong") {
  result = inputValue *0.0000497097 ;
} else if (fromUnit === "Furlong" && toUnit === "CM") {
  result = inputValue * 20116.8;
} else if (fromUnit === "CM" && toUnit === "Light year") {
  result = inputValue / 9.46e17;
  result = result.toFixed(10); // to show the very small value
} else if (fromUnit === "Light year" && toUnit === "CM") {
  result = inputValue * 9.46e17;


} else if (fromUnit === "CM" && toUnit === "Storey") {
  result = inputValue / 330;
} else if (fromUnit === "Storey" && toUnit === "CM") {
  result = inputValue * 330;
} else if (fromUnit === "CM" && toUnit === "Cubit") {
  result = inputValue *0.0222;
} else if (fromUnit === "Cubit" && toUnit === "CM") {
  result = inputValue / 0.0222;
}else if (fromUnit === "CM" && toUnit === "Micrometer") {
  result = inputValue * 10000;
} else if (fromUnit === "Micrometer" && toUnit === "CM") {
  result = inputValue / 10000;
}

  
// New units
//HECTOMETER
// Hectometer to...
else if (fromUnit === "Hectometer" && toUnit === "Kilometer") {
  result = inputValue / 10;
} else if (fromUnit === "Kilometer" && toUnit === "Hectometer") {
  result = inputValue * 10;
}
else if (fromUnit === "Hectometer" && toUnit === "Decimeter") {
  result = inputValue * 1000;
} else if (fromUnit === "Decimeter" && toUnit === "Hectometer") {
  result = inputValue / 1000;
}
else if (fromUnit === "Hectometer" && toUnit === "Miles") {
  result = inputValue / 10.936;
} else if (fromUnit === "Miles" && toUnit === "Hectometer") {
  result = inputValue * 10.936;
}
else if (fromUnit === "Hectometer" && toUnit === "Inch") {
  result = inputValue / 0.0003;
} else if (fromUnit === "Inch" && toUnit === "Hectometer") {
  result = inputValue * 0.0003;
}
else if (fromUnit === "Hectometer" && toUnit === "Feet") {
  result = inputValue * 3280.84;
} else if (fromUnit === "Feet" && toUnit === "Hectometer") {
  result = inputValue / 3280.84;
}
else if (fromUnit === "Hectometer" && toUnit === "Light Year") {
  result = inputValue / 9.461e9;
} else if (fromUnit === "Light Year" && toUnit === "Hectometer") {
  result = inputValue * 9.461e9;
}
else if (fromUnit === "Hectometer" && toUnit === "Storey") {
  result = inputValue / 3.048;
} else if (fromUnit === "Storey" && toUnit === "Hectometer") {
  result = inputValue * 3.048;
}
else if (fromUnit === "Hectometer" && toUnit === "Furlong") {
  result = inputValue / 21.17;
} else if (fromUnit === "Furlong" && toUnit === "Hectometer") {
  result = inputValue * 21.17;
}
else if (fromUnit === "Hectometer" && toUnit === "Cubit") {
  result = inputValue / 0.4572;
} else if (fromUnit === "Cubit" && toUnit === "Hectometer") {
  result = inputValue * 0.4572;
}
else if (fromUnit === "Hectometer" && toUnit === "Millimeter") {
  result = inputValue * 100000;
} else if (fromUnit === "Millimeter" && toUnit === "Hectometer") {
  result = inputValue / 100000;
}
else if (fromUnit === "Hectometer" && toUnit === "Meter") {
  result = inputValue * 100;
} else if (fromUnit === "Meter" && toUnit === "Hectometer") {
  result = inputValue / 100;
}
else if (fromUnit === "Hectometer" && toUnit === "Hectometer") {
  result = inputValue;
}
// Hectometer conversions
  else if (fromUnit === "Hectometer" && toUnit === "Decimeter") {
    result = inputValue * 1000;
  } else if (fromUnit === "Decimeter" && toUnit === "Hectometer") {
    result = inputValue / 1000;
  } else if (fromUnit === "Hectometer" && toUnit === "Micrometer") {
    result = inputValue * 100000000;
  } else if (fromUnit === "Micrometer" && toUnit === "Hectometer") {
    result = inputValue / 100000000;
  } else if (fromUnit === "Hectometer" && toUnit === "Nanometer") {
    result = inputValue * 100000000000;
  } else if (fromUnit === "Nanometer" && toUnit === "Hectometer") {
    result = inputValue / 100000000000;
  } else if (fromUnit === "Hectometer" && toUnit === "Nautical") {
    result = inputValue / 10.936;
  } else if (fromUnit === "Nautical" && toUnit === "Hectometer") {
    result = inputValue * 10.936;
  } else if (fromUnit === "Hectometer" && toUnit === "Furlong") {
    result = inputValue * 21.17;
  } else if (fromUnit === "Furlong" && toUnit === "Hectometer") {
    result = inputValue / 21.17;
  } else if (fromUnit === "Hectometer" && toUnit === "Light Year") {
    result = inputValue / 9.461e12;
  } else if (fromUnit === "Light Year" && toUnit === "Hectometer") {
    result = inputValue * 9.461e12;
  } else if (fromUnit === "Hectometer" && toUnit === "Storey") {
    result = inputValue / 3.048;
  } else if (fromUnit === "Storey" && toUnit === "Hectometer") {
    result = inputValue * 3.048;
  } else if (fromUnit === "Hectometer" && toUnit === "Cubit") {
    result = inputValue / 0.4572;
  } else if (fromUnit === "Cubit" && toUnit === "Hectometer") {
    result = inputValue * 0.4572;
   }else if (fromUnit === "Hectometer" && toUnit === "CM") {
  result = inputValue * 100000;
} else if (fromUnit === "CM" && toUnit === "Hectometer") {
  result = inputValue / 100000;
} else if (fromUnit === "Hectometer" && toUnit === "Yard") {
  result = inputValue * 109.361;
} else if (fromUnit === "Yard" && toUnit === "Hectometer") {
  result = inputValue / 109.361;
} else if (fromUnit === "Hectometer" && toUnit === "Nautical") {
  result = inputValue * 0.053995;
} else if (fromUnit === "Nautical" && toUnit === "Hectometer") {
  result = inputValue / 0.053995;
} else if (fromUnit === "Hectometer" && toUnit === "Light year") {
  result = inputValue * 0.0000000001057;
} else if (fromUnit === "Light year" && toUnit === "Hectometer") {
  result = inputValue / 0.0000000001057;
}

//Inch


else if (fromUnit === "Inch" && toUnit === "Miles") {
  result = inputValue * 0.000015783;
} else if (fromUnit === "Miles" && toUnit === "Inch") {
  result = inputValue / 0.000015783;
} else if (fromUnit === "Inch" && toUnit === "Decimeter") {
  result = inputValue * 0.254;
} else if (fromUnit === "Decimeter" && toUnit === "Inch") {
  result = inputValue / 0.254;
} else if (fromUnit === "Inch" && toUnit === "Micrometer") {
  result = inputValue * 25400;
} else if (fromUnit === "Micrometer" && toUnit === "Inch") {
  result = inputValue / 25400;
} else if (fromUnit === "Inch" && toUnit === "Nanometer") {
  result = inputValue * 25400000;
} else if (fromUnit === "Nanometer" && toUnit === "Inch") {
  result = inputValue / 25400000;
} else if (fromUnit === "Inch" && toUnit === "Nautical") {
  result = inputValue * 0.000014081;
} else if (fromUnit === "Nautical" && toUnit === "Inch") {
  result = inputValue / 0.000014081;
} else if (fromUnit === "Inch" && toUnit === "Furlong") {
  result = inputValue * 0.0000201168;
} else if (fromUnit === "Furlong" && toUnit === "Inch") {
  result = inputValue / 0.0000201168;
} else if (fromUnit === "Inch" && toUnit === "Light year") {
  result = inputValue * 0.00000000001596;
} else if (fromUnit === "Light year" && toUnit === "Inch") {
  result = inputValue / 0.00000000001596;
} else if (fromUnit === "Inch" && toUnit === "Storey") {
  result = inputValue * 0.00083333;
} else if (fromUnit === "Storey" && toUnit === "Inch") {
  result = inputValue / 0.00083333;
} else if (fromUnit === "Inch" && toUnit === "Cubit") {
  result = inputValue * 0.0277778;
} else if (fromUnit === "Cubit" && toUnit === "Inch") {
  result = inputValue / 0.0277778;
}


//feet

else if (fromUnit === "Feet" && toUnit === "Miles") {
  result = inputValue * 0.000189394;
} else if (fromUnit === "Miles" && toUnit === "Feet") {
  result = inputValue / 0.000189394;
} else if (fromUnit === "Feet" && toUnit === "Decimeter") {
  result = inputValue * 30.48;
} else if (fromUnit === "Decimeter" && toUnit === "Feet") {
  result = inputValue / 30.48;
} else if (fromUnit === "Feet" && toUnit === "Micrometer") {
  result = inputValue * 304800;
} else if (fromUnit === "Micrometer" && toUnit === "Feet") {
  result = inputValue / 304800;
} else if (fromUnit === "Feet" && toUnit === "Nanometer") {
  result = inputValue * 304800000;
} else if (fromUnit === "Nanometer" && toUnit === "Feet") {
  result = inputValue / 304800000;
} else if (fromUnit === "Feet" && toUnit === "Furlong") {
  result = inputValue * 0.000166667;
} else if (fromUnit === "Furlong" && toUnit === "Feet") {
  result = inputValue / 0.000166667;
} else if (fromUnit === "Feet" && toUnit === "Light year") {
  result = inputValue * 0.00000000003169;
} else if (fromUnit === "Light year" && toUnit === "Feet") {
  result = inputValue / 0.00000000003169;
} else if (fromUnit === "Feet" && toUnit === "Storey") {
  result = inputValue * 0.0328084;
} else if (fromUnit === "Storey" && toUnit === "Feet") {
  result = inputValue / 0.0328084;
} else if (fromUnit === "Feet" && toUnit === "Cubit") {
  result = inputValue * 0.590551;
} else if (fromUnit === "Cubit" && toUnit === "Feet") {
  result = inputValue / 0.590551;
}else if (fromUnit === "Feet" && toUnit === "Nautical") {
  result = inputValue * 0.000164579;
} else if (fromUnit === "Nautical" && toUnit === "Feet") {
  result = inputValue / 0.000164579;
}




  /*// Hectometer conversions
  if (fromUnit === "Hectometer" && toUnit === "Decimeter") {
    result = inputValue * 1000;
  } else if (fromUnit === "Decimeter" && toUnit === "Hectometer") {
    result = inputValue / 1000;
  } else if (fromUnit === "Hectometer" && toUnit === "Micrometer") {
    result = inputValue * 100000000;
  } else if (fromUnit === "Micrometer" && toUnit === "Hectometer") {
    result = inputValue / 100000000;
  } */
  
  // Decimeter conversions
  else if (fromUnit === "Decimeter" && toUnit === "Micrometer") {
    result = inputValue * 10000;
  } else if (fromUnit === "Micrometer" && toUnit === "Decimeter") {
    result = inputValue / 10000;
  } else if (fromUnit === "Decimeter" && toUnit === "Nanometer") {
    result = inputValue * 10000000;
  } else if (fromUnit === "Nanometer" && toUnit === "Decimeter") {
    result = inputValue / 10000000;
  } 
  
  // Micrometer conversions
  else if (fromUnit === "Micrometer" && toUnit === "Furlong") {
    result = inputValue *  4.970969537e-8;
  } else if (fromUnit === "Furlong" && toUnit === "Micrometer") {
    result = inputValue /  4.970969537e-8;
  } else if (fromUnit === "Micrometer" && toUnit === "Light year") {
    result = inputValue * 0.0000000000001057;
  } else if (fromUnit === "Light year" && toUnit === "Micrometer") {
    result = inputValue / 0.0000000000001057;
  } else if (fromUnit === "Micrometer" && toUnit === "Storey") {
    result = inputValue * 0.0000003281;
  } else if (fromUnit === "Storey" && toUnit === "Micrometer") {
    result = inputValue / 0.0000003281;
  } else if (fromUnit === "Micrometer" && toUnit === "Cubit") {
    result = inputValue * 0.000001906;
  } else if (fromUnit === "Cubit" && toUnit === "Micrometer") {
    result = inputValue / 0.000001906;
  
  
  
  

  
  }else if (fromUnit === "Micrometer" && toUnit === "Nanometer") {
    result = inputValue * 1000;
  } else if (fromUnit === "Nanometer" && toUnit === "Micrometer") {
    result = inputValue / 1000;
  } else if (fromUnit === "Micrometer" && toUnit === "Nautical") {
    result = inputValue / 1.852e7;
  } else if (fromUnit === "Nautical" && toUnit === "Micrometer") {
    result = inputValue * 1.852e7;
  } 
  
  // Nanometer conversions
  if (fromUnit === "Nanometer" && toUnit === "Light year") {
    result = inputValue * 0.0000000000000001057;
  } else if (fromUnit === "Light year" && toUnit === "Nanometer") {
    result = inputValue / 0.0000000000000001057;
  } else if (fromUnit === "Nanometer" && toUnit === "Storey") {
    result = inputValue * 0.0000000003281;
  } else if (fromUnit === "Storey" && toUnit === "Nanometer") {
    result = inputValue / 0.0000000003281;
  } else if (fromUnit === "Nanometer" && toUnit === "Cubit") {
    result = inputValue * 0.000000000001906;
  } else if (fromUnit === "Cubit" && toUnit === "Nanometer") {
    result = inputValue / 0.000000000001906;

  }else if (fromUnit === "Nanometer" && toUnit === "Nautical") {
    result = inputValue / 1.852e10;
  } else if (fromUnit === "Nautical" && toUnit === "Nanometer") {
    result = inputValue * 1.852e10;
  } else if (fromUnit === "Nanometer" && toUnit === "Furlong") {
    result = inputValue / 2.01168e10;
  } else if (fromUnit === "Furlong" && toUnit === "Nanometer") {
    result = inputValue * 2.01168e10;
  } 
  
  // Nautical Mile conversions
  else if (fromUnit === "Nautical" && toUnit === "Light year") {
    result = inputValue * 0.0000000001955;
  } else if (fromUnit === "Light year" && toUnit === "Nautical") {
    result = inputValue / 0.0000000001955;
  } else if (fromUnit === "Nautical" && toUnit === "Storey") {
    result = inputValue * 607.35;
  } else if (fromUnit === "Storey" && toUnit === "Nautical") {
    result = inputValue / 607.35;
  } else if (fromUnit === "Nautical" && toUnit === "Cubit") {
    result = inputValue * 3535.17;
  } else if (fromUnit === "Cubit" && toUnit === "Nautical") {
    result = inputValue / 3535.17;
  }else if (fromUnit === "Nautical" && toUnit === "Furlong") {
    result = inputValue * 1.15078;
  } else if (fromUnit === "Furlong" && toUnit === "Nautical ") {
    result = inputValue / 1.15078;
  } else if (fromUnit === "Nautical" && toUnit === "Light year") {
    result = inputValue / 5.879e12;
  } else if (fromUnit === "Light year" && toUnit === "Nautical") {
    result = inputValue * 5.879e12;
  } 
  
  // Furlong conversions
 else if (fromUnit === "Furlong" && toUnit === "Micrometer") {
    result = inputValue * 201168000;
  } else if (fromUnit === "Micrometer" && toUnit === "Furlong") {
    result = inputValue / 201168000;
  } else if (fromUnit === "Furlong" && toUnit === "Nautical") {
    result = inputValue * 0.1086;
  } else if (fromUnit === "Nautical" && toUnit === "Furlong") {
    result = inputValue / 0.1086;
  } else if (fromUnit === "Furlong" && toUnit === "Light Year") {
    result = inputValue * 0.0000000000213;
  } else if (fromUnit === "Light Year" && toUnit === "Furlong") {
    result = inputValue / 0.0000000000213;
  } else if (fromUnit === "Furlong" && toUnit === "Cubit") {
    result = inputValue * 384.33;
  } else if (fromUnit === "Cubit" && toUnit === "Furlong") {
    result = inputValue / 384.33;
  }else if (fromUnit === "Furlong" && toUnit === "Light year") {
    result = inputValue / 5.101e12;
  } else if (fromUnit === "Light year" && toUnit === "Furlong") {
    result = inputValue * 5.101e12;
  } else if (fromUnit === "Furlong" && toUnit === "Storey") {
    result = inputValue * 220;
  } else if (fromUnit === "Storey" && toUnit === "Furlong") {
    result = inputValue / 220;
  } 
  
  // Light Year conversions
  else if (fromUnit === "Light Year" && toUnit === "Story Cubit") {
  result = inputValue * 1.057723438e22;
} else if (fromUnit === "Story Cubit" && toUnit === "Light Year") {
  result = inputValue / 1.057723438e22;
}

  else if (fromUnit === "Light Year" && toUnit === "Storey") {
    result = inputValue * 1.057e16;
  } else if (fromUnit === "Storey" && toUnit === "Light Year") {
    result = inputValue / 1.057e16;
  } else if (fromUnit === "Light Year" && toUnit === "Cubit") {
    result = inputValue * 1.057e16;
  } 
else if (fromUnit === "Light year" && toUnit === "Cubit") {
  result = inputValue * 5.880674e16;
} else if (fromUnit === "Cubit" && toUnit === "Light year") {
  result = inputValue / 5.880674e16;
}
else if (fromUnit === "Light year" && toUnit === "Storey") {
  result = inputValue * 3.436e14;
} else if (fromUnit === "Storey" && toUnit === "Light year") {
  result = inputValue / 3.436e14;
}

//STOREY

else if (fromUnit === "Storey" && toUnit === "Cubit") {
  result = inputValue * 1706.86;
} else if (fromUnit === "Cubit" && toUnit === "Storey") {
  result = inputValue / 1706.86;
}

//METER

else if (fromUnit === "Meter" && toUnit === "Miles") {
  result = inputValue * 0.000621371;
} else if (fromUnit === "Miles" && toUnit === "Meter") {
  result = inputValue / 0.000621371;
} else if (fromUnit === "Meter" && toUnit === "Decimeter") {
  result = inputValue * 10;
} else if (fromUnit === "Decimeter" && toUnit === "Meter") {
  result = inputValue / 10;
} else if (fromUnit === "Meter" && toUnit === "Micrometer") {
  result = inputValue * 1000000;
} else if (fromUnit === "Micrometer" && toUnit === "Meter") {
  result = inputValue / 1000000;
} else if (fromUnit === "Meter" && toUnit === "Nanometer") {
  result = inputValue * 1000000000;
} else if (fromUnit === "Nanometer" && toUnit === "Meter") {
  result = inputValue / 1000000000;
} else if (fromUnit === "Meter" && toUnit === "Nautical") {
  result = inputValue * 0.000539957;
} else if (fromUnit === "Nautical" && toUnit === "Meter") {
  result = inputValue / 0.000539957;
} else if (fromUnit === "Meter" && toUnit === "Furlong") {
  result = inputValue * 0.00497096;
} else if (fromUnit === "Furlong" && toUnit === "Meter") {
  result = inputValue / 0.00497096;
} else if (fromUnit === "Meter" && toUnit === "Light year") {
  result = inputValue * 0.0000000001057;
} else if (fromUnit === "Light year" && toUnit === "Meter") {
  result = inputValue / 0.0000000001057;
} else if (fromUnit === "Meter" && toUnit === "Storey") {
  result = inputValue * 0.328084;
} else if (fromUnit === "Storey" && toUnit === "Meter") {
  result = inputValue / 0.328084;
} else if (fromUnit === "Meter" && toUnit === "Cubit") {
  result = inputValue * 1.82882;
} else if (fromUnit === "Cubit" && toUnit === "Meter") {
  result = inputValue / 1.82882;
}

//YARD 

else if (fromUnit === "Yard" && toUnit === "Inch") {
  result = inputValue * 36;
} else if (fromUnit === "Inch" && toUnit === "Yard") {
  result = inputValue / 36;
} else if (fromUnit === "Yard" && toUnit === "Miles") {
  result = inputValue * 0.000568182;
} else if (fromUnit === "Miles" && toUnit === "Yard") {
  result = inputValue / 0.000568182;
} else if (fromUnit === "Yard" && toUnit === "Kilometer") {
  result = inputValue * 0.0009144;
} else if (fromUnit === "Kilometer" && toUnit === "Yard") {
  result = inputValue / 0.0009144;
} else if (fromUnit === "Yard" && toUnit === "Decimeter") {
  result = inputValue * 9.144;
} else if (fromUnit === "Decimeter" && toUnit === "Yard") {
  result = inputValue / 9.144;
} else if (fromUnit === "Yard" && toUnit === "Micrometer") {
  result = inputValue * 914400;
} else if (fromUnit === "Micrometer" && toUnit === "Yard") {
  result = inputValue / 914400;
} else if (fromUnit === "Yard" && toUnit === "Nanometer") {
  result = inputValue * 914400000;
} else if (fromUnit === "Nanometer" && toUnit === "Yard") {
  result = inputValue / 914400000;
} else if (fromUnit === "Yard" && toUnit === "Nautical") {
  result = inputValue * 0.000493738;
} else if (fromUnit === "Nautical" && toUnit === "Yard") {
  result = inputValue / 0.000493738;
} else if (fromUnit === "Yard" && toUnit === "Furlong") {
  result = inputValue * 0.00568182;
} else if (fromUnit === "Furlong" && toUnit === "Yard") {
  result = inputValue / 0.00568182;
} else if (fromUnit === "Yard" && toUnit === "Light year") {
  result = inputValue * 0.0000000000963;
} else if (fromUnit === "Light year" && toUnit === "Yard") {
  result = inputValue / 0.0000000000963;
} else if (fromUnit === "Yard" && toUnit === "Storey") {
  result = inputValue * 0.333333;
} else if (fromUnit === "Storey" && toUnit === "Yard") {
  result = inputValue / 0.333333;
} else if (fromUnit === "Yard" && toUnit === "Cubit") {
  result = inputValue * 1.77778;
} else if (fromUnit === "Cubit" && toUnit === "Yard") {
  result = inputValue / 1.77778;
}

//Miles

else if (fromUnit === "Miles" && toUnit === "Meter") {
  result = inputValue * 1609.34;
} else if (fromUnit === "Meter" && toUnit === "Miles") {
  result = inputValue / 1609.34;
} else if (fromUnit === "Miles" && toUnit === "Yard") {
  result = inputValue * 1760;
} else if (fromUnit === "Yard" && toUnit === "Miles") {
  result = inputValue / 1760;
} else if (fromUnit === "Miles" && toUnit === "Kilometer") {
  result = inputValue * 1.60934;
} else if (fromUnit === "Kilometer" && toUnit === "Miles") {
  result = inputValue / 1.60934;
} else if (fromUnit === "Miles" && toUnit === "Hectometer") {
  result = inputValue * 16.0934;
} else if (fromUnit === "Hectometer" && toUnit === "Miles") {
  result = inputValue / 16.0934;
} else if (fromUnit === "Miles" && toUnit === "Decimeter") {
  result = inputValue * 16093.4;
} else if (fromUnit === "Decimeter" && toUnit === "Miles") {
  result = inputValue / 16093.4;
} else if (fromUnit === "Miles" && toUnit === "Micrometer") {
  result = inputValue * 1609340000;
} else if (fromUnit === "Micrometer" && toUnit === "Miles") {
  result = inputValue / 1609340000;
} else if (fromUnit === "Miles" && toUnit === "Nanometer") {
  result = inputValue * 1609340000000;
} else if (fromUnit === "Nanometer" && toUnit === "Miles") {
  result = inputValue / 1609340000000;
} else if (fromUnit === "Miles" && toUnit === "Nautical") {
  result = inputValue * 0.868976;
} else if (fromUnit === "Nautical" && toUnit === "Miles") {
  result = inputValue / 0.868976;
} else if (fromUnit === "Miles" && toUnit === "Furlong") {
  result = inputValue * 8;
} else if (fromUnit === "Furlong" && toUnit === "Miles") {
  result = inputValue / 8;
} else if (fromUnit === "Miles" && toUnit === "Light year") {
  result = inputValue * 0.00000001693;
} else if (fromUnit === "Light year" && toUnit === "Miles") {
  result = inputValue / 0.00000001693;
} else if (fromUnit === "Miles" && toUnit === "Storey") {
  result = inputValue * 528.333;
} else if (fromUnit === "Storey" && toUnit === "Miles") {
  result = inputValue / 528.333;
} else if (fromUnit === "Miles" && toUnit === "Cubit") {
  result = inputValue * 2833.33;
} else if (fromUnit === "Cubit" && toUnit === "Miles") {
  result = inputValue / 2833.33;
}

//Kilometer

if (fromUnit === "Kilometer" && toUnit === "Inch") {
  result = inputValue * 39370.08;
} else if (fromUnit === "Inch" && toUnit === "Kilometer") {
  result = inputValue / 39370.08;
} else if (fromUnit === "Kilometer" && toUnit === "Meter") {
  result = inputValue * 1000;
} else if (fromUnit === "Meter" && toUnit === "Kilometer") {
  result = inputValue / 1000;
} else if (fromUnit === "Kilometer" && toUnit === "Decimeter") {
  result = inputValue * 10000;
} else if (fromUnit === "Decimeter" && toUnit === "Kilometer") {
  result = inputValue / 10000;
} else if (fromUnit === "Kilometer" && toUnit === "Micrometer") {
  result = inputValue * 1000000000;
} else if (fromUnit === "Micrometer" && toUnit === "Kilometer") {
  result = inputValue / 1000000000;
} else if (fromUnit === "Kilometer" && toUnit === "Nanometer") {
  result = inputValue * 1000000000000;
} else if (fromUnit === "Nanometer" && toUnit === "Kilometer") {
  result = inputValue / 1000000000000;
} else if (fromUnit === "Kilometer" && toUnit === "Nautical") {
  result = inputValue * 0.539957;
} else if (fromUnit === "Nautical" && toUnit === "Kilometer") {
  result = inputValue / 0.539957;
} else if (fromUnit === "Kilometer" && toUnit === "Furlong") {
  result = inputValue * 4.97096;
} else if (fromUnit === "Furlong" && toUnit === "Kilometer") {
  result = inputValue / 4.97096;
} else if (fromUnit === "Kilometer" && toUnit === "Light year") {
  result = inputValue * 0.0000000001057;
} else if (fromUnit === "Light year" && toUnit === "Kilometer") {
  result = inputValue / 0.0000000001057;
} else if (fromUnit === "Kilometer" && toUnit === "Storey") {
  result = inputValue * 328.084;
} else if (fromUnit === "Storey" && toUnit === "Kilometer") {
  result = inputValue / 328.084;
} else if (fromUnit === "Kilometer" && toUnit === "Cubit") {
  result = inputValue * 17778.8;
} else if (fromUnit === "Cubit" && toUnit === "Kilometer") {
  result = inputValue / 17778.8;
}

//DECIMETER 

else if (fromUnit === "Decimeter" && toUnit === "Nautical") {
  result = inputValue * 0.0000539957;
} else if (fromUnit === "Nautical" && toUnit === "Decimeter") {
  result = inputValue / 0.0000539957;
} else if (fromUnit === "Decimeter" && toUnit === "Furlong") {
  result = inputValue * 0.000497096;
} else if (fromUnit === "Furlong" && toUnit === "Decimeter") {
  result = inputValue / 0.000497096;
} else if (fromUnit === "Decimeter" && toUnit === "Light year") {
  result = inputValue * 0.00000000001057;
} else if (fromUnit === "Light year" && toUnit === "Decimeter") {
  result = inputValue / 0.00000000001057;
} else if (fromUnit === "Decimeter" && toUnit === "Storey") {
  result = inputValue * 0.0328084;
} else if (fromUnit === "Storey" && toUnit === "Decimeter") {
  result = inputValue / 0.0328084;
}

else if (fromUnit === "Cubit" && toUnit === "Decimeter") {
  result = inputValue * 44.7;
} else if (fromUnit === "Decimeter" && toUnit === "Cubit") {
  result = inputValue / 44.7;
}




    document.getElementById("result-value").innerHTML = result;//.toFixed(4);
  } catch (error) {
    
    document.getElementById("result-value").value = "Error: Cannot perform operation";
  }
 
}


function updateLabels() {
  let fromUnit = document.querySelector('input[name="fromUnit"]:checked').value;
  let toUnit = document.querySelector('input[name="toUnit"]:checked').value;
  document.getElementById("dis-input-label").innerHTML = `${fromUnit}`;
  document.getElementById("dis-result-label").innerHTML = `${toUnit}`;
};

// Call the function to update labels on page load
updateLabels();

// Add event listeners to update labels when units change
document.querySelectorAll('input[name="fromUnit"], input[name="toUnit"]').forEach(function(radio) {
  radio.addEventListener('change', updateLabels);
});














  // Nanometer conversions
  
  // Nautical Mile conversions
  

  // Furlong conversions
  

  // Decimeter conversions
  //if (fromUnit === "Decimeter" && toUnit === "Cubit")
