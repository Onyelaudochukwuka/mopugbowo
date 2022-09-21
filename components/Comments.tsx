import  React, { FC } from 'react';
import { useGetCommentsQuery } from "../utils/services/ApiConnection";

export interface ICommentsProps {
  slug: string;
}

const Comments: FC<ICommentsProps> = ({ slug }) => {
  const { data, isLoading, refetch } = useGetCommentsQuery(slug, {
    pollingInterval: 3000
  });
  console.log(data, isLoading);
  return (
    <section>
      Comments
    </section>
  );
}
export default Comments;