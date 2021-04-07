import React, {useState, useEffect} from 'react'
import { ThemeContext } from "context/ThemeContext";

import './styles.scss'

const colors = ['white', 'tomato', 'papayawhip', 'orange', 'pink']

function loadComponent(scope, module) {
  return async () => {
    await __webpack_init_sharing__("default");
    const container = window[scope]; 
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };
};

function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

const App = () => {
  const [remotes, setRemotes] = useState([]);
  const [system, setSystem] = useState(undefined);

  const [theme, setTheme] = useState()

  useEffect(async () => {
    await fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((res) => setRemotes(res));
  },[])

  return (
    <main>
      <h1>Orange Hub!</h1>
      {
        remotes.map(remote => ( 
        <button key={remote.id} onClick={() => setSystem(remote)}>{remote.name}</button>
        ))
      }
        <div style={{ marginTop: "2em", border: '2px dotted #aeaeae' }}>
          <ThemeContext.Provider value={theme}>
              <System system={system} />
          </ThemeContext.Provider>
        </div>

      <ul className="containerThemes">
        {colors.map(item => (
          <li
          key={item}
          className="boxColor"
          style={{backgroundColor: `${item}`}}
          onClick={() => setTheme(item)}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;



