import React from "react";

function Intro() {
      return (
        <div id="intro" className="text-orange-300 md:mt-2">
          <p>Welcome to my interactive web terminal.</p>
          <p>For a list of commands, type <span className="text-green-300">'help'</span>.</p>
        </div>
      )
}

export default Intro;