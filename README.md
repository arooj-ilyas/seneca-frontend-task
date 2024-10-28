# Seneca Front-End Task

The task is to make a component using React. The component is intended to test the user's knowledge of a topic, by having them move a series of toggles into the correct positions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## UI/UX requirements:

- ✅ The solution should lock once all correct answers have been selected so the toggles can no longer be switched
- ✅ The toggles should animate between the two states
- ✅ The background colour should change in proportion to how "correct" the answer is (see video attached)
- ✅ The component should be responsive down to screens 320px wide
- ✅ The component should be reusable & extendable, it should be able to accommodate the question changing

## Assumptions/Limitations:

- The background changes color depending on number of answers correct: out of 4, if 4 correct = blue background, if 3 correct = almost correct/red background, 1-2 = incorrect/orange background
- User can click anywhere within the label where pointer is active to switch toggle
- Once all correct options have been selected, user can no longer interact with the form/it is locked
- The user can navigate to the next question once the question is answered correctly
- The user can not go back or 'skip' if they don't know the answer

## Something new I learnt:

- TypeScript! While I have touched it before breifly in a small project, this was my first time building an entire end-to-end component in TypeScript

## Next steps:

- Use `lodash` NPM package to randomize answer options and question order, while I was keen to do this, I chose instead to spend the time spent towards this task focusing on ensuring the code was readable, DRY and reusable.
- Remove is incorrect on initial mount, only render once form is touched
- Add a previous question and skip question button so users can go back/forward and see all questions (keep the toggles disabled if answered correctly, but give user option to 'skip')
