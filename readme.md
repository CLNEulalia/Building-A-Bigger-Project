# Building a Bigger Project

## Learning Objectives

- Identify and implement best-practices for planning and building an app
- Explain different strategies for code organization
- Discuss coding best practices in a larger app
- Refactor and reorganize a working app

## Lab Set Up

1. Create a directory for your tic tac toe game.
1. Switch into the directory.
1. Add a files named `README.md` and `index.html` to the root of the directory.
1. Initialize the directory as a `git` repository.
1. Make your initial commit on the `master` branch.
1. Switch into a development branch.
1. Open the directory in Visual Studio Code.

## Project Planning

The biggest challenge we face as our programs grow larger is complexity. The larger the project, the more difficult it is to break down things down into the working parts. In order to combat this, we need to designate sufficient time to plan for our projects. It may seem tempting to dive right into writing code, but I can assure you, this approach never ends well. When it comes to completing projects, _time spent planning is time well spent_!

Planning helps us to ensure that we can complete the tasks that are necessary to satisfy the project's requirements within a given amount of time. With sufficient planning we can identify the most important tasks, providing us with a roadmap for which tasks we need to tackle first and can prevent us from falling into the _scope creep_ trap!

How much planning is enough planning? That depends on many factors, but generally, before you begin coding, you should have:

- A **clear goal** identified. Frequently when planning an app this takes the form of some combination of the minimum features of the app and a visual representation of what the project will look like.
- A solid identification of the tasks needed to satisfy the **bare minimum requirements** in the time allotted.
- A generalized **timeline of activities** to help you manage your schedule and better recognize when you need to adjust or seek assistance.

### MVP and User Stories

We want to identify the "[minimum viable product (MVP)](https://www.youtube.com/watch?v=1FoCbbbcYT8)" and build the _smallest thing_ that checks the most important boxes. If your project fails to meet the minimum requirements, it won't matter how many additional, fancy features you have in it. Once we've satisified the minimum requirements, we can always go back and add in additional features so long as time permits.

When planning an MVP, it's helpful to think about it in the context of how users will need to interact with our app. In industry, the way we describe these interactions are through [_User Stories_](http://www.agilemodeling.com/artifacts/userStory.htm). Each user story generally equates to a feature of your app.

User stories follow this paradigm: "As a `<type-of-user>`, I want `<some-capability>` so that `<benefit-received>`".

- As a customer, I want to be able to add items to my shopping cart so I can purchase them when I'm done shopping.
- As a student, I want to be able browse a list of all courses currently offered on campus so that I can identify the courses I want to enroll in.
- As a player, I want to be informed when it is my turn in the game so that I don't have to keep track on my own.

Having a collection of user stories gives you the ability to prioritize them and makes it easier to identify what the essential features that must be present in your app to meet MVP. You can categorize the remaining features into stretch goals. Think of these as _bronze_, _silver_, and _gold_ features. Once you create your MVP, you can tackle the features on your bronze list. If there's still time, you can move on to silver features. Finally, if there is time, reach for the gold🥇!

In prioritizing your MVP requirements, it's easy to conflate wants with needs and as a rule of thumb, **assume that your MVP too big and [do less](https://www.youtube.com/watch?v=PKIpCPS-oZc)**! Also, keep in mind that your stretch goals don't need to be a totally new feature, they can also include enhancing an existing one.

#### Activity: Write User Stories

Take 10 minutes and write user stories as a team for a Tic Tac Toe game app where a two users can play a game of Tic Tac Toe against eachother. Mark each user story as MVP, Bronze, Silver, or Gold. We'll review them together and add them to our `README.md` file as a class activity.

### Wireframes

Drawing a simplified version of the app interface is next. Wireframes are the perfect tool for this. They lack all of the details of a _mockup_ such as colors and imagery, which helps us to focus on the functionality. Frequently, wireframes are used in wireflows that diagram different interactions or paths a user might take through our app (imagine a sign up process, for example). Wireframes can also help us to refine our MVP requirements by identifying missing or overly complex features.

Paper and pencil are the best for initial wireframes! It helps us to not get too invested in our design allowing us the freedom to discard it and start over if it requires changes to satisify our user stories. Even professional UX Designers regularly start with several _lofi_ paper designs before converting them to digital wireframes and mockups.

#### Activity: Tic Tac Toe Wireframe

Let's take a look at how a wireframe for Tic Tac Toe might look.

- Based on our user stories are we missing anything vital?
- How could we annotate our wireframe to help us when we begin coding?
- Are there any flows that we could document with our wireframe(s)?

### Pseudocode

The next step we can take is to format our MVP features to look more like code -- there are many ways to do this and it is totally up to you how you like to do it.

_Pseudocode_ is a way to describe the solution to a problem without writing code in full.

- Writing pseudocode forces you to think critically about the problem and break it down into _small steps_.
- It is usually written using a combination of English and logic. As a result, it is easy to read.
- It might display some features of the final product, such as indentation and code blocks.

Pseudocode should describe the entire logic of a problem so that programming becomes a task of translating pseudocode line by line into actual code.

#### [Here](https://git.generalassemb.ly/dc-wdi-fundamentals/pseudocode) is a full lesson on pseudocode if you are interested in learning more!

Pseudocode isn't just about writing down the steps that you already know. It's a tool to help you work through the problem. Before we can write pseudocode to solve the problem, we need to know the problem. Developing a consistent approach to problem solving coding challenges is one of the number one skills you should focus on throughout this program. Learning and practicing this approach is essential and it will apply to every job and task in your career regardless of the level of seniority you achieve or programming language you are working in:

