import { RainbowProvider } from '@orbs-network/dex-ui-kit';

const appName = import.meta.env['VITE_APP_NAME'];
const projectId = import.meta.env['VITE_RAINBOW_PROJECT_ID'];
const infuraKey = import.meta.env['VITE_INFURA_KEY'];

export function App() {
  return (
    <RainbowProvider
      projectId={projectId}
      infureKey={infuraKey}
      appName={appName}
    >
      <div></div>
    </RainbowProvider>
  );
}

export default App;
