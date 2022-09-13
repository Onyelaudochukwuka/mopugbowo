import type { NextPage } from 'next'

export interface IslugProps {
  slug: string;
}

const slug: NextPage<IslugProps> = ({ slug }) =>{
  return (
    <section>
      slug
    </section>
  );
}
slug.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
}
export default slug;