document.getElementById("analyzeJobs").addEventListener("click", () => {
    chrome.storage.local.get("jobs", (data) => {
        let resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "<h4>Scraped Jobs:</h4>";

        if (!data.jobs || data.jobs.length === 0) {
            resultsDiv.innerHTML += "<p>No jobs found. Try again on the LinkedIn Jobs page.</p>";
        } else {
            data.jobs.forEach(job => {
                resultsDiv.innerHTML += `
                    <p>
                        <strong>${job.title}</strong><br>
                        ${job.company} - ${job.location}
                    </p>
                `;
            });
        }
    });
});
