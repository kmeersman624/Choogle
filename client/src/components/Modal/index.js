import React from 'react'
import { Modal, Button } from 'react-materialize';

const trigger = <Button>Open Modal</Button>;

export default (SignInModal) => (
  <Modal header="Modal Header" trigger={trigger}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Modal>
);