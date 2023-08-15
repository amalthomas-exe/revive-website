 const radioInputs = document.querySelectorAll('input[type=radio][name="marital"]')
 radioInputs.forEach(input => {
     input.addEventListener('change', function() {
         if (this.checked) {
             console.log("Selected value:", this.value);
         }
     });
 });