document.getElementById('searchBtn').addEventListener('click', function () {
    const url = document.getElementById('urlInput').value;
    const iframe = document.getElementById('iframeContent');

    // Simple validation to check if it's a valid URL
    if (url.startsWith('http://') || url.startsWith('https://')) {
        iframe.src = url;
    } else {
        alert('Please enter a valid URL.');
    }
});

document.getElementById('newTabBtn').addEventListener('click', function () {
    const tabsContainer = document.querySelector('.tabs');
    const newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.textContent = 'New Tab';

    newTab.addEventListener('click', function () {
        // Switching tab logic
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        newTab.classList.add('active');
        document.getElementById('iframeContent').src = 'about:blank'; // Reset iframe for the new tab
    });

    tabsContainer.appendChild(newTab);
});
