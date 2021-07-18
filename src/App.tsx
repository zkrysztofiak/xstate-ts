import React from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">

	<Button type="primary">
		Guxiczek
	</Button>
	<button
          type="button"
      //     type="button"
      //     onClick={() => send("SUBMIT")}
      //     disabled={!canSubmit}
          disabled={false}
      //     data-state={state.toStrings().join(" ")}
        >
          {/* {state.matches("editing") && "Submit"}
          {state.matches("submitted") && "Success!"} */}
	    Abrakadabra
        </button>
    </div>
  );
}

export default App;
