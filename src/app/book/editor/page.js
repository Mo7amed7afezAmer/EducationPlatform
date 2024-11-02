// app/page.js (App Router)
// pages/index.js (Pages Router)

import dynamic from 'next/dynamic';

const CustomEditor = dynamic( () => import( '../../components/custom-editor' ), { ssr: false } );

function Custom() {
  return (
    <CustomEditor />
  );
}

export default Custom;
