window.onload = function() {
    document.getElementById("email").innerHTML = '<a href="mailto:' + 'akoladenis97@gmail.com</a>';

    var contactform = document.getElementById('contact-form');
    contactform.setAttribute('action', '//formspree.io/' + 'hongwang9851' +
        '@' + 'gmail' + '.' + 'com');
}

