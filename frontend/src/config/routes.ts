// The centralized routes config file!

// Should work from now on if you follow the Examples.

// Properly using this:
// Import by:
// import { routes } from '@/config/routes'
// Use #1: <a href={routes.Page}>Go to Page</a>
// Use #2: <a href={routes['Page']}>Go to Page</a>


export const routes = {
  // Example: 'Route/You/Want',
  // Example_Component: 'Actual/Route/To/The/File/Page.tsx'    // (Except with the .tsx)

  Landing: '/',
  Landing_Component: '/',

  About: '/About',
  About_Component: '/About/About',

  ScreenSwap: '/ScreenSwap',
  ScreenSwap_Component: '/ScreenSwap/ScreenSwap',


}

