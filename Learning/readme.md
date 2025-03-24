# Next JS Introduction

## Components

1. **Client** -> Rendered on the client side
2. **Server** -> Rendered on the server side

---

* **Next.js** automatically converts everything to server components

---

* **React server component** - Since these are rendered on the server, they can access server-side resources directly, like databases or to keep API keys safe

* **React client side components** - If pages are interactive then -> convert to client side component - 
*Client Components which are not interactive are still rendered in server itself and the interactive components are left out for browser to render*

---

## Routing
IN app folder make a new folder with the name as the route name and page.tsx as the page

use [userId] for id

## Layout
There is a file layout.tsx in the global scope which is applied to every route
* If we want a custom layout for a set of pages we can define a layout.tsx for the folder

## Route Groups
Folders with "(name)" are in a route group -> general folders to structure the code and to better use layouts

**Note that they don't affect the routes (won't be visible in route)**

## Error Handling
in each route group or folder define a error.tsx
error.tsx must be a client component

## Loading 
