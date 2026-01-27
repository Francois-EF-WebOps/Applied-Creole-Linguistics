import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, DocList, DocListItem, Callout } from '../components/DocComponents';

const Foundation: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>FOUNDATION.md (The Constitution)</DocTitle>
      
      <Callout type="warning" title="Immutable Document">
        This document represents the immutable core of the SCR project. Pull requests changing these principles will be rejected unless they address a critical safety or ethical failure.
      </Callout>

      <DocHeader>1. The Pedagogical Constitutions</DocHeader>
      
      <DocText><strong>Article I: Oral Supremacy</strong></DocText>
      <DocText>
        Language is first a physical act of sound production, second a social tool of connection, and only third a system of written symbols. In SCR, we do not introduce written text until oral confidence is absolute.
      </DocText>

      <DocText><strong>Article II: The Phonotic Imperative</strong></DocText>
      <DocText>
        We train muscles, not minds. "Phonotics" refers to the physical coordination of tongue, jaw, breath, and tone. Learning flows from physical repetition (the drill) to cognitive understanding (the meaning).
      </DocText>

      <DocText><strong>Article III: The Social Scaffold</strong></DocText>
      <DocText>
        Learning happens in the "Zone of Proximal Development" (Vygotsky). The parent is the scaffold. The parent must hold the complexity the child cannot yet manage. The parent never tests; the parent supports.
      </DocText>

      <DocHeader>2. Operational Constraints</DocHeader>
      <DocList>
        <DocListItem><strong>Daily Micro-Practice:</strong> 5 to 15 minutes maximum. Long sessions degrade retention.</DocListItem>
        <DocListItem><strong>One Idea Per Breath:</strong> Scaffolding units must fit within a single natural exhalation.</DocListItem>
        <DocListItem><strong>Repetition Before Novelty:</strong> Do not advance to new content until the current content is physically effortless.</DocListItem>
        <DocListItem><strong>No Accent Policing:</strong> Regional variations of Creole are valid. Clarity is the goal, not prestige.</DocListItem>
      </DocList>

      <DocHeader>3. Ethical Boundaries (Zero Tolerance)</DocHeader>
      <DocList>
        <DocListItem><strong>No Shaming:</strong> Correction is done by repeating the correct form gently, never by pointing out the error. "No, say it like this" is forbidden. Instead, simply say it again correctly.</DocListItem>
        <DocListItem><strong>No Doctrine:</strong> SCR content must remain secular and apolitical to ensure it is safe for all Mauritian households.</DocListItem>
        <DocListItem><strong>No Exams:</strong> There are no grades. The metric of success is the child's willingness to speak.</DocListItem>
      </DocList>

    </DocContainer>
  );
};

export default Foundation;