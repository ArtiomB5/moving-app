import React, { FC } from 'react';

import { Helmet } from 'react-helmet-async';

interface ISeoProps {
  jsonld: string;
}

export const Seo: FC<ISeoProps> = ({ jsonld }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {jsonld}
      </script>
    </Helmet>
  );
};
