
# Krallo - pixel perfect, E2E clone of Trello (React + Node.js). 

Kanban-style task management board app inspired by trello.com, [Here is my project link](https://krallo.onrender.com "Krallo link").

![Main board image](frontend/src/assets/img/readme/desktop/board-krallo.png "Board-main-page")

___

### Menu
- [Trello Description](#trello-description)
- [Application Features](#application-features)
- [Technologies](#technologies)
- [Getting started](#getting-started)
- [Showcase](#showcase)

## Trello Description
Trello is a highly versatile and user-friendly project management and collaboration tool that has become a well-known in the world of productivity and teamwork.
It's designed around the concept of digital boards, where users can create lists and place inside them customizable cards, each representing tasks, ideas, or projects.
These cards can be moved, sorted, and organized with ease, making it simple to track progress and prioritize work.
Trello's intuitive interface allows teams to collaborate seamlessly, share files and attachments, assign tasks and set due dates.
In our app, we have successfully replicated all of Trello's features and even more.

More about it in the [features section](#application-features).

## Application Features
- Create ***Boards*** and manage projects: Using ***D&D***, create, remove, and update lists and tasks. In addition, ***Filtering*** the board by members / labels / due dates / title.
- Create, edit and remove ***Task*** to the deepest level: Labels, Due date, Members, Cover images, Checklists, Move and Attach any images which created by ***Open-AI***.
- ***Side Menu:*** - Change the background of the board with the ***Unsplash Photo API*** and observe the general ***activity*** log.
- Login with regular authentication which is encrypted and safe.

## Technologies

The technology stack we used was ***MERN*** - MongoDB, Express, React, Node.js.
The app uses ***webSockets*** to update the board in real-time.
The API calls to the backend are done with the REST API method , and we used middlewares to authenticate and authorize actions.

We have used many third-side libraries and sources for many goals, such as Open-AI, Unsplash, D&D, Date picker (react-date-range) and more.
The layout and pixel-perfect were made with Sass (functions, mixins, variables). 

## Getting started

Head to the repository on top and clone the project or download the files.

```
git clone [https://github.com/etailevi/krallo.git]
```

Enter the backend folder and make sure you have node_modules installed. After that we will initiate the server with 'npm start':

```
cd backend
npm i 
npm start
```

You shuold get a console output that the server is up and running at port 3030.
Enter the frontend folder and repeat the same process.

```
cd frontend
npm i 
npm start
```

You shuold get a console ouput that the server is up and running at localhost:3000.

That's it! The App should be opened automatically, enjoy!

## Showcase

### Homepage
The landing page in which the user can sign up / login, or press the call to action button to start demo if you are in a hurry.

![Homepage image](frontend/src/assets/img/readme/desktop/home-page-krallo.png "Home-page")

### Workspace
All of the user's boards. Here, you can create a board by clicking the relevant button, star your favorite boards and navigate between them.

![Workspace image](frontend/src/assets/img/readme/desktop/workspaces-krallo.png "Workspace-page")

### Board
All the functionality that you have in Trello. D&D, live-updates, editing tasks to the deepest level, side-menu, editing board members and much more - just [check it out...!](https://krallo.onrender.com "Krallo link")

![Main board image](frontend/src/assets/img/readme/desktop/board-krallo.png "Board-main-page")

### Signup
We created an e2e authentication flow, including encrypting the users' details and middlewares.

![Login image](frontend/src/assets/img/readme/desktop/login-page-krallo-etai.png "login-page")

### Task details
Inside this modal, you can edit the task and watch it updating in real time, both on the board and in the task. Every button on the right menu opens a dynamic modal which fits the content accordingly to the pressed button.

![Task details image](frontend/src/assets/img/readme/desktop/task-details-krallo.png "task-details")


### Side menu
The menu on the right which is opened by pressing the "•••" button, lets you change the board background using Unsplash images, watch the activity log and the board admin.

![Sidemenu image](frontend/src/assets/img/readme/desktop/side-menu-krallo.png "side-menu-image")

### Mobile 1st!
Just a taste of the mobile experience. We used different **mixins**, **conditional rendering**, and the **"mobile first"** approach. 
The layout we have built from the very first moment enabled us to make the website responsive without a lot of effort.

![Mobile layout image](frontend/src/assets/img/readme/mobile/mobile-krallo-pages.png "mobile-layout-image")

### Authors
 - [Tamar Millgram](https://github.com/TamarMillgram)
 - [Ofir Ezra](https://github.com/OfirEzraCode)
 - [Etai Levi](https://github.com/EtaiLevi)
