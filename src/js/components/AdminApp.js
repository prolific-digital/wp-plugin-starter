import React from 'react';
import { useState } from 'react';

export default function AdminApp() {
  const [isPluginVisible, setPluginVisibility] = useState(true);

  const closePlugin = () => {
    setPluginVisibility(false);
  };

  return (
    <>
      {isPluginVisible && (
        <div className='my-react-plugin'>
          <div class='wrapper'>
            <h1>Hello from WP React Plugin Starter!</h1>
            <p>
              You're all set to begin developing your WordPress React plugin!
            </p>
            <p>
              Navigate to your plugin's directory and run <code>yarn dev</code>
              to get started.
            </p>
            <button
              className='close-button button-primary'
              onClick={closePlugin}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
