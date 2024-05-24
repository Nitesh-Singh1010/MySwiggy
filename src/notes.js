/*
--dependency array is not mandatory in useEffect Hook. Only the callback function is mandatory. But we can change
the behaviour of useEffect with dependency array. If there is no dependency array, useEffect will be rendered every time 
after the component renders.
if there is dependency array and it's empty, useEffect is called on initial render(and only once)
if dependency array is not empty, useEffect will be definitely called after initial render but after that only when the 
dependency changes.
Basically, useEffect will always be called on initial render.

Good Practice :always create state variables inside the functional components and always on the top and never in conditional
statements, loops or functions.


ROUTING:
--createBrowserRouter will help in creating configuration for routing(will take a list of objects where each object will 
represent the path and element(component) to be loaded from that path). RouterProvider will provide this configuration to 
our app.
--react router dom gives us access to a hook known as useRouteError. There can be multiple types of errors like network error,
wrong url or something. So to read the message of error, we use this hook and we can show specific detail to the user.
we can access more information about the error using this hook.
--children routes and outlet: outlet is basically like a tunnel which is filled by route children according to the route.
--when using react, and want to route to another page never use anchor tag because with that whole page will be loaded again
there's a very powerful thing in react using which we can route/navigate to another page without reloading of the whole page.
react router dom gives us Link component to navigate to another page without reloading. works exactly like anchor tage, just 
in anchor tag we have href here we have to. The Link component does not reloades the page like anchor tag, it just refreshes
the components(just changes the components). That's why react applications are called single page applications. There's one 
main component and for all other pages, components are just getting refreshed within that main component. So if we carefully
look, there's only a single page. The website will not reload if we want to navigate to diferent pages. So single page
application:  just one page where components are getting interchanged via client side routing. Behind the scenes Link uses 
anchor tag only as it appears <a> in the console. We can say it's a wrapper upon anchor tag done be react router dom and it 
which prevents reloading of page thus leading to a more optimised approach for navigating.
--Client side routing : The page's (or all components code) code is already available at the client side 1st time the page
loads.
--Server Side routing : The page/component comes from the server side and then it is visible on the UI.
--useParams is a hook from React Router, a library for handling routing in React applications. This hook allows you to access the params of the current route.
 Params are dynamic parts of the URL that are often used to fetch data or identify a specific resource. For example, in a blog application, you might have a 
 URL pattern like /posts/:postId to display a particular post. The :postId part is a param that can be accessed using useParams to load the relevant post.


 CLASS BASED COMPONENTS: 
 functional component is normal js function similarly class component is normal js class. In class based components,the class has a render method that returns 
 a peice of jsx which will be displayed on the ui. in functional components, it's a function that returns a piece of jsx.
 Every class in class based components extends to React.Component class : It is a base class for React components when you're using class components. This
 class provides the fundamental functionalities and methods that a component can use, such as setState(), render(), lifecycle methods like componentDidMount(),
 componentDidUpdate(), etc.
 the way of passing props in cbc: write constructor with argument as props and then write super(props). State variables in cbs also written in constructor in
 the object of this.state and are updated in the object of this.setState. not necessary to write all state variables in this.setState(which are present in
 this.state object), only the ones we want to update should be written in this.setState object.
 order of Life cycle of a component : 1st the cbs's constructor is called and then the render method is called and then componentDidMount is called. We make api calls 
 in componentDidMount. Why? beacuse it is called after rendering of the component and in react what we do is first we want to render the component i.e. not
 wait for the api to be called and then render the component. Once it is rendered , now we make an api call to fill the the component with data.
 React Component life cycle : render phase(constructor, render) and then commit phase(dom updation,componentdidMount , componentDidUpdate)



 higher order component is a component that takes a component and returns a component i.e. it takes a component as an input, enhances the component and returns the 
 component with the added feauture. 
 -controlled and uncontrolled components(think of accordion study)
 contexts solve the problem of prop drilling. Prop drilling in React is a technique where data is passed from a parent component to a deeply nested child component
  through intermediate components that do not need the data themselves. This often leads to components receiving and passing props unnecessarily, which can make the 
  code harder to manage and understand. using context api in react, the stored data in contexts can be accesed anywhere in the react application.

  in redux,while doing a selector i.e. while subscribing to the store, make sure you subscribe to the right portion of the store(exactly what we need)otherwise its a
  huge performance loss.

  types of testing a developer can do:
  unit testing-testing the components in isolation(done in this project)
  integration testing-testing integration of the components
  end to end testing-e2e testing- testing the whole user flow like from the point user will enter to the point it'll leave.
*/
 