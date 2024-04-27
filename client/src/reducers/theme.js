const changeTheTheme = (state = "LIGHT", action) => {
    switch (action.type) {
      case "LIGHT":
        return "LIGHT";
      case "DARK":
        return "DARK";
      default:
        return state;
    }
  };
  
  export default changeTheTheme;