- Identify the Problem
  - What exactly are we trying to solve?
  - What are we delivering?
- Conceptualize the solution
  - Look at the big picture
  - Avoid details
  - Whiteboards and pen-and-paper can be useful tools here
- Break It Down
  - Break the conceptual models down into concrete steps / actionable items
  - Identify risks (e.g., gaps in knowledge and technology)

## Structuring Your Code

Thus far, we've learned about how functions make our code more reusable, prototypes optimize our code and classes encapsulate and abstract away complexity in our code. So how do we decide how to best structure and organize our code and which of these tools in our toolbox are right for the job?

The beauty of code is that there are many approaches, patterns and strategies to solving the same problem. The way one person structures their code may be totally different than another person, and that is totally okay! The only wrong code is code that doesn't work. It's true that there may be better ways to write your code that are more efficient (better for scaling), more performant (runs faster), more resilient (less likely for bugs to occur) or more readable (better for maintainability). Many times, there trade offs in one of these areas when you optimize for another. So how can we start?

The one approach to start is to consider how you can structure your code right up front. During planning you might think about what are some of the actions that will need to be taken multiple times in your code (e.g., checking if the current move in a game resulted in a win or a tie, or determining if a given game square is occupied, or switching players). These would be ideal as functions or methods. Initially, you might add these as functions that contain only pseudocode or comments.

At the same time, you might start thinking about the different bit of information you'll need to store throughout the game (e.g., the currentPlayer or a representation of the state of the gameboard). How might we store this type of information?

### Activity: Create a List of Functions for Tic Tac Toe

Create a new `.js` file in your repo for your code. Working with your team, identify any data you'll need to store in variables and reusable bits of functionality you think would be beneficial to separate out as functions. Scaffold them out in your code file. You can add some comments to describe the purpose, but don't add an code or pseudocode yet:

```js
let currentPlayer;

function switchPlayer() {
  // A function to switch the current player from `X` to `O`
}
```

#### Questions:

- Can we turn these into one or more classes?
- What would that look like?
- Would there be any benefits be to using OOP principles? any drawbacks?

## Start Small, Stay Small

Write code using concrete steps and check each step **before continuing** on to the next step. By far, one of the most common mistakes that new programmers make is to write too much code before verifying the result. When we write too much at once and things break (_which they always do_) we won't know what is causing the problem.

There is another benefit to this approach: Humans thrive on wins and forward progress! That rush you get from success will motivate you to tackle the next challenge versus spending a long time on something that doesn't work and you can't unravel, which can be a real motivation killer.

### Activity: Write and Verify a Function to Switch the Current Player

Work together in your team to fill in the code in your `switchPlayer` function such that you can call it multiple times to alternate between `X` and `O`. Make sure that your function does **not** perform a `console.log`. Instead it will need to update a value stored in memory (such as a variable or object property). There are many possible options!

## Write Readable Code

When you are working on a larger project, there are a couple of ways that can make your code easier to read, follow and debug:

1. Make your code as close to normal speech as possible.
   - Use clear and descriptive variable names. Avoid using variable names like `x`.
   - If you're naming a variable that will hold an array pluralize the variable name. Similarly, use the singular for naming individual elements.
   - Treat objects like nouns (e.g., `game`, `player`) when naming them. Likewise, treat functions or methods like verbs using names that imply an action being taken (e.g., `checkWinConditions`, `switchPlayer`, `incrementScore`).
1. Clean up your console logs as you go. If you're using a console log to debug or test your code, make sure to remove it after you've verified the result is what you expected. It's very difficult to debug or verify a step in your code if you have multiple unrelated messages in your console. (You can also practice using other techniques like adding breakpoints).
1. Keep your code DRY (don't repeat yourself). Every time you duplicate your code you make more work for yourself and create more opportunities for bugs in your code. This shouldn't stop you from writing code as you're working through a problem, but the trick is to periodically look for opportunities to consolidate parts where repetition has crept in to your code using a function, class or variable.
1. Be consistent. If you are using semi-colons use them consistently. The same can apply for things like using double or single quotation marks or using function declaration syntax versus function expressions. Use the same spacing. This is not only the hallmark of a professional developer, it also makes it easier for you to identify errors in your code such as a missing closing tag or curly brace.
1. Write your code in small, easily digestable pieces. There is a lot of general programming advice that tells us to keep our code as concise and focuses as possible. Again, don't let this stop you from writing code, but if you find that a function you've written has 30 lines of code in it, you could probably look at separating it into multiple more focused and reuseable functions. (In some cases, these will be the types of activities you will perform later when refactoring your code.) There are many guidelines that you can follow in this regard, one popular one is Sandi Metz's rules:
   - Methods/Functions can be no longer than five lines of code.
   - Classes can be no longer than one hundred lines of code.
   - [more here](https://robots.thoughtbot.com/sandi-metz-rules-for-developers)

> One of the core truisms of software development is that as your code grows and requirements for the system that you are building change, additional logic will be added that is not yet present in the current system. In almost all cases, maintainability over the life of the code is more important than optimizing its present state.
>
> Obie Fernandez about _POODR by Sandi Metz_

## Refactor

With all coding projects, your first goal should be to get something that works. You can focus on making it better afterwards! This is known as _refactoring_. Refactoring refers to restructuring your code to make it more readable and less complex without changing the functionality.

There is an old saying that _Perfection is the enemy of done_. Don't allow yourself to be so caught up in writing 'clean' or 'perfect' or 'correct' code that you don't deliver working code.
