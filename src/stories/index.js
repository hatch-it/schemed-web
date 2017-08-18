import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import Icon from '../components/Icon'

import '../index.css'

storiesOf('Welcome', module)
  .add('to Storybook', () =>
    <Welcome showApp={linkTo('Button')} />
  )

storiesOf('Icon', module)
  .add('small', () =>
    <Icon name="github" small />
  )
  .add('default', () =>
    <Icon name="github" />
  )
  .add('medium', () =>
    <Icon name="github" medium />
  )
  .add('large', () =>
    <Icon name="github" large />
  )

storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>Hello Button</Button>
  )
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  )
