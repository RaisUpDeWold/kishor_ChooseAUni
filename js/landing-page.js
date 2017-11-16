/* Login Action */
function login_action() {
    var email = $('#userEmail').val();
    var pass = $('#userPass').val();
    if (email == 'a@a.a' && pass == 'a') {
        window.open('search.html', '_self');
    } else {
        alert('Wrong user credential!');
    }
}