import React from 'react';
import { DocContainer, DocTitle, DocHeader, DocText, Table } from '../components/DocComponents';

const Seo: React.FC = () => {
  return (
    <DocContainer>
      <DocTitle>SEO & Discovery Strategy</DocTitle>
      
      <DocText>
        How do people find SCR? We do not compete for "Learn Creole" (tourist intent). We compete for "Parent Pain" (local intent).
      </DocText>

      <DocHeader>Target Keyword Maps</DocHeader>
      <Table 
        headers={["Intent", "Search Query (English/French/Creole)", "Target Landing Page"]}
        rows={[
          ["Parent Anxiety", "child not speaking creole proper", "/core/FOUNDATION.md"],
          ["Academic struggle", "pourquoi mon enfant ne parle pas créole", "/research/gap-analysis.md"],
          ["Heritage", "teach mauritian creole to kids uk", "/volume-1/readme.md"],
          ["Resources", "kreol morisien audio lessons", "/radio/readme.md"],
        ]}
      />

      <DocHeader>The "GitHub as SEO" Strategy</DocHeader>
      <DocText>
        We intentionally use GitHub as the primary host because:
        <br/>1. <strong>Domain Authority:</strong> GitHub ranks extremely high for technical and structural queries.
        <br/>2. <strong>Longevity:</strong> Blogs die. Repositories persist.
        <br/>3. <strong>Trust:</strong> The open-source nature signals "non-profit" and "community-led" immediately to skeptical parents.
      </DocText>

      <DocHeader>Discovery Channels</DocHeader>
      <DocText>
        <strong>Primary:</strong> WhatsApp forwarding. The "Radio" files are designed to be viral on WhatsApp. Each file metadata points back to this repo.
        <br/>
        <strong>Secondary:</strong> Facebook Community Groups (Mauritian Mums, Diaspora networks).
      </DocText>
    </DocContainer>
  );
};

export default Seo;