import React from 'react'
import { Modal, TextInput, Button } from 'react-materialize';
import "../Modal/styles.css"
// const open = <Button>Open Modal</Button>;

export default (SignInModal) => (
  <Modal header="Sign In" open="false" >
    <TextInput
  id="TextInput-4"
  label="Username"
/>
<TextInput
  id="TextInput-4"
  label="Password"
/>
<Button
  node="button"
  type="submit"
  waves="light"
>
  Submit
  
</Button>
  or Log in 
  </Modal>
);