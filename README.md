# To Run

Run `npm start` in the project root and the app will be available on port 3000 after installing npm with `npm install`. If you want to try the build version, run `npm run build`. You can also use yarn to build and run the project like I did with `yarn start` and `yarn run build`.

# State

The app's state is normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over
4. Delete Topics and/or quizzes
5. Close the tab and re-open it again to try LocalStorage saving


# Questions

Is this appropriately scoped? Does it have too many features? Too few?
