import HOC from './HigherOrderComp';

function App() {
  return (
    <div>
      <h3>App component content</h3>
    </div>
  );
}
export default HOC(App)                   <-----  App component is being sent as an input to the Higher Order component.
