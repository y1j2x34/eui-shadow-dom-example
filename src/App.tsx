import React, { useState } from 'react';
import './App.css';
import { EuiButton, EuiModal, EuiModalBody, EuiModalHeader, EuiModalHeaderTitle, EuiModalFooter, EuiSpacer, EuiCodeBlock, EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import { cache as defaultCache } from '@emotion/css';
import { rootShadowDom } from './root';

const styleContainer = (rootShadowDom.querySelector('.css-container') || document.createElement('header')) as HTMLDivElement;
if(!styleContainer.parentNode) {
  styleContainer.className = 'css-container';
  styleContainer.style.cssText = `display: none;`;
  rootShadowDom.appendChild(styleContainer);
}
defaultCache.sheet.container = styleContainer;

function App() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  const modal = open ? 
  <EuiModal onClose={closeModal}>
    <EuiModalHeader>
      <EuiModalHeaderTitle>Modal title</EuiModalHeaderTitle>
    </EuiModalHeader>

    <EuiModalBody>
      This modal has the following setup:
      <EuiSpacer />
      <EuiCodeBlock language="html" isCopyable>
    {`<EuiModal onClose={closeModal}>
<EuiModalHeader>
<EuiModalHeaderTitle><!-- Modal title --></EuiModalHeaderTitle>
</EuiModalHeader>

<EuiModalBody>
<!-- Modal body -->
</EuiModalBody>

<EuiModalFooter>
<EuiButton onClick={closeModal} fill>
Close
</EuiButton>
</EuiModalFooter>
</EuiModal>`}
      </EuiCodeBlock>
    </EuiModalBody>

    <EuiModalFooter>
      <EuiButton onClick={closeModal} fill>
        Close
      </EuiButton>
    </EuiModalFooter>
  </EuiModal> : <></>;

  return (
    <>
      <EuiProvider colorMode='light' cache={{ default: defaultCache, global: defaultCache, utility: defaultCache }}>
        <EuiButton onClick={openModal}>Open Modal</EuiButton>
        {modal}
      </EuiProvider>
    </>
  );
}

export default App;
