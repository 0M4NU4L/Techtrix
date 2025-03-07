const newsContainer = document.getElementById('newsContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
let isLoading = false;
let page = 0;
const itemsPerPage = 5;

document.addEventListener('DOMContentLoaded', () => {
    loadMoreNews();
    
    window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
    if (isNearBottom() && !isLoading) {
        loadMoreNews();
    }
}

function isNearBottom() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const threshold = 200;
    
    return scrollPosition + threshold >= documentHeight;
}

function loadMoreNews() {
    isLoading = true;
    showLoadingIndicator();
    
    setTimeout(() => {
        const newsBatch = getFakeNewsBatch(itemsPerPage);
        
        newsBatch.forEach(news => {
            const newsElement = createNewsElement(news);
            newsContainer.appendChild(newsElement);
        });
        
        page++;
        
        hideLoadingIndicator();
        isLoading = false;
        
        if (document.documentElement.scrollHeight <= window.innerHeight && page < 10) {
            loadMoreNews();
        }
    }, 800);
}

function createNewsElement(news) {
    const newsElement = document.createElement('div');
    newsElement.className = 'news-item';
    
    newsElement.innerHTML = `
        <div class="news-date">${news.date}</div>
        <h2 class="news-title">${news.title}</h2>
        <p class="news-excerpt">${news.excerpt}</p>
        <div class="news-source">Source: ${news.source}</div>
    `;
    
    return newsElement;
}

function showLoadingIndicator() {
    loadingIndicator.style.display = 'flex';
}

function hideLoadingIndicator() {
    loadingIndicator.style.display = 'none';
}