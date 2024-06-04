function changeGridLayout(event) {
    const grid = document.getElementById('linkGrid');
    grid.className = '';
    grid.classList.add('grid');
}

// Add default links
const defaultLinks = [
    
    { url: 'https://www.youtube.com', text: 'YouTube' },
    { url: 'https://music.youtube.com/playlist?list=PLhKXRdIDf23Nd0lCY3bfKYyd5ZSSubJp_', text: 'yt music' },
    
    { url: 'https://ww8.manganelo.tv/manga/manga-nr964952', text: 'kokou no hito' },
    { url: 'https://ww8.manganelo.tv/manga/manga-je954913', text: 'vagabond' },
    { url: 'https://asuracomic.net/?order=update?order=update', text: 'asura scan' },
];

const linkGrid = document.getElementById('linkGrid');

defaultLinks.forEach(link => {
    const linkIcon = document.createElement('a');
    linkIcon.href = link.url;
    linkIcon.target = '_blank';
    linkIcon.className = 'link-icon';
    linkIcon.textContent = link.text;
    linkGrid.appendChild(linkIcon);
});
