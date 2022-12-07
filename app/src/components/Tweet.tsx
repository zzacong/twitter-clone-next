import { type RouterOutputs } from '$lib/trpc';

type TweetProps = {
  tweet: NonNullable<RouterOutputs['tweet']['getAll']['data']>[number];
};

export default function Tweet({ tweet }: TweetProps) {
  return <div>Tweet</div>;
}
