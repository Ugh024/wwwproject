function showSection(section) {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
    });

    document.getElementById(section + '-submenu').style.display = 'block';
}

function showContent(mainMenu, subMenu) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(subMenu + '-content').style.display = 'block';
}

function showContent1(section, category) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    if (section === 'discography') {
        fetchDiscography(category);
    } else {
        document.getElementById(`${category}-content`).style.display = 'block';
    }
}

function fetchDiscography(category) {
    fetch(`/api/discography`)
    .then(response => response.json())
    .then(data => {
        const targetDivId = `${category}-content`;
        const targetDiv = document.getElementById(targetDivId);
    
        targetDiv.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
        data[category].forEach(item => {
            htmlContent += `<li>${item.title} - ${item.year}</li>`;
        });
        htmlContent += '</ul>';
        targetDiv.innerHTML += htmlContent;

        targetDiv.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('main-content').innerHTML = '<p>Error loading discography data.</p>';
    });
}
