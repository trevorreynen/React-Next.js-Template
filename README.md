
# React/Next.js Template

I made this so I have a ready to go template with my mostly preferred file structure and setup for newer projects if I want to use it. I plan to make other templates with different frameworks for myself with similar file structure and a "starter website design".

While working on this simple template, I encountered several "frustrations" with React/Next.js that I hadn’t experienced before. These issues became apparent after working on another project using a different React setup, which offered similar functionality but was far more straightforward. Below is a list of the frustrations/issues I had noticed using React/Next.js.

I want to say though these issues arent that big of a deal, I just felt like it was a bigger waste of time and was surprised that Next.js was so strict on some things.

### A Few (not all) of my Biggest Issues With React/Next.js Specifically:
1. **Mandatory Module Renaming**:
   - You cannot simply name your CSS/SCSS file `Sidebar.scss` to pair it with it's component `Sidebar.tsx`.
   - Instead, you must name it `Sidebar.module.scss` and import it as:
     ```typescript
     import styles from './Sidebar.module.scss';
     ```
     This adds unnecessary complexity when organizing files as well as a lot of extra coding overall in a project for the frontend portion of the code (see #2).
2. **_Class Names:_ Complex Assignment**:
   - Unlike traditional HTML, you cannot use simple class names directly like:
     ```html
     <div className='Sidebar'></div>
     ```
   - Instead, you must dynamically assign classes like:
     ```html
     <div className={styles.Sidebar}></div>
     ```
   - This disrupts simplicity and feels overly verbose.
3. **_Class Names:_ Restrictions on Formats**:
   - Using class names with hyphens (e.g., `menu-item` or `header-title`) requires additional steps:
     ```html
     <div className={styles['menu-item']}></div>
     ```
   - You cannot directly write:
     ```html
     <div className='menu-item'></div>
     ```
4. **_Class Names:_ Combining Multiple Class Names**:
   - You cannot use multiple class names like:
     ```html
     <div className='Sidebar dark'></div>
     ```
   - To combine classes, you must:
     1. Import the `classnames` library:
        ```typescript
        import classNames from 'classnames';
        ```
        NOTE: `classnames` is a popular third-party JS library. It simplifies applying multiple class names dynamically in JSX.
     2. Write code like:
        ```html
        <div className={classNames(styles['Sidebar'], styles['dark'])}></div>
        ```

5. **General Complexity**:
   - The overall process of managing and styling components feels unnecessarily convoluted compared to simpler approaches in plain HTML/CSS or other frameworks.

All the points I made above just feel like the biggest waste of time in my opinion. Of course there can be good reasons for this, but it just feels unnecessary ontop of the time waste. It makes readability not more difficulty but requires an extra step to see "oh these are all the classes for this div" and so on.

<br><br>

1. There is a ***partial and slightly more advanced solution to the third-party JS library classnames***. In my `src/utils/usefulFunctions.ts` there is a function, `classNames`. This function has multiple uses including basically doing the exact same thing the third-party classnames library does. I found and added this function to my personal `utils` file which is a collection of multiple useful functions I found throughout many projects and still add more to this day.
   - What it does?
     - **Handles Strings:**
       - Adds a string argument directly to the classes array.
       - Example:
         ```typescript
         classNames('Sidebar', 'dark-mode'); // Output: 'Sidebar dark-mode'
         ```
     - **Handles Objects:**
       - For an object, it includes keys with truthy values as class names.
       - Example:
         ```typescript
         classNames({ 'dark-mode': true, 'wide-xl': false }); // Output: 'dark-mode'
         ```
     - **Handles Mixed Arguments:**
       - It supports a combination of strings and objects.
       - Example:
         ```typescript
         classNames('Sidebar', { 'dark-mode': true, 'wide-xl': false }); // Output: 'Sidebar dark-mode'
         ```
     - **Ignores Falsy Values:**
       - Filters out null, undefined, false, and other falsy values.
       - Example:
         ```typescript
         classNames('Sidebar', false, null, undefined); // Output: 'Sidebar'
         ```
   - All those things in one are useful. Makes it incredibly easy to use true/false variables for class names you want active at certain times, etc.
     - **Example with React/Next.js:**
       ```html
       <div className={classNames(styles.Sidebar, styles['dark-mode'], styles['wide-xl'])}></div>
       ```
     - **Example with React/Next.js (True/False usage):**
       ```html
       <div className={classNames(styles.Sidebar, { [styles['dark-mode']]: true, [styles['wide-xl']]: false })}></div>
       ```

