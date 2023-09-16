## Add at least 3 Project features

Course Selection: Users can browse and select courses from the list. When a course is selected, its credit hours and price are added to the total credit hours and total price, respectively. The application also prevents users from selecting the same course twice.

Credit Hour Management: The app effectively manages and displays the remaining credit hours available to the user, ensuring that they do not exceed the allocated credit hours.

Feedback with Toast Notifications: The application provides real-time feedback to users through toast notifications. These notifications are displayed when a course is already selected, when there are not enough credit hours, or when the credit hour limit is reached, enhancing the user experience by providing clear and instant feedback.

These features make the application user-friendly and help users make informed decisions when registering for courses while staying within their credit hour limits.

## Discuss how you managed the state in your assignment project.

Here's how state is managed in the app:

Course Data State: The courses state is initialized as an empty array using useState. It's later updated with course data fetched from a JSON file using the fetch API within the useEffect hook. This state keeps track of the available courses for selection.

Selected Courses State: The selectedCourse state is an array initialized as an empty array using useState. It is updated whenever a course is selected by the user. This state tracks the courses that the user has chosen.

Remaining Credit Hour State: The remainingCreditHour state is initialized with a value of 20 using useState. It is decremented whenever a course is selected, ensuring that the user does not exceed the available credit hours.

Total Credit Hour State: The totalCreditHour state is initialized with a value of 0 using useState. It is incremented when a course is selected, providing the user with a running total of credit hours.

Total Price State: The totalPrice state is initialized with a value of 0 using useState. It is updated with the price of the selected courses, providing a running total of the course registration cost.
