import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, Table } from '../components/DocComponents';

const Hierarchy: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>Content Hierarchy Model</DocTitle>
      <DocText>
        SCR content is organized like a serialized media production rather than a textbook. This encourages narrative flow and long-term engagement.
      </DocText>

      <DocHeader>The V.S.A.E.A. Structure</DocHeader>
      <Table 
        headers={["Level", "Time Horizon", "Cognitive Purpose", "Example"]}
        rows={[
          ["Volume", "1 Year", "Developmental Phase", "Vol 1: The Household & Immediate Self"],
          ["Saga", "3 Months", "Thematic Block", "Saga 1: Rhythms of the Body"],
          ["Arc", "1 Month", "Specific Domain", "Arc 2: Food & Hunger"],
          ["Episode", "1 Week", "Skill Cluster", "Ep 1: Asking for specific textures"],
          ["Act", "1 Day", "Micro-Practice", "Act 3: 'Mo anvi manze croquant' (Drill)"],
        ]}
      />

      <DocHeader>Detailed Definitions</DocHeader>
      
      <DocText><strong>Volume (The Container)</strong></DocText>
      <DocText>
        A Volume corresponds roughly to a year of development or a massive shift in perspective. Volume 1 focuses on the concrete world. Volume 2 moves to abstract concepts (time, causality).
      </DocText>

      <DocText><strong>Saga (The Season)</strong></DocText>
      <DocText>
        A Saga allows the family to dwell in a subject long enough for it to become second nature. It removes the pressure to "finish" a topic quickly.
      </DocText>

      <DocText><strong>Arc (The Topic)</strong></DocText>
      <DocText>
        An Arc provides a specific set of vocabulary and sentence structures related to a tangible part of life (e.g., Bathing, Cooking, Cleaning).
      </DocText>

      <DocText><strong>Act (The Daily Unit)</strong></DocText>
      <DocText>
        The Act is the atomic unit of SCR. It is a script for a 5-minute interaction. It includes:
        <br/>1. The Hook (Attention)
        <br/>2. The Loop (Repetitive drill)
        <br/>3. The Bridge (Connecting to real life)
      </DocText>
    </DocContainer>
  );
};

export default Hierarchy;