# Hotstar Clone Application

## Description
This project is a clone of the Hotstar streaming service, built using modern web technologies. 
It aims to provide a similar user experience, allowing users to browse and watch their favorite shows and movies.

## Features
- User authentication
- Browse and search for content
- Watch trailers and full episodes
- Responsive design for mobile and desktop

## Installation
To get started with this project, clone the repository and install the necessary dependencies.


git clone https://github.com/vaishnavinanna/HotStar_Clone_Application.git
cd hotstar-clone-application
npm install

## Usage
To run the application locally, use the following command:

npm start


This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

# Hotstar Clone Application - Components

This README provides an overview of the components used in the Hotstar Clone Application. Each component is designed to 
handle specific functionalities within the application.

##  HomeContainer
The `HomeContainer` component serves as the main layout for the home page. It conditionally renders user-specific content 
or general content based on the user's login status.

### Key Features:
- Displays a sidebar for navigation.
- Renders the `LoggedUser` component if the user is logged in; otherwise, it shows the `Carousal` and `CardContainer`
 components.

##  SidebarComponenet
The `SidebarComponenet` provides navigation options for the application, allowing users to access different sections 
easily.

### Key Features:
- Contains links to various sections (e.g., My Space, Search, Home).
- Responsive design with a drawer for mobile view.

## LoggedUser
The `LoggedUser` component displays user-specific content when a user is logged in. It includes a "Continue Watching" 
section.

### Key Features:
- Fetches and displays the user's saved movies.
- Renders the `Carousal` and `ContinueWatchingCard` components.

##  ContinueWatchingCard
The `ContinueWatchingCard` component shows the movies that the user is currently watching, along with progress indicators.

### Key Features:
- Displays movie images and progress bars.
- Provides a visually appealing layout for user engagement.

##  CardContainer
The `CardContainer` component displays a scrollable list of movies or TV shows based on the selected category. It fetches 
data from an API and renders individual movie items using the `Movies` component.

### Key Features:
- Fetches data based on the selected category (e.g., Latest Releases, Top Rated).
- Implements smooth scrolling functionality.
- Displays loading indicators while fetching data.

##  Movies
The `Movies` component is responsible for rendering individual movie items. It includes lazy loading of images to improve
 performance.

### Key Features:
- Uses Intersection Observer to load images only when they are in the viewport.
- Displays movie titles and images with a hover effect.

## SearchContainer
The `SearchContainer` component wraps the search functionality, including the sidebar and search results.

### Key Features:
- Integrates the `SidebarComponenet` and `SearchPage` components.
- Provides a cohesive layout for searching content.

## SearchPage
The `SearchPage` component handles the search input and displays filtered movie results based on user input.

### Key Features:
- Implements a search bar with dynamic filtering.
- Displays search results using the `Movies` component.

## Subscription
The `Subscription` component displays subscription plans and handles payment processing.

### Key Features:
- Shows different subscription options (Super, Premium).
- Integrates with the payment gateway for processing payments.

## PaymentGateway
The `PaymentGateway` component manages the payment process for subscriptions.

### Key Features:
- Handles payment processing using Razorpay.
- Provides a seamless payment experience for users.

## Conclusion
This README provides a high-level overview of the components in the Hotstar Clone Application. 
Each component is designed to work together to create a cohesive user experience, allowing users to browse,
search, and manage their subscriptions effectively.
