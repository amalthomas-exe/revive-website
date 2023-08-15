let score = 0; 

 const maritalRadioInputs = document.querySelectorAll('input[type=radio][name="marital"]')
 maritalRadioInputs.forEach(input => {
     input.addEventListener('change', function() {
         if (this.value === 'married' || this.value === 'common-law') {
             document.getElementById('marital-accompanying').style.display = 'block';
         }
         else{
            document.getElementById('marital-accompanying').style.display = 'none';
         }
     });
 });

 const spouseAccompanyingRadioInputs = document.querySelectorAll('input[type=radio][name="marital-accompanying"]')
    spouseAccompanyingRadioInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value === 'marital-accompanying-yes') {
                console.log('yes');
                document.getElementById('partner-details').style.display = 'block';
            }
            else{
                document.getElementById('partner-details').style.display = 'none';
            }
        });
    });

const canadaJobOfferRadioInputs = document.querySelectorAll('input[type=radio][name="canada-empl-offer"]')
canadaJobOfferRadioInputs.forEach(input => {
    input.addEventListener('change', function() {
        if (this.value === 'canada-empl-offer-yes') {
            document.getElementById('job-type').style.display = 'block';
        }
        else{
            document.getElementById('job-type').style.display = 'none';
        }
    });
});