// Infinite scroll functionality for fake news

// Global variables
const newsContainer = document.getElementById('newsContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
let isLoading = false;
let page = 0;
const itemsPerPage = 5;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadMoreNews();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// Handle scroll event
function handleScroll() {
    // Check if we're near the bottom of the page
    if (isNearBottom() && !isLoading) {
        loadMoreNews();
    }
}

// Check if user has scrolled near the bottom
function isNearBottom() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const threshold = 200; // pixels from bottom
    
    return scrollPosition + threshold >= documentHeight;
}

// Load more news items
function loadMoreNews() {
    isLoading = true;
    showLoadingIndicator();
    
    // Simulate network delay for realism
    setTimeout(() => {
        // Get next batch of news
        const newsBatch = getFakeNewsBatch(itemsPerPage);
        
        // Add news items to container
        newsBatch.forEach(news => {
            const newsElement = createNewsElement(news);
            newsContainer.appendChild(newsElement);
        });
        
        // Update page counter
        page++;
        
        // Hide loading indicator
        hideLoadingIndicator();
        isLoading = false;
        
        // Check if we need to load more (if the page is still not scrollable)
        if (document.documentElement.scrollHeight <= window.innerHeight && page < 10) {
            loadMoreNews();
        }
    }, 800); // Simulate loading delay
}

// Create HTML for a news item
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

// Show loading indicator
function showLoadingIndicator() {
    loadingIndicator.style.display = 'flex';
}

// Hide loading indicator
function hideLoadingIndicator() {
    loadingIndicator.style.display = 'none';
}