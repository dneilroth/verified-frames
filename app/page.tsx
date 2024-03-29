import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from "./config";

const frameMetadata = getFrameMetadata({
  buttons: [{label: 'Check if my connected addresses are verified by Coinbase'}],
  image: `${NEXT_PUBLIC_URL}/attestation-circle-white.png`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Test Verified Frame',
  description: 'LFG',
  openGraph: {
    title: 'Test Verified Frame',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/attestation-circle-white.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>https://verified-frames.vercel.app/</h1>
    </>
  );
}
