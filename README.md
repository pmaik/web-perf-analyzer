# Web Perf Analyzer

**Web Perf Analyzer** is a full-stack application designed to fetch, display, and analyze real-user performance data from the [Chrome UX Report (CrUX) API](https://developer.chrome.com/docs/crux/api/).  
It allows users to input single or multiple URLs, retrieve their performance metrics, and visualize the results in a clean, sortable, and filterable table format.

---

## ✨ Features

-   Search CrUX performance data for one or multiple URLs.
-   Display metrics like LCP, FCP, CLS, TTFB, INP, etc.
-   Sorting and filtering performance metrics.
-   Summary statistics: averages, comparisons across multiple URLs.
-   Beautiful UI built with Material UI.
-   API calls efficiently managed with RTK Query.
-   Fully responsive and fast.

---

## 🛠 Tech Stack

**Frontend:**

-   React.js
-   Redux Toolkit + RTK Query
-   Material UI
-   Axios (replaced by RTK Query for API calls)

**Backend:**

-   Node.js
-   Express.js
-   Axios (for CrUX API interaction)

**Other Tools:**

-   Vite (optional for React build)
-   ESLint + Prettier (optional for linting and formatting)

---

## 📂 Project Structure

---

## 🚀 Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/web-perf-analyzer.git
    cd web-perf-analyzer


    ```

2. **Install dependencies:**

For Client:

-   cd client
-   npm install

For Server:

-   cd ../server
-   npm install

3. **Environment Variables:**

-   Create a .env file in the server directory.
-   Add your Chrome UX API Key:
-   API_KEY=your_crux_api_key

4. **Run the App:**
   Start Server:

    - cd server
    - npm run dev

    Start Client:

    - cd client
    - npm run dev

5. **Open your browser and visit:**
    - http://localhost:5173

📊 How It Works
User enters one or more URLs.

Frontend sends the URLs to the backend via POST request.

Backend server fetches CrUX data using Axios and Chrome UX API.

Response is returned to the frontend and rendered in the table.

Metrics can be filtered, sorted, and analyzed easily

📈 Key Metrics Visualized
Largest Contentful Paint (LCP): Measures the time it takes for the largest content element to be fully visible.
First Contentful Paint (FCP): Tracks when the first content is painted to the screen.
Interaction to Next Paint (INP): Indicates the time taken to respond to user interaction.
Cumulative Layout Shift (CLS): Tracks unexpected shifts in the layout during the page load.
Time to First Byte (TTFB): The time taken to receive the first byte of data from the server.
Navigation Types: Shows how users are navigating, such as via reload, back-forward, or prerender.
Form Factors: Displays the breakdown of user traffic based on the device type (desktop, phone, tablet).

🤝 Contributions
Contributions are welcome!
Feel free to open a pull request or create an issue to suggest improvements. 🚀
