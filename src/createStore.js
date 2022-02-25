function createStore(reducer) {
  let state;
  //dispatches actions that modify state
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  //returns state to use elsewhere in our application
  function getState() {
    return state
  }
  //this is the store and contains all of the application's state
  return {
    dispatch,
    getState
  }
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

let store = createStore(reducer)
store.dispatch({ type: "@@INIT" });

let button = document.getElementById("button");

button.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});
