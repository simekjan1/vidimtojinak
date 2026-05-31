// Správa Cookie banneru
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
    // Kontrola cookies při načtení
    if (!localStorage.getItem('cookiesAccepted')) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.classList.remove('hidden');
    }

    // Inicializace TOPlist skriptu
    const toplistContainer = document.getElementById('toplistcz1841732');
    if (toplistContainer) {
        try {
            const ref = encodeURIComponent(document.referrer) || '';
            const title = encodeURIComponent(document.title) || '';
            const url = encodeURIComponent(document.URL) || '';
            const w = encodeURIComponent(window.screen.width) || '';
            const h = encodeURIComponent(window.screen.height) || '';
            const cd = encodeURIComponent(window.screen.colorDepth) || '';
            
            toplistContainer.innerHTML = `<img src="https://toplist.cz/count.asp?id=1841732&logo=mc&http=${ref}&t=${title}&l=${url}&wi=${w}&he=${h}&cd=${cd}" width="88" height="120" border="0" alt="TOPlist" />`;
        } catch (e) {
            console.error("TOPlist inicializace selhala:", e);
        }
    }
});

// Hlídání posunu stránky pro horní progress bar
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }
});