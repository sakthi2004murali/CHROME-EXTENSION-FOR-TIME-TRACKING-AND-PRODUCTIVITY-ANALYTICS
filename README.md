# CHROME EXTENSION FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: SAKTHIVEL B

*INTERN ID*:CT04DG3151

*DOMAIN*:FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH 

Project Title: Chrome Extension for Website Time Tracking and Productivity Analytics
Project Description

This project involves developing a Chrome extension that tracks the time spent on various websites by a user, classifies these websites as productive or unproductive, and provides detailed productivity analytics dashboards with weekly reports. The project combines frontend (extension popup, options, and dashboard UI), background scripts for tracking, and a backend server with database integration to store and analyze user data, showcasing advanced skills in full-stack development, browser extension APIs, and data analytics.

Key Functionalities
Website time tracking:
The extension uses the Chrome Tabs API and Chrome Alarms API to detect the active tab and track the time spent on each website. It maintains a record of the URL, domain, and duration for every site visited. When users switch tabs or windows, the timer pauses for the previous site and starts for the new one, ensuring accurate tracking even during frequent context switches.

Productive vs Unproductive classification:
A predefined list of websites is used to classify sites as productive (e.g., coding platforms like LeetCode, HackerRank, GitHub, documentation sites) or unproductive (e.g., social media sites like Instagram, Facebook, YouTube entertainment). Users can customize this classification in the extension options, enabling personalized productivity tracking aligned with their goals.

Backend integration:
A Node.js backend with Express.js handles API routes for saving and retrieving tracked data. MongoDB is used as the database to store user browsing data securely, with each record containing user ID, website URL, category (productive/unproductive), and time spent. This ensures data persistence and enables analytics generation across days or weeks.

Analytics Dashboard:
The extension includes a dashboard page accessible via popup or a separate tab. It fetches user data from the backend and displays:

Total time spent today

Time spent on productive vs unproductive sites

Pie charts and bar graphs showing category-wise time split

Daily and weekly productivity trends
This is implemented using charting libraries like Chart.js or Recharts, ensuring visually clear analytics for user insights.

Weekly productivity reports:
The backend generates a weekly report summarizing total productive hours, unproductive hours, top visited websites, and suggestions for improvement. This report is accessible on the dashboard, and optionally, email integration can be added to send weekly summaries to the user’s email for accountability and habit tracking.

User authentication (optional enhancement):
To personalize data for each user, authentication can be implemented using JWT tokens, allowing multi-user usage when deployed publicly.

Technologies Used
Frontend: Chrome extension components (manifest.json, popup.html, options.html, background.js), JavaScript, HTML, CSS

Backend: Node.js, Express.js, MongoDB with Mongoose

Charts & UI: Chart.js, Bootstrap or Tailwind CSS for responsive UI

Storage: Chrome Storage API for quick access data; MongoDB for persistent analytics storage

Learning Outcomes
Mastering Chrome Extension Development:
Understanding extension architecture – background scripts for long-running tasks, content scripts for page interaction, and popup/options UI for user inputs.

Backend API integration:
Developing REST APIs using Express.js to handle data saving and fetching efficiently.

Database design for tracking data:
Structuring MongoDB schemas to record and query time-tracking data effectively for analytics.

Real-time time tracking logic:
Implementing tab change listeners and accurate timers that handle user switching, browser inactivity, and idle states.

Data visualization:
Creating readable and professional dashboards with charts to analyze productivity metrics.

Productivity analysis algorithms:
Developing logic to classify and analyze time spent, detect excessive usage of unproductive sites, and provide actionable recommendations to improve digital habits.

Full-stack integration:
Combining frontend extension, backend server, and database into a seamless working application with deployment considerations for production use.

Future Enhancements
Idle detection: Pausing timers if the user is away from the device for a set duration.

Pomodoro reminders: Integrating focus techniques to improve productivity.

Machine Learning suggestions: Recommending website categories based on usage patterns.

Cross-device sync: Enabling tracking across devices via user authentication and cloud storage.

*OUTPUT*

