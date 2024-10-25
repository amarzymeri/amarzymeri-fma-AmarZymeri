let subjects = [
    {
        Lënda: 'Matematikë',
        teacher: 'Makfire'
    },
    {
        Lënda: 'Fizikë',
        teacher: 'Ms. e Fizikës'
    },
    {
        Lënda: 'Histori',
        teacher: 'Arsim'
    },
    {
        Lënda: 'Anglisht',
        teacher: 'Shukrije'
    },
    {
        Lënda: 'Art',
        teacher: 'Ragip'
    },
    {
        Lënda: 'Edukatë Fizike',
        teacher: 'Burbuqe'
    }
]

const subjectBox = document.querySelector(".subject-box");

for (let i = 0; i < subjects.length; i++) {
    subjectBox.innerHTML += `
        <div class="subject" onclick="showInfo(this, '${subjects[i].Lënda}', '${subjects[i].teacher}')">
            ${subjects[i].Lënda}
        </div>`;
}

function showInfo(obj, subject, teacher) {
    if (obj.classList.contains('active')) {
        obj.innerHTML = subject;
        obj.classList.remove('active');
    } else {
        obj.innerHTML = `Name: ${teacher}<br>Lënda: ${subject}`;
        obj.classList.add('active');
    }
}
