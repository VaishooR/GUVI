import HOC from './HigherOrderComp';

function App() {
  return (
    <div>
      <h3>App component content</h3>
    </div>
  );
}
export default HOC(App)                   <-----  App component is being sent as an input to the Higher Order component.








import HOC from './HigherOrderComp';

function App(props) {
  return (
    <div>
      <h3>App comp content with props from index.js- {props.office} from {props.city}</h3>
    </div>
  );
}
export default HOC(App)
