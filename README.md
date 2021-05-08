# Sushi Master Test

## How to run the application
1. Clone the repo and get into the folder.
2. Run `npm install`
3. Then `npm run start`

## Tools used
- Webpack and webpack-dev-server for building and runing locally the application
- Bootstrap for the styling

## Thought process
The restriction of not using a framework like React made me think that maybe most of the HTML had to be written down manually and then modify the content with JS but since we are using data from and external source, the content could change, for example with more items in the menu.

This is why I decided to create a basic HTML skeleton and populate it dynamically using the data in the JSON and javacript.

I tried to keep the domains separated in a logical way, functions that create the layout are all in the `layoutHelpers` file while most of the business logic is located in `formHelpers`.

I didn't really make use of form methods or even submitted the data since it was not really especified in the instructions, that part was a bit ambiguous.

Things I would have done differently in other situations.
- If frameworks were allowed:
  - I would have worked on a better UI with `Material-UI`
  - I would have use `Typescript` and a form library like `React Hook Form`
  - I would have written tests most probably with `Testing Library`