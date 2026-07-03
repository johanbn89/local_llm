# Using Ponytail and Teachback to Build a Todo App You Understand

This blog post shows how to use two skills, `ponytail` and `teachback`, while building a simple todo app. The goal is not only to finish the app, but to build it in a way that avoids the most common beginner trap: ending up with code that works, but that you do not understand.

We will keep the app small on purpose, stop at each important concept, and only move forward after the code can be explained in plain language.

## The Two Skills We Used

We used two agent skills to shape the session.

### Ponytail Gist

- Build the smallest thing that actually works.
- Prefer existing code, standard library, and browser features before custom code.
- Do not add abstractions, dependencies, or features for later.
- Stay minimal only after understanding the real task.
- Do not simplify away validation, safety, accessibility, or explicit requirements.
- For this app, it kept us in plain HTML, CSS, and JavaScript.

### Teachback Gist

- Teach one concept at a time.
- Ask what the learner already understands.
- Make the learner explain ideas back before moving on.
- Track understanding in a checklist.
- Mark progress only after demonstrated understanding.
- Slow down and re-explain when something is unclear.

## Conversation History

The transcript below keeps the visible user/Codex conversation. Tool calls and command output are omitted so the blog stays focused on the learning process.

### 1. Deleting The Existing App And Planning The Files

**User**

Use `ponytail` and `teachback`.

We are going to build a simple to do app. Learn me how to do it.

**Codex**

The repo is already a tiny browser app shape: `index.html`, `src/main.js`, and `src/styles.css`.

Small surprise: this repo already contains a working vanilla HTML/CSS/JS todo app. That’s good for teaching: we can either learn by rebuilding it from scratch in the same style, or by walking through what’s already here and then making one small improvement.

**Codex**

Proposed plan:

- Delete the current app files’ contents and rebuild a simple vanilla todo app.
- Use only three files: one for structure, one for behavior, one for styling.
- No framework, no dependencies, no build step.
- `index.html` holds the page structure.
- `src/main.js` holds the app logic.
- `src/styles.css` holds the visual design.
- `teachback-checklist.md` tracks what you understand as we build.

**User**

lets delete the app and start from scratch. Outline what files we are going to need what each file will do.

**Codex**

Proposed file plan:

- `index.html`: page structure, app title, input form, todo list, and empty-state message.
- `src/main.js`: app logic, todos array, adding, completing, deleting, rendering, and saving.
- `src/styles.css`: readable layout, mobile-friendly styling, completed todo styles, buttons, inputs, spacing, and empty state.
- `teachback-checklist.md`: learning checklist updated only after you explain a concept back correctly.

Build order:

1. Create the HTML skeleton.
2. Add basic CSS so the page is usable.
3. Add JavaScript state with a hardcoded todo.
4. Render todos from the array.
5. Add form submission.
6. Add complete/delete actions.
7. Add `localStorage`.
8. Do a final manual test.

### 2. Implementing The Scratch Version

**User**

PLEASE IMPLEMENT THIS PLAN:

Summary:

- Delete the current app files’ contents and rebuild a simple vanilla todo app.
- Use only three files: one for structure, one for behavior, one for styling.
- No framework, no dependencies, no build step.

Files:

- `index.html`: structure, title, form, list, empty state, CSS and JS links.
- `src/main.js`: app logic, todos array, add, complete, delete, render, save with `localStorage`.
- `src/styles.css`: readable, centered, mobile-friendly styling.
- `teachback-checklist.md`: learning checklist.

Build order:

1. Create the HTML skeleton.
2. Add basic CSS so the page is usable.
3. Add JavaScript state with a hardcoded todo.
4. Render todos from the array.
5. Add form submission.
6. Add complete/delete actions.
7. Add `localStorage`.
8. Do a final manual test.

**Codex**

I’ll replace the current fuller todo app with the teaching-sized version: same three app files, plus a checklist that starts unchecked. I’ll keep the code plain and small so each moving part is easy to point at.

The working tree is clean, so these edits are only the scratch rebuild. I’m cutting the filters/editing/counter pieces and keeping add, complete, delete, render, and save.

HTML is now the simple skeleton: one form, one list, one empty message. Next I’m replacing the JavaScript with the smallest state-plus-render loop that still teaches the real app pattern.

