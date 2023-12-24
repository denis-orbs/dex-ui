import { RainbowProvider } from "@dex-ui/lib";

export function App() {
  return (
    <>
      <p>test</p>
      <Quickswap />
    </>
  );
}

const appName = import.meta.env['VITE_APP_NAME'];
const projectId = import.meta.env['VITE_RAINBOW_PROJECT_ID'];
const infuraKey = import.meta.env['VITE_INFURA_KEY'];

const Quickswap = () => {
  return (
    <RainbowProvider
      projectId={projectId}
      infureKey={infuraKey}
      appName={appName}
    >
     
    </RainbowProvider>
  );
};

export default App;
