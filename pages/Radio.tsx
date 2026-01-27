import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, DocList, DocListItem, Callout } from '../components/DocComponents';

const Radio: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>Radio & Audio System Design</DocTitle>
      
      <DocText>
        The <code>/radio/</code> directory contains the standards for producing audio companions to the SCR text. Since SCR is oral-first, the audio reference is the primary source of truth, not the text.
      </DocText>

      <DocHeader>Production Standards</DocHeader>

      <DocText><strong>1. Voice Pacing (The 80% Rule)</strong></DocText>
      <DocText>
        All instructional audio must be recorded at 80% of natural conversational speed. It should not sound "slowed down" artificially, but performed with deliberate, high-clarity enunciation.
      </DocText>

      <DocText><strong>2. The Silence Gap</strong></DocText>
      <DocText>
        After every prompt, there must be a silence gap exactly 1.5x the length of the prompt. This allows the learner to repeat the phrase without pausing the audio.
        <br/><br/>
        <em>Example:</em> "Mo pe lav mo lame." (2s) -> [Silence 3s] -> Next phrase.
      </DocText>

      <DocText><strong>3. Tone Rules</strong></DocText>
      <DocList>
        <DocListItem><strong>Warmth:</strong> The voice must smile. Cold, news-anchor voices create cortisol/stress.</DocListItem>
        <DocListItem><strong>Pitch Variance:</strong> Creole is tonal and expressive. Exaggerate the melody slightly to aid retention.</DocListItem>
      </DocList>

      <DocHeader>Formats & Scenarios</DocHeader>
      
      <DocText><strong>The "Shadowing" Track</strong></DocText>
      <DocText>
        Designed for the parent to listen to while commuting. No gaps. Continuous flow of correct register phrases to prime the parent's brain before they engage with the child.
      </DocText>

      <DocText><strong>The "Call-and-Response" Track</strong></DocText>
      <DocText>
        Designed for joint listening. Speaker A says the phrase. Speaker B (child voice) repeats it. Listener repeats it.
      </DocText>

      <Callout type="info" title="Hardware Independence">
        Audio files must be mono, highly compressed MP3 (64kbps) to ensure they are shareable via WhatsApp in low-bandwidth regions.
      </Callout>
    </DocContainer>
  );
};

export default Radio;