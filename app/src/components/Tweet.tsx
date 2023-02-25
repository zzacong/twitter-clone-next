import { type RouterOutputs } from '~/lib/api';

type TweetProps = {
  tweet: NonNullable<RouterOutputs['tweet']['getAll']>[number];
};

export default function Tweet({ tweet }: TweetProps) {
  return <div>Tweet</div>;
}
