// projects.js
import convertCurrensiIcons from "./assets/carouselIcon/convertCurensi.png";
import jobSearchIcons from "./assets/carouselIcon/jobSearchSite.png";
import landingPageIcons from "./assets/carouselIcon/landingPage.png";
import shopSiteIcons from "./assets/carouselIcon/shopSite.png";
import songSiteIcons from "./assets/carouselIcon/songSite.png";
import userListIcons from "./assets/carouselIcon/userList.png";
import usersListAndUsersPostsIcons from "./assets/carouselIcon/usersListAndUsersPosts.png";
import userTableSiteIcons from "./assets/carouselIcon/userTableSite.png";
import weatherIcons from "./assets/carouselIcon/weather.png";

const projects = [
    {
        icon: userTableSiteIcons,
        link: "https://user-management-table-360.netlify.app",
        description:
            "This website features a user table, with data sourced from the JSONPlaceholder API. The table is divided into fields: Name, Username, Email, and Phone. Next to each column header, a search function is implemented, allowing users to filter the table based on the corresponding field. This filtering method is implemented using React Redux.",
        githubLink: "https://github.com/Eduardd97/userManagementTable",
    },
    {
        icon: convertCurrensiIcons,
        link: "https://convert-currency-test-work.netlify.app/",
        description:
            "I developed a currency converter application! The header displays the current exchange rates for USD and EUR relative to the Ukrainian Hryvnia (UAH) through a public API. The conversion component features two blocks for currency input and selection, offering over 100 options. Changes in one field automatically update the value in the other, ensuring bidirectional conversion. When changing currencies in the dropdowns, the conversion updates accurately.After receiving feedback, I optimized the code by replacing any with more specific types, refactored the application structure into smaller components, moved API interactions into a separate service, replaced Axios with HttpClient, and ensured dynamic updates without code duplication.",
        githubLink: "https://github.com/Eduardd97/Convert-Currency",
    },
    {
        icon: weatherIcons,
        link: "https://weather-conditio-exam-react.netlify.app",
        description:
            "I developed the Weather Condition web application to display current weather in user-selected locations. Built with React for a dynamic user interface and TypeScript for improved code readability, the app utilizes React Bootstrap for responsive. Key features include weather search by city, real-time display of temperature, humidity, and wind data, along with a user-friendly interface suitable for all ages. The application showcases high performance through React and TypeScript, ensuring fast execution and a modern design, demonstrating my proficiency in modern web technologies.",
        githubLink: "https://github.com/Eduardd97/Exam-React",
    },
    {
        icon: songSiteIcons,
        link: "https://musical-kaleidoscope-llama-2f770d.netlify.app",
        description:
            "This website was developed using pure JavaScript, HTML, and CSS. The main functionality includes music search by artists through API requests to the server. Artists entered by the user are automatically saved in LocalStorage for convenient repeated searches. An integrated audio player allows users to play the tracks directly on the site. The project demonstrates the ability to effectively work with APIs, manage local data storage, and create an interactive user interface.",
        githubLink:
            "https://github.com/Eduardd97/My-API-Song-Data-Website/tree/new_branch_seach-media-by-name-local-storage",
    },
    {
        icon: shopSiteIcons,
        link: "https://benevolent-hamster-ee269c.netlify.app/",
        description:
            "This online store was developed using JavaScript, HTML, and CSS. The website features a product catalog sourced from the Fake Store API. Products are displayed as cards with images, descriptions, and prices, along with a button to add items to the cart. The cart tab shows already added products; when items are added from the catalog, users will see the exact number of items in the cart displayed in the header of the site. Within the cart itself, users can remove items one by one or clear the entire cart at once. Additionally, users can view the total cost of all products in the cart.",
        githubLink:
            "https://github.com/Eduardd97/my-goods-store/tree/pre-final-assembly",
    },
    {
        icon: jobSearchIcons,
        link: "https://exam-job-search-site-ee269c.netlify.app",
        description:
            "I developed a job search website that allows users to find job listings based on their desired positions. The application utilizes a public API from RapidAPI for server requests. Users can specify their desired specialty in an input field, and based on the entered specialty, they receive a list of job listings with relevant results. The job listings are presented as cards for easy viewing, and users can like job listings with a dedicated button on each card. Additionally, users can remove jobs from their favorites list, and liked job listings are stored in LocalStorage for easy access.",
        githubLink: "https://github.com/Eduardd97/exam-JS",
    },
    {
        icon: usersListAndUsersPostsIcons,
        link: "https://user-posts-3b9cb8.netlify.app/main",
        description:
            "This website was developed using JavaScript, HTML, and CSS for the frontend, along with Node.js for the server-side logic. User and post data is retrieved from the free JSONPlaceholder API. The site features a list of users, with a corresponding list of posts displayed underneath, showing their brief titles. Users can navigate to a page that displays detailed information about a specific user and all their posts. By clicking on a post title, users can access the full version of the post.",
        githubLink: "https://github.com/Eduardd97/NodeJS/tree/new_feature",
    },
    {
        icon: landingPageIcons,
        link: "https://soft-longma-0815d1.netlify.app",
        description:
            "I developed a landing page based on a Figma design, showcasing my skills in translating designs into functional web pages. The site features interactive elements, including a services catalog that opens as a list when clicking the 'Catalog'. Additionally, there is a form for submitting requests, which currently outputs the data to the console. I also implemented a feature that expands full information in the 'Main Market Development Trends' section when the arrow is clicked.",
        githubLink:
            "https://github.com/Eduardd97/my-website-on-HTML-CSS-and-JS/tree/master",
    },
    {
        icon: userListIcons,
        link: "https://angular-first-project-users-list.netlify.app",
        description:
            "This user list website was developed using Angular and the Faker.js library. It allows users to view a list with brief information about each user, navigate to a full profile, edit user details, or remove users from the list. A simple registration form is also implemented, enabling the addition of new users to the end of the main list.",
        githubLink: "https://github.com/Eduardd97/Angular-First-Project",
    },
];

export default projects;
