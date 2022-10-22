import React from 'react';

import SimpleButton from "./Simplebutton";

const Navigation = () => {

    const onClickHandler = () => {
        console.log('Im been clicked :)')
    }
    return (
      <>
        // Rendering out Button component in Navigation component. Composition!
        <SimpleButton title="Create" onClick={onClickHandler} />
        ... // some other navigation code
      </>
    );
  };