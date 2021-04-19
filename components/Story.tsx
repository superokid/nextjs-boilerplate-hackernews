import React from 'react';
import extractHostname from '@helpers/extractHostname';
import { StoryItem } from '@constants/type';
import { colors } from '@constants/theme';

interface Props {
  item: StoryItem;
}

const Story = ({ item }: Props) => {
  return (
    <li>
      <a className="link" href={item.url}>
        <div className="title">
          {item.title}{' '}
          {item.url && (
            <span className="subtitle">({extractHostname(item.url)})</span>
          )}
        </div>
        <div className="subtitle">{`${item.score} points by ${item.by} ${item.time}`}</div>
      </a>

      <style jsx>{`
        .subtitle {
          font-size: 12px;
          color: ${colors.gray};
        }
        li {
          margin-bottom: 0.5em;
        }
      `}</style>
    </li>
  );
};

export default Story;
