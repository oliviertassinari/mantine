import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Portal } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, ElementsGroup } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <AuthenticationForm />
      </Modal>

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </ElementsGroup>
    </>
  );
}`;

export function ModalBaseDemo({ hideCode = false }: { hideCode: boolean }) {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={!hideCode ? code : null} language="tsx">
      <Portal zIndex={10}>
        <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
          <AuthenticationForm noShadow noPadding />
        </Modal>
      </Portal>

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
