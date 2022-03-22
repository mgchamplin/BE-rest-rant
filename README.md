# Project REST-Rant

REST-Rant is an app where users can review restaurants. Here are the ROUTES:

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /                        | Home Page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | For page for creating new places                 |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | \*                       | 404 page (matches any route not defined above)   |

## Data Stored for restaurants

| Data     | Description                  |
| -------- | ---------------------------- |
| Name     | Name of restaurant (string)  |
| City     | City location (string)       |
| State    | State location (string)      |
| Cuisines | Dish types (string)          |
| Photo    | Photo of restaurant (string) |