The logic is deliberately boring: data lives in `todos`, `render()` makes the screen match it, and `localStorage` keeps it across refreshes. I’m adding just enough CSS now to make the lesson app pleasant without hiding the structure.

The checklist is in place with everything unchecked, as requested. I’m doing a quick syntax/status pass now; since this is plain static HTML, there’s no build step to run.

`node --check` passed for the JavaScript. I’m doing a lightweight browser-style verification now, because todo apps can be syntactically valid and still fail when events or storage are wired wrong.

Playwright is installed, but its bundled browser is not downloaded. I’m checking for a system Chrome/Edge executable so I can still do the same verification without installing anything.

Chrome is installed, so I’m using that as the Playwright executable. This avoids changing your machine just to run a quick app check.

**Codex**

Implemented the scratch version.

Changed:

- `index.html`: simple structure with title, form, list, and empty state.
- `src/main.js`: minimal todo state, add, complete, delete, render, and `localStorage`.
- `src/styles.css`: basic readable/mobile-friendly styling.
- `teachback-checklist.md`: unchecked learning checklist.

Verified:

- `node --check src/main.js` passed.
- Browser flow passed in Chrome: add todo, complete todo, reload persistence, delete todo, empty state returns.

Skipped: filters, editing, counters, due dates, frameworks. Add those only after this version feels obvious.

### 3. Deleting The App Again

**User**

delete the app again

**Codex**

I’ll remove the scratch app files now. I’m treating “the app” as the HTML, CSS, and JavaScript implementation, leaving the repo docs and teachback checklist alone unless you ask for those too.

The only app changes are the scratch files from the last step, plus the new checklist. I’m deleting the app files now and leaving the checklist as learning notes.

Deleted the app files:

- `index.html`
- `src/main.js`
- `src/styles.css`

I left `teachback-checklist.md` in place since it’s lesson notes, not the app.

### 5. Restarting The Lesson From Basics

**User**

Use `ponytail` and `teachback`.

We are going to build a simple to do app. Learn me how to do it, and make sure I understand.

**Codex**

I’ll use `ponytail` to keep this tiny and `teachback` to make you do the important part: explain it back. First I’m checking the current repo state and refreshing the skill instructions so we start clean.

The app is currently deleted, so we’re genuinely starting from blank files. Before I write the first version, I want your baseline: this lets me teach the next bit at the right altitude instead of spraying JavaScript fog everywhere.

Quick baseline before I write the first files:

What do you already understand about how `index.html`, `src/styles.css`, and `src/main.js` work together in a browser app?

Answer in your own words, even if it’s rough. Then I’ll build the first tiny step and ask you to explain it back.

**User**

I do not understand anything, learn me the basics before we procced.

**Codex**

Perfect. We pause coding.

A todo app in the browser has three basic layers:

1. HTML: the nouns

HTML is the structure of the page. It says what exists.

For a todo app, HTML gives us things like a title, text box, button, and list.

HTML does not “think.” It just puts elements on the page.

2. CSS: the clothes

CSS makes the HTML look nicer.

CSS does not add todos or remember anything. It only controls layout, colors, spacing, sizes, and visual states like “completed todos have a line through them.”

3. JavaScript: the behavior

JavaScript makes the page react.

It answers questions like:

- What happens when the user clicks `Add`?
- Where do we store the todos?
- How do we show the todos on the page?
- What happens when a checkbox is clicked?
- How do we save todos after refresh?

The most important idea is this:

`user does something -> JavaScript updates data -> JavaScript redraws the page`

Tiny mental model:

`HTML = what is on the page`

`CSS = how it looks`

`JavaScript = what happens`

Now teach it back to me in your own words:

What does each file do: `index.html`, `src/styles.css`, and `src/main.js`?

**User**

index.html is a markup language for defining layout of the page, src/style.css the styling of the layout. main.js is javarscript that defines what happens when actions is taking place.

**Codex**

Good. That’s the core model, and you said it clearly. I’m going to mark the matching checklist items and then teach the next tiny concept: data/state, because that’s the heart of a todo app.

You’ve earned the first checks: HTML structure role, CSS styling role, and JS behavior role. I’m only checking items you actually explained back, per teachback rules.

