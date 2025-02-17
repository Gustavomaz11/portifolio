document.addEventListener('DOMContentLoaded', function() {
	// Get the form and the messages div.
	var form = document.getElementById('ajax_form');
	var formMessages = document.getElementById('form-messages');

	// Set up an event listener for the contact form.
	form.addEventListener('submit', function(event) {
			// Stop the browser from submitting the form.
			event.preventDefault();

			// Create a FormData object from the form.
			var formData = new FormData(form);

			// Create the AJAX request.
			var xhr = new XMLHttpRequest();
			xhr.open('POST', form.action, true);

			xhr.onload = function() {
					if (xhr.status === 200) {
							// Success: Set the formMessages div to success style and message.
							formMessages.classList.remove('alert-danger');
							formMessages.classList.add('alert-success');
							formMessages.textContent = xhr.responseText;

							// Clear the form fields.
							form.reset();
					} else {
							// Failure: Set the formMessages div to error style and message.
							formMessages.classList.remove('alert-success');
							formMessages.classList.add('alert-danger');

							if (xhr.responseText !== '') {
									formMessages.textContent = xhr.responseText;
							} else {
									formMessages.textContent = 'Oops! Ocorreu um erro ao enviar a mensagem.';
							}
					}
			};

			xhr.onerror = function() {
					// Handle network error
					formMessages.classList.remove('alert-success');
					formMessages.classList.add('alert-danger');
					formMessages.textContent = 'Oops! Ocorreu um erro ao enviar a mensagem.';
			};

			// Send the form data.
			xhr.send(formData);
	});
});
