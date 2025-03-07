const topics = [
    "Technology", "Politics", "Science", "Health", "Environment", 
    "Economy", "Entertainment", "Sports", "Education", "Space"
];

const companies = [
    "TechGiant", "GlobalCorp", "FutureTech", "MegaSystems", "InnovateCo", 
    "PrimeTech", "QuantumSoft", "ApexIndustries", "VisionaryLabs", "NexaCorp"
];

const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Japan", 
    "Germany", "France", "Brazil", "India", "Sweden"
];

const actions = [
    "announces", "launches", "discovers", "reveals", "introduces", 
    "develops", "creates", "publishes", "releases", "unveils"
];

const things = [
    "revolutionary product", "groundbreaking study", "major breakthrough", "new technology", 
    "innovative solution", "surprising results", "unexpected findings", "advanced system", 
    "comprehensive report", "cutting-edge device"
];

const adjectives = [
    "amazing", "incredible", "unprecedented", "remarkable", "extraordinary", 
    "astonishing", "surprising", "striking", "spectacular", "phenomenal"
];

const benefits = [
    "changes everything we know about", "transforms the way we think about", 
    "revolutionizes the industry of", "breaks new ground in", "sets new standards for", 
    "challenges conventional wisdom about", "establishes new possibilities for", 
    "creates new opportunities in", "solves major problems in", "addresses critical issues in"
];

const sources = [
    "TechDaily", "Science Monitor", "Global News Network", "Business Insider", 
    "The Daily Chronicle", "Future Today", "Innovation Weekly", "World Report", 
    "Industry Observer", "Tomorrow's Gazette"
];

function getRandomDate() {
    const now = new Date();
    const pastYear = new Date();
    pastYear.setFullYear(now.getFullYear() - 1);
    
    const randomTime = pastYear.getTime() + Math.random() * (now.getTime() - pastYear.getTime());
    const randomDate = new Date(randomTime);
    
    return randomDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function generateFakeNewsItem() {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const company = companies[Math.floor(Math.random() * companies.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const thing = things[Math.floor(Math.random() * things.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const benefit = benefits[Math.floor(Math.random() * benefits.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    
    let title = '';
    const titleType = Math.floor(Math.random() * 3);
    
    if (titleType === 0) {
        title = `${company} ${action} ${adjective} ${thing} that ${benefit} ${topic}`;
    } else if (titleType === 1) {
        title = `Scientists in ${country} ${action} ${adjective} ${thing} for ${topic}`;
    } else {
        title = `New ${topic} ${thing} ${action} by ${company} in ${country}`;
    }
    
    const excerpt = `This ${adjective} development could ${benefit.toLowerCase()} ${topic.toLowerCase()} as we know it. Experts are calling this one of the most significant advancements in recent history.`;
    
    return {
        title: title,
        date: getRandomDate(),
        excerpt: excerpt,
        source: source
    };
}

function getFakeNewsBatch(count) {
    const newsBatch = [];
    for (let i = 0; i < count; i++) {
        newsBatch.push(generateFakeNewsItem());
    }
    return newsBatch;
}