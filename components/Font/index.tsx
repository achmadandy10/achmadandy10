import { FC } from 'react';

export const Font: FC = (): JSX.Element => (
  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
  `}</style>
);
