'use client';
import Countdown from './components/Countdown';
import CommunityInfo from './components/CommunityInfo';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px'}}>
      <CommunityInfo />
      <Countdown />
    </main>
  );
}

