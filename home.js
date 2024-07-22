
function navigate(section) {
    console.log("Navigating to: " + section);
   
    switch (section) {
        case 'home':
            alert('Welcome to Home!');
            break;
        case 'about':
            alert('Learn more About us!');
            break;
        case 'contact':
            alert('Get in Touch with us!');
            break;
        default:
            console.log('Unknown section: ' + section);
            break;
    }
}
