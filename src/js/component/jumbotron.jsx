import React from "react";


const Jumbotron = () => {
    return (
<div className="container">
<div className="p-4 shadow-4 rounded-3 " style={{backgroundColor: "hsl(0, 0%, 94%)"}}>
  <h2>Hello world!</h2>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling extra
    attention to featured content or information.
  </p>

  <hr className="my-4" />

  <p>
    It uses utility classes for typography and spacing to space content out within the
    larger container.
  </p>
  <button type="button" className="btn btn-primary">
    Learn more
  </button>
</div>
</div>

    )
}

export default Jumbotron;