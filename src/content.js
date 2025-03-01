console.log("LinkedIn Job Analyzer Content Script Loaded!");

// Function to scrape LinkedIn job listings
function scrapeLinkedInJobs() {
    let jobs = [];
    let jobElements = document.querySelectorAll(".job-card-container"); // Updated selector

    console.log(`Found ${jobElements.length} job elements.`);

    jobElements.forEach(job => {
        let titleElement = job.querySelector(".job-card-list__title"); // Job title
        let companyElement = job.querySelector(".artdeco-entity-lockup__subtitle"); // Company name
        let locationElement = job.querySelector(".job-card-container__metadata-wrapper li span"); // Location

        let title = titleElement ? titleElement.innerText.trim() : "No Title";
        let company = companyElement ? companyElement.innerText.trim() : "No Company";
        let location = locationElement ? locationElement.innerText.trim() : "No Location";

        jobs.push({ title, company, location });
    });

    // Store job data in Chrome Storage
    chrome.storage.local.set({ jobs: jobs }, () => {
        console.log("Jobs stored:", jobs);
    });
}

// Run the scraper function after a delay to ensure LinkedIn loads fully
setTimeout(scrapeLinkedInJobs, 3000);
