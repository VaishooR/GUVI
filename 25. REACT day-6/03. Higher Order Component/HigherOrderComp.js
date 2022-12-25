function HigherOrderComp(Component) {                        <------ App component is being received as input, in the name of Component parameter.
  return(props)=>{                                           <------ 1st return receives props.
    
    return (                                                 <------ 2nd return contains all HTML portion.
      <div>
        <h3>Higher Order component content</h3>
        <Component/>                                         <------ App comp content gets rendered along with the Higher Order component content.
      </div>
    );
    
  }  
}
export default HigherOrderComp;
