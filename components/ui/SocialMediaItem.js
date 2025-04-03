import Image from 'next/image';

const SocialMediaItem = ({ url, title, icon }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={`/icons/${icon}`} alt={title} width={30} height={30} />
      {title}
    </a>
  </li>
);

export default SocialMediaItem;
