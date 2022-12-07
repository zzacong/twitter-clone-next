import { type NextApiHandler } from 'next';
import { directus } from '$server/db/directus';

const handler: NextApiHandler = async (req, res) => {
  const data = await directus.items('comments').readByQuery({
    limit: -1,
  });

  res.status(200).json(data);
};

export default handler;
