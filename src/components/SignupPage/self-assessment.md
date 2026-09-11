# Self-Assessment: BookCollectionManager.jsx

## 1. Functionality
- **Does the component meet the requirements?**
  - [YES] Does it handle all the specified features (e.g., adding, removing, or updating books)?
  - [YES] Are edge cases handled (e.g., empty inputs, duplicate entries)?
  - [USED TO BE] Are there any bugs or unexpected behaviors?

- **How well does the component integrate with other parts of the application?**
  - [USES STATE] Are props and state managed appropriately?

## 2. Code Quality
- **Readability**
  - [I WOULD SAY YES] Is the code easy to understand for other developers?
  - [YES] Are variable and function names descriptive and meaningful?

- **Reusability**
  - [I THINK SO] Can the component or parts of it be reused in other parts of the application?

- **Comments and Documentation**
  - [NO] Are there comments explaining complex logic?
  - [NO] Is there documentation for how to use the component?

## 3. Performance
- **Efficiency**
  - [USED TO BE] Are there any unnecessary re-renders or performance bottlenecks?
  - [N/A] Is the component optimized for large datasets (if applicable)?

- **State Management**
  - [YES] Is state managed efficiently (e.g., minimal state, derived state)?
  - [YES] Are hooks (e.g., `useState`, ) used correctly?

## 4. Overall Assessment
- **Strengths**
  - The form checks for an entered email option, for an entered password, for the password to be confirmed a second time, and for the user to select a nationality, bypassing the fact the user has to make a selection in the list for data to be received by making the default option not present on the list and not considered valid.

- **Areas for Improvement/Action Plan**
  - The form could force some password strength by requiring at least n characters, and could check that the email is actually formatted correctly. It could also receive more graphical attention, ie turning green when a field is valid, red when not.

## 5. Additional Notes
- I am a little confused on some of the points on self assessment/description on the activity page. The component is very different to the others in that the rest do CRUD operations while this one doesn't seem to do them at all, and it makes me concerned I did something wrong even though it all seems to be fine and fits the requirements. I would have probably picked another component if I looked into the distinction before I started.

- **Individual & Group Grade**

As for my individual grade, I would say something around 40, maybe 37-40 out of 45. I didn't make comments and didn't add all optional functionality, though I did add one with checking if the password is the same both times. I'm not 100% sure if what I did was right since the component due to what I described in the first paragraph, but the requirements all seem to check out, so I would lean more towards 40. There are no objective criteria for this grade though.

Regarding the group grade, I would say 30 out of 35, or higher. We stuck to our branches and made pull requests to add changes to main as was stated. Collaboration could've been higher, nobody asked each other for help except for documentation requirements with self assessment, but it was unnecessary. We coordinated regarding who would be working on what, and roughly when we wanted to submit everything. I don't have anything in particular to say about the deployment.

- **Reflection**

*What did you implement?*
I implemented a signup form that uses usestate to check entered data, checking its validity.

*What React concepts did you practice?*
I made my own components and passed data between them, updating things in realtime with react-specific practices.

*What was challenging?*
My first CSS changes worked, but all others would refuse to show. I eventually realized the problem was I wasn't importing the CSS file. The classes of my first change were probably defined elsewhere and worked because of that.

*What would you improve in your code?*
I would add more checks to data validity, as well as password strength requirement, changing the color of the elements to show if something is right or wrong.

*How did your team collaborate?*
We decided who would do that, and then worked mostly on our own, talking in our group chat mainly when it came time to pool it together and write the self assessment, and do it in the required way.