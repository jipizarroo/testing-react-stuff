import React from 'react';
import CCButton from './CCButton';

import SimpleButton from "./Simplebutton";

const Navigation = () => {

    const onClickHandler = () => {
        console.log('Im been clicked :)')
    }
    return (
      <>
        // Rendering out Button component in Navigation component. Composition!
        <SimpleButton title="Simple Button " onClick={onClickHandler} />
        ... // some other navigation code
        // Rendering out button as CC in the nav
        <CCButton onClick={onClickHandler}>CC Button</CCButton>
      </>
    );
  };