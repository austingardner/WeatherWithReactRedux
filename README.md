# WeatherWithReactRedux
calls open weather api using react and redux

# About this app (below picture):

![goodweatherpic](https://user-images.githubusercontent.com/25092249/35955652-0b8f1160-0c4e-11e8-86ee-ac89a8b9d4e5.png)

This app calls the openWeather api and gets weather data over the next five days, in three-hour increments, for a user-given city in the United States. It uses the Sparklines library to make the graphs and google maps API to get the mini google-map of each city. 

Although I made this app with the help of a tutorial, I learned a lot about Redux and React while doing it. 

I learned that axios is a library that makes http requests easy with React and Redux. 

I learned about using lodash ( _ ) to calculate the sum of an array, to round numbers, and to debounce with async requests. 

You have to use import 'react-redux' for key features like Provider to work when using React and Redux. Provider usually is place around the App in the index.js file directly in the src folder.

When you have a plain React component that doesn't use redux, you can use the basic syntax of "export default class <class name> extends Component", along with importing React and Component from 'react' if you are using create-react-app type of structure. Then you just return your JSX and off you go!
  
However, to integrate Redux into your application, you have to decide what parts need data from the Redux store. Usually, you can refer to the rest of the app that doesn't need the store data as "components". Parts that do need Redux store data are generally referred to as "containers". This is because the Redux wraps around a React component.

When you have a container, you use certain syntax. The "export default class ..." that is remaining is removed. Instead, place an export default connect(mapstatetoprops)(<container name>) at the bottom of your container. This will integrate the data from the container into the store. 

The mapStateToProps function takes data from the store and puts it into the constructor of the component that the container wraps. For example, I take the weather that I got from the open weather api and pass it to my WeatherList class in weather_list.js. Then you put mapStateToProps into connect. 

How Redux data flows (picture sohamkamani.com): 
![redux-flow](https://user-images.githubusercontent.com/25092249/35957773-9438e8b8-0c5a-11e8-88fe-4f0d3ce29b0b.png)

Things start with actions. Actions give data to the reducers which then evaluate the actions and add them to the state.
"In addition to reading the state, container components can dispatch actions. In a similar fashion, you can define a function called mapDispatchToProps() that receives the dispatch() method and returns callback props that you want to inject into the presentational component." (redux.js.org) You can call dispatch(myFunc()) and dipatch will send the action and its data to the reducers. 


"Reducers are just pure functions that take the previous state and an action, and return the next state." (redux.js.org) These functions usually have a switch statement based on the action type. If the action is a specific type, the reducer returns a NEW object with the data from the action (usually action.payload.data). It is very important to emphasize that all reducers must return a NEW object, or you will run into problems. One way to resolve this is to return [...state, action.payload.data ] to add the new data on to the state's existing data in a list.

Then you can grab the data you have received from the Redux store because of mapStateToProps and put it out to the DOM! 

Sources
https://redux.js.org/ 
https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
