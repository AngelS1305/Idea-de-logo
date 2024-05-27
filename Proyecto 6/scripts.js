function toggleBiography() {
    var bioBox = document.getElementById('biographyBox');
    if (bioBox.style.display === 'none' || bioBox.style.display === '') {
        bioBox.style.display = 'block';
    } else {
        bioBox.style.display = 'none';
    }
}
