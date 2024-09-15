document.getElementById('searchBtn').addEventListener('click', function () {
    const url = document.getElementById('urlInput').value;
    const iframe = document.getElementById('iframeContent');

    // Simple validation to check if it's a valid URL
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('www.')) {
        iframe.src = url.startsWith('http') ? url : 'http://' + url;
    } else {
        alert('Please enter a valid URL starting with http:// or https://.');
    }
});

document.getElementById('newTabBtn').addEventListener('click', function () {
    const tabsContainer = document.querySelector('.tabs');
    const newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.textContent = 'New Tab';

    // Set click event for the new tab
    newTab.addEventListener('click', function () {
        switchTab(newTab, 'about:blank');
    });

    tabsContainer.appendChild(newTab);

    // Switch to the new tab immediately
    switchTab(newTab, 'about:blank');
});

// Function to switch tabs
function switchTab(tabElement, url) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tabElement.classList.add('active');
    document.getElementById('iframeContent').src = url; // Set iframe to new URL
}

// To simulate global search when pressing Enter
document.getElementById('urlInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});
