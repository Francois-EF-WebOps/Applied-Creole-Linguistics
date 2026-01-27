import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, DocList, DocListItem } from '../components/DocComponents';

const Contribution: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>Contribution & Anti-Fragmentation Model</DocTitle>
      
      <DocText>
        The greatest risk to Creole language projects is fragmentation due to orthographic debates, political allegiances, or religious appropriation. SCR enforces a strict governance model to prevent this.
      </DocText>

      <DocHeader>Governance Rules</DocHeader>
      
      <DocList>
        <DocListItem><strong>The "Core" is Secular:</strong> The main branch (main) must remain usable by atheists, Hindus, Christians, and Muslims alike. No specific religious terminology is permitted in the Core Volume.</DocListItem>
        <DocListItem><strong>Extensions are Allowed:</strong> Religious groups or NGOs may create "Extension Packs" (e.g., <code>/extensions/sunday-school/</code>), but these must be kept in separate directories, not mixed with Core learning flows.</DocListItem>
        <DocListItem><strong>Orthography Neutrality:</strong> We use a standardized orthography (LPT or Grafi Larmoni) for documentation, but since the method is ORAL, we do not accept pull requests that purely "fix spelling" unless the spelling error causes mispronunciation.</DocListItem>
      </DocList>

      <DocHeader>For Contributors</DocHeader>
      <DocText>
        We welcome:
      </DocText>
      <DocList>
        <DocListItem><strong>Vocab Expansion:</strong> Adding new "Arcs" for specific domains (e.g., Mechanics, Fishing, Coding).</DocListItem>
        <DocListItem><strong>Audio Contributions:</strong> High-quality voice recordings for existing scripts.</DocListItem>
        <DocListItem><strong>Platform Adapters:</strong> Tools to export SCR content to WhatsApp bots, Anki decks, or YouTube descriptions.</DocListItem>
      </DocList>
      
      <DocText>
        We do NOT welcome:
      </DocText>
      <DocList>
        <DocListItem>Manifestos on why Creole should replace English/French in schools (Out of scope).</DocListItem>
        <DocListItem>Complex grammar treatises.</DocListItem>
      </DocList>

    </DocContainer>
  );
};

export default Contribution;