import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, DocList, DocListItem, CodeBlock, Callout, Table } from '../components/DocComponents';
import { FileTreeStructure } from '../data/repoStructure';

const Readme: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>Structured Creole Register (SCR) – Mauritius</DocTitle>
      
      <Callout type="info" title="Status: Public Beta (v0.1.0)">
        This repository is a living document. It defines the architectural and pedagogical standards for the SCR project.
      </Callout>

      <DocText>
        <strong>Mission:</strong> To brute-force close the linguistic articulation gap in Mauritian Creole through oral-first, home-based, socially scaffolded learning.
      </DocText>

      <DocHeader>📖 About This Project</DocHeader>
      <DocText>
        SCR is not a school curriculum. It is a home-based oral transmission system designed to build high-fidelity verbal articulation in Mauritian Creole. It treats language acquisition as a physical, athletic skill (phonotics) rather than an intellectual data-retention task (phonics).
      </DocText>
      <DocText>
        We target the <strong>"Articulation Gap"</strong>: the phenomenon where children understand Creole passively but lack the muscle memory and register to articulate complex, abstract, or emotional thoughts fluently.
      </DocText>

      <DocHeader>🎯 Who This Is For</DocHeader>
      <DocList>
        <DocListItem><strong>Parents</strong> who want their children to speak rich, confident Creole.</DocListItem>
        <DocListItem><strong>Diaspora Families</strong> attempting to retain heritage language.</DocListItem>
        <DocListItem><strong>Educators</strong> looking for oral-scaffolding techniques separate from literacy.</DocListItem>
        <DocListItem><strong>Linguists</strong> studying the application of ASEAN oral-drill methods in Creole contexts.</DocListItem>
      </DocList>

      <DocHeader>⚔️ SCR vs. Traditional Methods</DocHeader>
      <Table 
        headers={["Feature", "Traditional Schooling", "SCR (This Project)"]}
        rows={[
          ["Primary Mode", "Written / Grammar", "Oral / Phonotic"],
          ["Unit of Learning", "The Word / Sentence", "The Breath / Cadence"],
          ["Correction Style", "Red pen, exams", "Modeling, repetition"],
          ["Role of Parent", "Enforcer of homework", "Scaffold / Partner"],
          ["Goal", "Literacy & Grades", "Fluency & Articulation"],
        ]}
      />

      <DocHeader>📂 Repository Structure</DocHeader>
      <CodeBlock code={FileTreeStructure} />

      <DocHeader>🚀 Quick Start (Family Mode)</DocHeader>
      <DocList>
        <DocListItem><strong>1. Fork the Mindset:</strong> Read <code>/core/FOUNDATION.md</code>. If you do not agree with "No Shaming", do not proceed.</DocListItem>
        <DocListItem><strong>2. Prepare the Environment:</strong> Set aside 10 minutes. Turn off screens. Sit face-to-face.</DocListItem>
        <DocListItem><strong>3. Start Volume 1, Arc 1:</strong> Navigate to <code>/volume-1/arc-01-daily-rhythms/</code>. Begin with the "Morning Waking" loop.</DocListItem>
      </DocList>

      <DocHeader>🤝 Contribution & Governance</DocHeader>
      <DocText>
        This project is open-source but opinionated. We accept contributions that improve clarity, expand specific vocabulary domains, or fix technical bugs. We <strong>reject</strong> contributions that introduce grammar-policing, religious doctrine, or political messaging.
      </DocText>
      <DocText>
        See <code>/community/CONTRIBUTING.md</code> for details.
      </DocText>

      <DocHeader>📜 License</DocHeader>
      <DocText>
        CC-BY-SA 4.0. You are free to adapt this for your community, provided you attribute the source and share your adaptations under the same terms.
      </DocText>
    </DocContainer>
  );
};

export default Readme;