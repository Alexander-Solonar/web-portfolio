import { FC } from 'react';
import scss from './ExternalLinkButton.module.scss';

interface ExternalLinkButtonProps {
  data: {
    href: string;
    text: string;
  };
}

const ExternalLinkButton: FC<ExternalLinkButtonProps> = ({ data }) => {
  return (
    <a
      className={scss['link']}
      href={data.href}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {data.text}
    </a>
  );
};

export default ExternalLinkButton;
