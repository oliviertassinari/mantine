import React from 'react';
import { Button, ElementsGroup, DEFAULT_THEME } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <Button key={color} color={color} {...props}>
        {color}
      </Button>
    ));

export function ButtonFilledVariantDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getThemes()}</ElementsGroup>
    </CodeDemo>
  );
}

export function ButtonOutlineVariantDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getThemes({ variant: 'outline' })}</ElementsGroup>
    </CodeDemo>
  );
}

export function ButtonLinkVariantDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getThemes({ variant: 'link' })}</ElementsGroup>
    </CodeDemo>
  );
}
export function ButtonLightVariantDemo() {
  return (
    <CodeDemo>
      <ElementsGroup position="center">{getThemes({ variant: 'light' })}</ElementsGroup>
    </CodeDemo>
  );
}
