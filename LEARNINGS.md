# CSS 
  ```css

  /* Base CSS */

  *, 
  *::before, 
  *::after {
    box-sizing: border-box; 
  }

  /* Image responsive*/
  img {
    display: block; 
    min-width: 100%; 
  }

  /* Center the anything */
  element {
    margin-inline: auto;
  }

  /* Use of media queries */
  @media media-type and (media-feature: value) {
  /* CSS rules to apply when the condition is met */
  }
  
  ```

# props in react 
In React, props (short for properties) are a mechanism for passing data from a parent component to a child component. They are essentially arguments passed to React components, allowing for dynamic and reusable components. 
Here's a breakdown of what props are and how they work: 

• Data Transfer: Props serve as a channel for one-way data flow in React, always from a parent component down to its child components. 
• Customization and Reusability: By passing different props to the same component, you can customize its appearance and behavior without rewriting the component's core logic, promoting reusability. 
• Read-Only Nature: Props are read-only within the child component. This means a child component cannot directly modify the props it receives. If a child component needs to change data, it typically communicates back to the parent component, which then updates its own state and re-renders the child with new props. 
• Analogy to HTML Attributes: You can think of props as similar to HTML attributes, but with the added flexibility of passing any JavaScript value, including objects, arrays, functions, and even other components. 

Example: 
Consider a Product component that displays information about a product. Instead of hardcoding the product details within the Product component, you can pass them as props from a parent component: 

```jsx
// Parent component
function App() {
  const productData = {
    name: "Laptop",
    price: 1200,
    description: "Powerful and portable laptop."
  };

  return (
    <div>
      <h1>Our Products</h1>
      <Product
        name={productData.name}
        price={productData.price}
        description={productData.description}
      />
    </div>
  );
}

// Child component
function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}
```

In this example, the App component passes name, price, and description as props to the Product component, which then uses these props to render the product details dynamically. 

AI responses may include mistakes.



# AboutSection.jsx flow 

Let me explain **exactly** what is happening and **why using just `about` works**.

---

# ✅ **1. In React, props are always passed as ONE object**

When you write:

```jsx
<About
  timeline="Contact me at"
  title="mail@rithviknishad.dev"
  link="mailto:mail@rithviknishad.dev"
  icon={<MdEmail />}
/>
```

React ALWAYS sends it like this:

```js
props = {
  timeline: "Contact me at",
  title: "mail@rithviknishad.dev",
  link: "mailto:...",
  icon: <MdEmail />,
  subtitle: undefined,
  description: undefined
};
```

So normally you would write:

```jsx
const About = (props) => { … }
```

or:

```jsx
const About = ({ title, link, subtitle }) => { … }
```

---

# 🟥 **2. Why they used `(about: IAbout)`?**

Because they gave the props object a **custom name**: `about`.

React does not care what you name the parameter.

This:

```tsx
const About = (about: IAbout) => { … }
```

is identical to:

```tsx
const About = (props: IAbout) => { … }
```

or:

```tsx
const About = (details: IAbout) => { … }
```

🚨 **Important point:**
`about` is *NOT* a keyword.
It’s just a variable name for props.

---

# 🟦 **3. React gives props, and you named props as `about`**

Here props = about:

```tsx
const About = (about) => {
  console.log(about.title);     // valid
  console.log(about.timeline);  // valid
  console.log(about.icon);      // valid
}
```

Because `about` **is the props object**.

---

# 🟩 **4. Why does AboutCardContent receive `content={about}`?**

Because you are passing the whole props object forward:

```tsx
<AboutCardContent content={about} />
```

AboutCardContent expects:

```tsx
({ content }: { content: IAbout })
```

So it receives:

```js
content = {
  title: "...",
  subtitle: "...",
  timeline: "...",
  description: "...",
  icon: ...,
  link: "..."
}
```

This is the props-forwarding pattern.

---

# 🟧 **5. Why not destructure props directly?**

You *can*.
Your current code is perfectly valid.
But if you want to use the “normal React way”, you can rewrite it like this:

### ✔ Normal React-friendly version

```tsx
const About = ({ title, subtitle, link, timeline, icon, description }: IAbout) => {
  const about = { title, subtitle, link, timeline, icon, description };

  if (!link) return <AboutCardContent content={about} />;

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <AboutCardContent content={about} />
    </Link>
  );
};
```

This also works EXACTLY the same.

---

# 🟦 **6. So, why is this allowed?**

Because:

### ✔ The component receives props

### ✔ You named props as `about`

### ✔ You use the object directly

### ✔ No Next.js magic

### ✔ No special syntax

### ✔ No difference from plain React

This is simply:

```tsx
function Component(props) { }
```

written as:

```tsx
function Component(about) { }
```

---

# ✔ Final Answer (Short)**

The `About` component does NOT “use about” specially.
It simply receives the **props object**, but the developer chose to name it `about`.
In React, the parameter name is **completely your choice**.

`about` = props
That’s it.

--- 