import React from "react";

function Header() {
    var inputASCII = [
        "<pre><code>",
        "    __  ____ __           __  ___           __       ____",
        "   /  |/  (_) /_____     /  |/  /___ ______/ /____  / / /___",
        "  / /|_/ / / //_/ _ &bsol;   / /|_/ / __ `/ ___/ __/ _ &bsol;/ / / __ &bsol; ",
        " / /  / / / ,< /  __/  / /  / / /_/ / /  / /_/  __/ / / /_/ /",
        "/_/  /_/_/_/|_|&bsol;___/  /_/  /_/&bsol;__,_/_/   &bsol;__/&bsol;___/_/_/&bsol;____/",
        "</code></pre>",
      ].join('\n');
      var wrappedASCII = {__html: inputASCII };

      return (
        <span className="ascii text-green-300" dangerouslySetInnerHTML={wrappedASCII}></span>
      )
}

export default Header;