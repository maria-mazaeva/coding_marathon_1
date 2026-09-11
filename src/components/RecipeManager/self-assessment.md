# Self-Assessment: RecipeManager.jsx
   # Maria Mazaeva 

## 1. Functionality
- **Does the component meet the requirements?**
  - [+] Does it handle all the specified features (e.g., adding, removing)?
  - [+] Are edge cases handled (e.g., empty inputs, duplicate entries)?
  - [-] Are there any bugs or unexpected behaviors?

- **How well does the component integrate with other parts of the application?**
  - [+] Are props and state managed appropriately?

## 2. Code Quality
- **Readability**
  - [+] Is the code easy to understand for other developers?
  - [+] Are variable and function names descriptive and meaningful?


- **Reusability**
  - [+] Can the component or parts of it be reused in other parts of the application?

- **Comments and Documentation**
  - [+] Are there comments explaining complex logic?
  - [-] Is there documentation for how to use the component?

## 3. Performance
- **Efficiency**
  - [-] Are there any unnecessary re-renders or performance bottlenecks?
  - [?] Is the component optimized for large datasets (if applicable)?

- **State Management**
  - [+] Is state managed efficiently (e.g., minimal state, derived state)?
  - [+] Are hooks (e.g., `useState`, ) used correctly?

## 4. Overall Assessment
- **Strengths**
  - Clean separation of elements: RecipeManager deals with logic, while Recipe 
    handles rendering a single item.
  - Consistant naming: all similar elements have same name structure, which improves
    readability of the code. 

- **Areas for Improvement**
  - every single recipe could be given its own id number upon creation.
  - numbers. can go negative ("there is "minus one amount of servings"), should
    be not less than one.
  - existing recipe cannot be updated. The whole recipe should be removed and added as
    a new one.

- **Action Plan**
  - Give each recipe a unique id at creation time.
  - set number to be no less than "1".
  - create "updateRecipe" function.

## 5. Additional Notes

  I have implemented "Recipe Manager" part:

- Individual Score:
  I give myself 45/45, I think I managed to implement all requirements and havent noticed any bugs so far.

- Group Score:
  I give my group 35/35, as when I checked other pages - I hadn't 
  found any bugs and implementation looked according to instructions.
  We had no problems with git, no conflicts, everyone was working on its own brunch and merging were done with no issues. Collaboration also went well, we helped each other when needed and answered each others questions. 

- The reflection part is going to be in reflection journal.