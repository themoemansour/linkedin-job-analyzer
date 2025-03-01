# 🚀 LinkedIn Job Analyzer
### 🔎 Automate job scraping & analyze required skills!

---

## 📌 What is this?
A **Chrome extension** that **scrapes LinkedIn job postings**, extracts job titles, company names, locations, and **analyzes required skills** against your resume.  

✅ **Scrapes LinkedIn job listings**  
✅ **Displays job details in a popup**  
✅ **Sends job data to a Flask API for skill analysis**  
✅ **Compares job skills to your resume & finds gaps**  

🔥 **Land your dream job by closing your skill gaps!**  

---

## 🚀 How It Works

### **1️⃣ Install the Extension**
- Download the project & load it as an **Unpacked Extension** in `chrome://extensions/`  

### **2️⃣ Go to LinkedIn Jobs**
- Visit **[LinkedIn Jobs](https://www.linkedin.com/jobs/)**  

### **3️⃣ Click "Analyze Jobs"**
- Scrapes job postings & displays them in the popup  

### **4️⃣ Compare Skills**
- The extension calls a **Flask API** to analyze job skills vs. your resume  

---

## ⚙️ Installation

### **1️⃣ Clone This Repo**
```bash
git clone https://github.com/themoemansour/linkedin-job-analyzer.git
cd linkedin-job-analyzer
```

### **2️⃣ Install Python Dependencies**
```bash
cd server
python -m venv env
source env/bin/activate  # macOS/Linux
env\Scripts\activate  # Windows
pip install -r requirements.txt
```

### **3️⃣ Load Chrome Extension**
1. Open **Google Chrome**  
2. Go to **`chrome://extensions/`**  
3. Enable **Developer Mode**  
4. Click **Load Unpacked**  
5. Select the **`linkedin-job-analyzer-extension` folder**  

✅ **Your extension is now installed!** 🎉  

---

## 💻 Usage

### **1️⃣ Scrape Jobs**
- Open **LinkedIn Jobs**  
- Click the **extension icon**  
- Click **"Analyze Jobs"**  
- View job listings inside the popup  

### **2️⃣ Run Flask API**
```bash
cd server
python server.py
```
✅ Now the API is running at `http://127.0.0.1:5000/`

### **3️⃣ Compare Skills**
- The extension **sends job data** to the Flask API  
- The API **analyzes skills** & shows missing ones  

---

## ⚡ Tech Stack
🔹 **Frontend:** HTML, JavaScript (Chrome Extension)  
🔹 **Backend:** Python (Flask API)  
🔹 **Storage:** Chrome Storage API  
🔹 **Scraping:** JavaScript DOM Manipulation  

---

## 💡 Features Coming Soon
✅ **Save favorite jobs**  
✅ **Auto-apply for jobs with 1 click**  
✅ **AI-based skill recommendations**  
✅ **Resume parser for personalized analysis**  

---

## 📌 Contributing
Want to improve this project? **Fork it, make changes, and submit a PR!**  

---

## 📩 Contact
👤 **Created by:** [@themoemansour](https://github.com/themoemansour)  
💼 **LinkedIn:** [linkedin.com/in/themoemansour](https://linkedin.com/in/themoemansour)  

---

🚀 **Star this repo if you found it useful!** ⭐  
🔥 **Let’s get this job-hunting beast to the next level!** 🚀  

---
