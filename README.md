## Full Stack Project - Estate Finder Pro

### Project Introduction

- This project aims to develop the Real Estate Finder Pro application, a platform like Zillow or realtor.com, designed to assist people finding their next home. Utilized the latest version of the MERN stack (**MongoDB, Express.js, React, Node.js**), and combined with the **React Router Dom** for crafting dynamic pages and routes.

- Authentication features included both email/password authentication via **JSON Web Tokens (JWT)** and **Google OAuth** integration.

- Coupled with **Redux** toolkit to enhance state management, simplifying the handling of global state across the application.

- For User Profile:
  - Are safeguarded on both the client and backend sides to ensure a secure user experience. 
  - Allows users to update personal information such as usernames, emails, and passwords, and to upload profile images. 
  - Through **CRUD operations with MongoDB**, users can create new property listings, adjust pricing, and upload up to six images per listing. 
  - Furthermore, users can adjust the number of images associated with their listings even after upload.

- For Listing Page:
  - Each property listing is displayed with an image slider and features convenient contact options for potential tenants or buyers.
  - With advanced search functionality, users can search by title, limit results, and sort through options using a sidebar. 

- Deployment:
  - The project has been deployed on Render: https://mern-estate-app-project.onrender.com/
  - And deployed on **AWS EC2**, using **Nginx** as a reverse proxy

## Technologies Used
- Frontend: React.js, Redux.js, TailwindCSS
- Backend: Node.js, Express.js, REST APIs
- Communication between frontend and backend: Axois
- Authentication: Firebase, JWT, Google OAuth
- Version Control: Git
- Test: Insonmia
- Deployment: AWS EC2, Ngnix, Render

## Deploy version
- Home Page with sliding window
![Home Page](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/Home%20page-Estate.jpg)

- Sign Up and Sign In
![Sign Up](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/Sign%20Up-Estate.jpg)
![Sign In](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/Sign%20In-Estate.jpg)

- Profile Page with user listing
![Profile Page](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/Profile%20Page%20with%20Listing-Estate.jpg)

- Creating Listing Page with multiple options
![Creating Listing Page](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/Creating%20List%20Page%20with%20multiple%20options-Estate.jpg)

- Advance Search Function: Use Keyword search or search options
![Search Page](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/Advance%20Search%20functionalities-Estate.jpg)

- Listing Page with detail information and landlord contact
![Listing Page](https://github.com/Reneechang17/Estate-Finder-Pro/blob/main/static/House%20Page%20with%20detail%20info-Estate.jpg)