Exactly right.

Small cleanup on wording:

- `index.html`: defines the structure/content of the page.
- `src/styles.css`: defines the appearance/layout styling.
- `src/main.js`: defines the behavior when actions happen.

Next basic idea: state.

A todo app needs to remember things. At minimum:

- the text of each todo
- whether each todo is completed

In JavaScript, we’ll keep that memory in a variable:

`let todos = [];`

That means: “start with an empty list of todos.”

When someone adds a task, the array changes:

`todos.push("Buy milk");`

But we’ll use objects because each todo needs more than text:

`{ text: "Buy milk", completed: false }`

Teachback time:

In your own words, what does the `todos` array store, and why is each todo better as an object instead of just plain text?

**User**

the todo array store the todos, each element in the list is an object since we want to store more than just text.

**Codex**

Yes, that’s the right mental model. I’m marking the state item complete, then I’ll explain the next key idea: rendering, which is how data becomes visible HTML.

Correct.

Tiny refinement: each element in the `todos` array is one todo object:

`{ text: "Buy milk", completed: false }`

Now the next idea: rendering.

The array is memory. The page is what the user sees.

The browser does not automatically know that this:

`let todos = [{ text: "Buy milk", completed: false }];`

should appear as this:

`<li>Buy milk</li>`

So we write a function, usually called `render()`.

Its job:

`look at the todos array -> create visible HTML list items`

Important pattern:

`state changes -> call render() -> screen updates`

Teachback:

Why do we need a `render()` function? What problem does it solve?

**User**

we do not know how to show the objects in the list, thats why we make a render function to define how to show it.

**Codex**

That’s it. You’ve got state versus screen now, which is the big hinge. I’ll mark rendering complete and then we can create the first actual files: just HTML, CSS, and a tiny JS render with one starter todo so you can see the concept working.

Step one is built: static HTML, tiny CSS, and JavaScript that renders one todo from the array. I’m running a syntax check so we know the lesson code is clean before we talk through it.

Good answer. I built the first tiny version.

What exists now:

- `index.html`: page structure
- `src/styles.css`: very basic styling
- `src/main.js`: one `todos` array and one `render()` function

The important JavaScript is:

`let todos = [{ text: "Learn render()", completed: false }];`

That means: we have one todo in memory, then we tell the page to display it.

The render loop means:

`for each todo object -> create one <li> -> put the todo text inside -> add it to the page`

Check passed: `node --check src/main.js`.

Teachback question:

In your own words, what does this line do?

`list.innerHTML = "";`

**User**

I do not know.

**Codex**

Totally fine. This is exactly the kind of line that looks weird at first.

`list.innerHTML = "";` means:

empty the todo list on the page.

Here, `list` is the `<ul>` from the HTML:

`<ul id="todo-list"></ul>`

`innerHTML` means “the HTML inside this element.”

So this:

`list.innerHTML = "";`

says:

Set the inside of the `<ul>` to nothing.

Why do we do that?

Because `render()` rebuilds the visible list from the `todos` array.

If `render()` runs once, the page gets one list item. If `render()` runs again without clearing first, the page gets the same list item twice.

So render does this pattern:

1. Clear the visible list.
2. Recreate the list from the current array.

Try again:

What problem would happen if we removed this line?

`list.innerHTML = "";`

**User**

we would add to existing list and we would get duplicates.

**Codex**

Exactly. You just explained why clearing before rendering matters. I’m going to add the next small behavior now: submitting the form should add a todo to the array and re-render.

The app can add todos now: form submit reads the input, pushes an object into `todos`, clears the input, and renders. I’m checking the JavaScript again before we unpack the new lines.

Yes. Without clearing first, every render would keep adding new `<li>` elements on top of the old ones.

I added the next tiny piece: form submit.

New code:

- Find the form and input from the HTML so JavaScript can use them.
- Listen for the form submit event.
- Stop the browser from refreshing the page.
- Read what the user typed.
- If it is empty, stop.
- Add a new todo object to the array.
- Clear the input box.
- Re-render the page.

Check passed: `node --check src/main.js`.

Teachback question:

Why do we call `render()` after this line?

`todos.push({ text, completed: false });`
