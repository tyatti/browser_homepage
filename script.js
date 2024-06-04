function changeWallpaperLocal(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('container').style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
}

function changeWallpaperOnline(event) {
    if (event.key === 'Enter') {
        const url = event.target.value;
        document.getElementById('container').style.backgroundImage = `url(${url})`;
    }
}

function addLink() {
    const linkUrl = prompt("Enter the link URL:");
    const linkText = prompt("Enter the link text:");
    if (linkUrl && linkText) {
        const linkIcon = document.createElement('a');
        linkIcon.href = linkUrl;
        linkIcon.target = '_blank';
        linkIcon.className = 'link-icon';
        linkIcon.textContent = linkText;
        document.getElementById('linkGrid').appendChild(linkIcon);
    }
}

function changeGridLayout(event) {
    const grid = document.getElementById('linkGrid');
    grid.className = '';
    grid.classList.add(event.target.value);
}
