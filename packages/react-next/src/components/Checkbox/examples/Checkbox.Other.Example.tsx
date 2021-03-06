import * as React from 'react';
import { Checkbox, ICheckboxProps } from '@fluentui/react-next/lib/Checkbox';
import { Link } from '@fluentui/react-next/lib/Link';
import { Stack } from '@fluentui/react-next/lib/Stack';

// Optional extra props to pass through to the input element
const inputProps: ICheckboxProps['inputProps'] = {
  onFocus: () => console.log('Checkbox is focused'),
  onBlur: () => console.log('Checkbox is blurred'),
};
// Used to add spacing between example checkboxes
const stackTokens = { childrenGap: 10 };

export const CheckboxOtherExample: React.FunctionComponent = () => {
  // Only for the first checkbox, which is controlled
  const [isChecked, setIsChecked] = React.useState(true);
  const onChange = React.useCallback((ev: React.FormEvent<HTMLElement>, checked: boolean): void => {
    setIsChecked(!!checked);
  }, []);

  return (
    <Stack tokens={stackTokens}>
      <Checkbox label="Controlled checkbox" checked={isChecked} onChange={onChange} />

      <Checkbox label='Checkbox rendered with boxSide "end"' boxSide="end" />

      <Checkbox label="Checkbox with extra props for the input" inputProps={inputProps} />

      <Checkbox label={<span>Custom label 1</span>} />

      <Checkbox label={{ className: 'label', children: 'Custom label 2' }} />

      <Checkbox label={{ children: _renderCustomLabel }} />

      <Checkbox onRenderLabel={_renderLabelWithLink} />
    </Stack>
  );
};

function _renderCustomLabel(Component: React.ElementType, props: React.HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <Component {...props}>
      Custom-rendered label with a{' '}
      <Link href="https://www.microsoft.com" target="_blank">
        link
      </Link>
    </Component>
  );
}

function _renderLabelWithLink() {
  return (
    <span>
      Custom-rendered label with a{' '}
      <Link href="https://www.microsoft.com" target="_blank">
        link
      </Link>
    </span>
  );
}
