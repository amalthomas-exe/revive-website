// let score = 0; 

//  const maritalRadioInputs = document.querySelectorAll('input[type=radio][name="marital"]')
//  maritalRadioInputs.forEach(input => {
//      input.addEventListener('change', function() {
//          if (this.value === 'married' || this.value === 'common-law') {
//              document.getElementById('marital-accompanying').style.display = 'block';
//          }
//          else{
//             document.getElementById('marital-accompanying').style.display = 'none';
//          }
//      });
//  });

//  const spouseAccompanyingRadioInputs = document.querySelectorAll('input[type=radio][name="marital-accompanying"]')
//     spouseAccompanyingRadioInputs.forEach(input => {
//         input.addEventListener('change', function() {
//             if (this.value === 'marital-accompanying-yes') {
//                 console.log('yes');
//                 document.getElementById('partner-details').style.display = 'block';
//             }
//             else{
//                 document.getElementById('partner-details').style.display = 'none';
//             }
//         });
//     });

// const canadaJobOfferRadioInputs = document.querySelectorAll('input[type=radio][name="canada-empl-offer"]')
// canadaJobOfferRadioInputs.forEach(input => {
//     input.addEventListener('change', function() {
//         if (this.value === 'canada-empl-offer-yes') {
//             document.getElementById('job-type').style.display = 'block';
//         }
//         else{
//             document.getElementById('job-type').style.display = 'none';
//         }
//     });
// });


//marital status
const q1 = document.getElementById("q1");
//spouse or common-law partner a citizen of canada
const q2i = document.getElementById("q2i");
const dq2i = document.getElementById("dq2i");

//spouse or common-law partner come with you
const q2ii = document.getElementById("q2ii");
const dq2ii = document.getElementById("dq2ii");
//How old are you
const q3 = document.getElementById("q3");
const dq3 = document.getElementById("dq3");
//education
const dq4 = document.getElementById("dq4");
const dq4be = document.getElementById("dq4be");
const q4b = document.getElementById("q4b");
const q4c = document.getElementById("q4c");
const dq4c = document.getElementById("dq4c");
//language
const dq5 = document.getElementById("dq5");
const q5i = document.getElementById("q5i");
const dq5i = document.getElementById("dq5i");
const dq5ii = document.getElementById("dq5ii");
const q5ii = document.getElementById("q5ii");
//language selection
const q5ia = document.getElementById("q5ia");
const q5ib = document.getElementById("q5ib");
const q5ic = document.getElementById("q5ic");
const q5id = document.getElementById("q5id");






//for marital status
q1.addEventListener("change", function () {
  
  if (q1.value === "B" || q1.value === "E"){
    //married     
     dq2i.style.display = "block";
     dq3.style.display="none";

  } else {    
    dq3.style.display="block";
    dq2i.style.display = "none";
     }

  });

  //for spouse or common-law partner a citizen of canada
q2i.addEventListener("change", function () {
  
  if (q2i.value === "A"){
     dq2ii.style.display = "block";
     dq3.style.display="block";
     

    } else {    
    dq3.style.display="block";
    dq2ii.style.display = "none";
    
     }

  });
  //how old are you
  q3.addEventListener("change", function () {
  
    if (q3.value !== "badvalue"){ 
        
      dq4.style.display = "block";
      dq4be.style.display = "block";
    }
    
     
  
    });
//education 2
q4b.addEventListener("change", function () {
  
      if (q4b.value === "B"){ 
          
        dq4c.style.display = "block";
        dq5.style.display = "block";
        
      } else {    
        dq4c.style.display = "none";
        dq5.style.display = "block";
        
         }
               
      });
 //education canada     
q4c.addEventListener("change", function () {
  
        if (q4c.value !== "badvalue"){ 
            
          dq5.style.display = "block";
          dq5i.style.display = "block";
          
        }
        
         
      
        });
//language testb
q5i.addEventListener("change", function() {
  if (q5i.value ==="A")
  {
    dq5ii.style.display = "block";
  }else
  {
    dq5ii.style.display="none";
    alert("not applicable")

  }



});        


//language selection          
q5ii.addEventListener("change", function () {
  
            if (q5ii.value === "A"){                 
            q5ia.style.display = "block";
            q5ib.style.display = "none";
            q5ic.style.display = "none";
            q5id.style.display = "none";              
            } 
            else if(q5ii.value === "B")
            {
            q5ib.style.display = "block";           
            q5ia.style.display = "none";
            q5ic.style.display = "none";
            q5id.style.display = "none";              
            }
            else if(q5ii.value === "C")
            {
            q5ic.style.display = "block";
            q5ia.style.display = "none";
            q5ib.style.display = "none";
            q5id.style.display = "none";            
            }
            else if(q5ii.value === "D")
            {
            q5id.style.display = "block";
            q5ia.style.display = "none";
            q5ib.style.display = "none";
            q5ic.style.display = "none";            
            }
    
                     
            }); 