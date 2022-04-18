function contactFormSubmit() {
    let first_name = $("#firstName").value;
    let last_name = $("#lastName").value;
    let email = $("#email").value;
    
    if (first_name.length != 0 && last_name.length != 0 && email.length != 0 && ("@" in email)) {
        let alert_message = "Thank you, " + first_name + " for submitting! I will get back to you as soon as possible. In the meantime, you will be redirected to my form's host server for human verification."
        alert(alert_message);
    }
}