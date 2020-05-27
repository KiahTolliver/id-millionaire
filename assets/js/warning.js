// Prompt user before navigating away from current page
function warning() {
    var choice = confirm('Are you sure you want to leave this page?');

    if (choice == false) {
        return;
    } else {
        window.location = 'index.html';
    }
}