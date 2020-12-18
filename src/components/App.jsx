import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Createtab(emojiterm){
  return <Entry 
  Key = {emojiterm.id}
  emoji = {emojiterm.emoji} 
  name = {emojiterm.name} 
  meaning = {emojiterm.meaning} /> 
      }


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        

        <dl className="dictionary">{emojipedia.map(Createtab)}
        </dl>
        
    </div>
  );
}

export default App;
