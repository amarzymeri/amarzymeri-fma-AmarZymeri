function showInfo(element, subject, teacher) {
    // Check if the subject already has the info showing
    if (element.classList.contains('active')) {
        // If active, remove the info and the active state
        element.innerHTML = subject;
        element.classList.remove('active');
    } else {
        // If not active, show the teacher info inside the subject box
        element.innerHTML = `Name: ${teacher}<br>Subject: ${subject}`;
        element.classList.add('active');
    }
}
