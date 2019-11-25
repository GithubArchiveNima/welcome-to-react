import React from 'react';
import Greeting from '../components/Greeting';
import { storiesOf } from '@storybook/react';


storiesOf('Greeting', module)
  .add('Nima', () => <Greeting name="Nima" />)
  .add('default 2 electric boogaloo', () => <Greeting name="Hamid"/>)
  .add('default 3: this time its personal', () => <Greeting name="Fereshteh" />)
  .add('default 4: the direct to DVD edition', () => <Greeting name="Ghazanfar" />)
