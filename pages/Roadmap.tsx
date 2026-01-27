import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, Table, Callout } from '../components/DocComponents';

const Roadmap: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>Roadmap: 1 Family → National Saturation</DocTitle>
      
      <Callout type="info" title="Current Phase">
        We are currently in <strong>Phase 0</strong>.
      </Callout>

      <DocHeader>Phase 0: Single Household + AI (Months 1-3)</DocHeader>
      <DocText>
        <strong>Goal:</strong> Prove the methodology in a controlled environment.
        <br/><strong>Actors:</strong> Maintainer + Core Pilot Family.
        <br/><strong>Outputs:</strong> Volume 1 Draft, Initial Audio samples.
        <br/><strong>Risk:</strong> Methodology is too time-consuming for working parents.
      </DocText>

      <DocHeader>Phase 1: Micro-Community (Months 3-9)</DocHeader>
      <DocText>
        <strong>Goal:</strong> 10 Families using the system daily.
        <br/><strong>Actors:</strong> Early adopters, Diaspora testers.
        <br/><strong>Outputs:</strong> Feedback loop, bug fixes in curriculum flow.
        <br/><strong>Risk:</strong> Lack of consistency/churn.
      </DocText>

      <DocHeader>Phase 2: Community Multipliers (Year 1-2)</DocHeader>
      <DocText>
        <strong>Goal:</strong> NGO uptake.
        <br/><strong>Actors:</strong> Community centers, Saturday schools.
        <br/><strong>Outputs:</strong> "Train the Trainer" documentation.
        <br/><strong>Success Signal:</strong> An NGO forks the repo for their own beneficiaries.
      </DocText>

      <DocHeader>Phase 3: Media Saturation (Year 2+)</DocHeader>
      <DocText>
        <strong>Goal:</strong> High-quality audio/video production based on scripts.
        <br/><strong>Actors:</strong> Local influencers, YouTubers.
        <br/><strong>Outputs:</strong> Viral content based on SCR "Acts".
      </DocText>

      <DocHeader>Phase 4: Institutional Shadow Adoption (Year 5+)</DocHeader>
      <DocText>
        <strong>Goal:</strong> Teachers use SCR resources "under the desk" because they work better than official materials.
        <br/><strong>Success Signal:</strong> SCR printouts found in formal classrooms.
      </DocText>

    </DocContainer>
  );
};

export default Roadmap;