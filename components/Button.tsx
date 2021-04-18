import React from 'react';
import Link from 'next/link';
import { colors } from '@constants/theme';

interface Props {
  href: string;
  as: string;
}

export const ButtonLink: React.FC<Props> = ({ href, as, children }) => {
  return (
    <>
      <Link href={href} as={as}>
        <a className="button-link">{children}</a>
      </Link>

      <style jsx>{`
        .button-link {
          text-decoration: none;
          color: ${colors.gray};
        }
      `}</style>
    </>
  );
};
