import blockContent from './schemas/blockContent';
import category from './schemas/category';
import pageInfo from './schemas/post';
import author from './schemas/author';

export const schema = {
  types: [pageInfo, author, category, blockContent],
};
