function showInfo(obj, subject, teacher) {
    if (obj.classList.contains('active')) {
        obj.innerHTML = subject;
        obj.classList.remove('active');
    } else {
        obj.innerHTML = `Name: ${teacher}<br>Subject: ${subject}`;
        obj.classList.add('active');
    }
}
