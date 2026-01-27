import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, Table, Callout } from '../components/DocComponents';

const Phonotics: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>The Phonotic Layer (ASEAN Context)</DocTitle>
      
      <DocText>
        SCR borrows heavily from oral drilling techniques common in Southeast Asia (Singapore, Vietnam, Indonesia) for language acquisition, adapting them to the Mauritian context. We term this the "Phonotic" layer.
      </DocText>

      <DocHeader>Phonotic vs. Phonic</DocHeader>
      <Table 
        headers={["Dimension", "Phonics (Traditional)", "Phonotics (SCR)"]}
        rows={[
          ["Focus", "Letter-Sound correspondence", "Muscle-Sound coordination"],
          ["Input", "Visual (Text)", "Auditory (Voice)"],
          ["Mechanism", "Decoding symbols", "Mimicking frequency/rhythm"],
          ["Goal", "Reading", "Speaking"],
        ]}
      />

      <DocHeader>Why ASEAN Inspiration?</DocHeader>
      <DocText>
        Many ASEAN nations effectively manage multilingual populations where the home language differs from the school language. They utilize:
      </DocText>
      <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-6">
        <li><strong>Choral Repetition:</strong> Speaking in unison to lower individual anxiety.</li>
        <li><strong>Rhythmic Drills:</strong> Using clapping or tempo to lock in syntax patterns.</li>
        <li><strong>Shadowing:</strong> Speaking simultaneously with a native speaker recording.</li>
      </ul>

      <Callout type="success" title="Application in Mauritius">
        Mauritian Creole is a rhythmic, syllable-timed language (mostly). Phonotic drills focus on preserving the unique cadence of Creole, which is often lost when children are taught to "read" Creole using French or English orthographic rules too early.
      </Callout>

      <DocHeader>The "Mouth Gym"</DocHeader>
      <DocText>
        Every SCR session begins with 30 seconds of "Mouth Gym"—exaggerated vowel sounds (A, E, I, O, U) and jaw loosening exercises to switch the physical articulatory setting from French/English mode to Creole mode.
      </DocText>
    </DocContainer>
  );
};

export default Phonotics;