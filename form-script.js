// Wait for the page to load
window.addEventListener("load", function() {

  // Get references to the form and its fields
  const form = document.querySelector("form");
  const zipField = document.querySelector("#zip");
  const vehiclesField = document.querySelector("input[name='vehicles']:checked");
  let insuredField = getRadioValue("insured");
  let homeownerField = getRadioValue("homeowner");
  const ageField = document.querySelector("#age");

  // Set the default value of the age field
  ageField.value = "44";

  // Construct the query string
  let queryString = `sp=&zipcode=${zipField.value}&insured=${insuredField}&homeowner=${homeownerField}&married=&age=${ageField.value}&vehicles=${vehiclesField ? vehiclesField.value : 0}&first_name=&last_name=&email=&phone=&dply=&f=0&id=56b022dbd7797283128bbbac02fd72bd&t=1679466770&pt=&pv=YUhSMGNEb3ZMMnh2ZDJWemRDMXhkVzkwWlM1amIyMHZjMlZoY21Ob0wybHVaR1Y0TG5Cb2NEOG1ZV0k5Ykc5M1pYTjBjWFZ2ZEdWZmRtMTFiSFJwWDJOaGNnPT0%3D`;

  // When the form is submitted...
  form.addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the values of the form fields
    const zipValue = zipField.value;
    const vehiclesValue = vehiclesField ? vehiclesField.value : 0;
    const insuredValue = insuredField;
    const homeownerValue = homeownerField;
    const ageValue = ageField.value;

    // Update the query string
    queryString = `sp=&zipcode=${zipValue}&insured=${insuredValue}&homeowner=${homeownerValue}&married=&age=${ageValue}&vehicles=${vehiclesValue}&first_name=&last_name=&email=&phone=&dply=&f=0&id=56b022dbd7797283128bbbac02fd72bd&t=1679466770&pt=&pv=YUhSMGNEb3ZMMnh2ZDJWemRDMXhkVzkwWlM1amIyMHZjMlZoY21Ob0wybHVaR1Y0TG5Cb2NEOG1ZV0k5Ykc5M1pYTjBjWFZ2ZEdWZmRtMTFiSFJwWDJOaGNnPT0%3D`;

    // Update the form action
    form.action = `https://autoquotepros.com/thank-you/?${queryString}`;

    // Submit the form
    form.submit();
  });

  const radioGroups = ["insured", "homeowner"];
  radioGroups.forEach(group => {
    const radioButtons = document.querySelectorAll(`input[name='${group}']`);
    for (const radio of radioButtons) {
      radio.addEventListener("change", function() {
        // Get the selected value for this radio group
        const value = getRadioValue(group);
        if (group === "insured") {
          insuredField = value;
        } else if (group === "homeowner") {
          homeownerField = value;
        }
        // Update the query string
        queryString = `sp=&zipcode=${zipField.value}&insured=${insuredField}&homeowner=${homeownerField}&married=&age=${ageField.value}&vehicles=${vehiclesField ? vehiclesField.value : 0}&first_name=&last_name=&email=&phone=&dply=&f=0&id=56b022dbd7797283128bbbac02fd72bd&t=1679466770&pt=&pv=YUhSMGNEb3ZMMnh2ZDJWemRDMXhkVzkwWlM1amIyMHZjMlZoY21Ob0wybHVaR1Y0TG5Cb2NEOG1ZV0k5Ykc5M1pYTjBjWFZ2ZEdWZmRtMTFiSFJwWDJOaGNnPT0%3D`;
        // Update the form action
        form.action = `https://autoquotepros.com/thank-you/?${queryString}`;
        // Log the updated query string to the console (for testing purposes)
        console.log(queryString);
      });
    }
  });

  // Get the selected value for a radio button group
  function getRadioValue(name) {
    const radios = document.querySelectorAll(`input[name='${name}']`);
    for (const radio of radios) {
      if (radio.checked) {
        return radio.value;
      }
    }
    return 0;
  }

});
