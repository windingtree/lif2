import { createGlobalStyle } from 'styled-components';
import { globalStyle } from '../src/styles';
import { Screen, PageWrapper } from '../src/pages/Main';

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
      <>
      <GlobalStyle />
      <Screen>
        <PageWrapper>
          <Story />
        </PageWrapper>
      </Screen>
      </>
  ),
];
