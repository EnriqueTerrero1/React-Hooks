import React from 'react';
import ReactDOM from 'react-dom/client';

// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
// import FocusScreen from './components/04-useRef/FocusScreen';
// import RealExampleRef from './components/04-useRef/RealExampleRef';
    import TodoApp from './components/08-useReducer/TodoApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <HookApp />
    // <CounterApp></CounterApp>
    // <CounterWithCustomHook></CounterWithCustomHook>
        // <SimpleForm></SimpleForm>
    //    <MultipleCustomHooks></MultipleCustomHooks>
        // <FormWithCustomHook></FormWithCustomHook>
//    <RealExampleRef></RealExampleRef>
    <TodoApp></TodoApp>
        );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import './components/08-useReducer/intro-reducer'