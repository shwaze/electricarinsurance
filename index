// Wait for the page to load
window.addEventListener("load", function() {
  
  // Get references to the form and its fields
  const form = document.querySelector("form");
  const zipField = document.querySelector("#zip");
  const vehiclesField = document.querySelector("input[name='vehicles']:checked");
  const insuredField = document.querySelector("input[name='insured']:checked");
  const homeownerField = document.querySelector("input[name='homeowner']:checked");
  const ageField = document.querySelector("#age");

  // Set the default value of the age field
  ageField.value = "44";

  // Construct the query string
  let queryString = `sp=&zipcode=${zipField.value}&insured=${insuredField ? insuredField.value : 0}&homeowner=${homeownerField ? homeownerField.value : 0}&married=&age=${ageField.value}&vehicles=${vehiclesField ? vehiclesField.value : 0}&first_name=&last_name=&email=&phone=&dply=&f=0&id=56b022dbd7797283128bbbac02fd72bd&t=1679466770&pt=&pv=YUhSMGNEb3ZMMnh2ZDJWemRDMXhkVzkwWlM1amIyMHZjMlZoY21Ob0wybHVaR1Y0TG5Cb2NEOG1ZV0k5Ykc5M1pYTjBjWFZ2ZEdWZmRtMTFiSFJwWDJOaGNnPT0%3D`;

  // When the form is submitted...
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values of the form fields
    const zipValue = zipField.value;
    const vehiclesValue = vehiclesField ? vehiclesField.value : 0;
    const insuredValue = insuredField ? insuredField.value : 0;
    const homeownerValue = homeownerField ? homeownerField.value : 0;
    const ageValue = ageField.value;

    // Update the query string
    queryString = `sp=&zipcode=${zipValue}&insured=${insuredValue}&homeowner=${homeownerValue}&married=&age=${ageValue}&vehicles=${vehiclesValue}&first_name=&last_name=&email=&phone=&dply=&f=0&id=56b022dbd7797283128bbbac02fd72bd&t=1679466770&pt=&pv=YUhSMGNEb3ZMMnh2ZDJWemRDMXhkVzkwWlM1amIyMHZjMlZoY21Ob0wybHVaR1Y0TG5Cb2NEOG1ZV0k5Ykc5M1pYTjBjWFZ2ZEdWZmRtMTFiSFJwWDJOaGNnPT0%3D`;

    // Update the form action
    form.action = `https://autoquotepros.com/thank-you/?${queryString}`;

    // Submit the form
    form.submit();
  });

});
