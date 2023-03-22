// Wait for the page to load
window.addEventListener("load", function() {
  
  // Get references to the form and its fields
  const form = document.querySelector("form");
  const zipField = document.querySelector("#zip");
  const ageField = document.querySelector("#age");

  // Set the default value of the age field
  ageField.value = "44";

  // When the form is submitted...
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values of the checked radio buttons each time the form is submitted
    const vehiclesField = document.querySelector("input[name='vehicles']:checked");
    const insuredField = document.querySelector("input[name='insured']:checked");
    const homeownerField = document.querySelector("input[name='homeowner']:checked");

    console.log("vehiclesField", vehiclesField);
    console.log("insuredField", insuredField);
    console.log("homeownerField", homeownerField);

    // Get the values of the form fields
    const zipValue = zipField.value;
    const vehiclesValue = vehiclesField ? vehiclesField.value : 0;
    const insuredValue = insuredField ? insuredField.value : 0;
    const homeownerValue = homeownerField ? homeownerField.value : 0;
    const ageValue = ageField.value;

    console.log("zipValue", zipValue);
    console.log("vehiclesValue", vehiclesValue);
    console.log("insuredValue", insuredValue);
    console.log("homeownerValue", homeownerValue);
    console.log("ageValue", ageValue);

    // set the query string
    const queryString = `sp=&zipcode=${zipValue}&insured=${insuredValue}&homeowner=${homeownerValue}&married=&age=${ageValue}&vehicles=${vehiclesValue}&first_name=&last_name=&email=&phone=&dply=&f=0&id=56b022dbd7797283128bbbac02fd72bd&t=1679466770&pt=&pv=YUhSMGNEb3ZMMnh2ZDJWemRDMXhkVzkwWlM1amIyMHZjMlZoY21Ob0wybHVaR1Y0TG5Cb2NEOG1ZV0k5Ykc5M1pYTjBjWFZ2ZEdWZmRtMTFiSFJwWDJOaGNnPT0%3D`;

    console.log("queryString", queryString);

    // Update the form action
    form.action = `https://autoquotepros.com/thank-you/?${queryString}`;

    // Submit the form
    form.submit();
  });

});
