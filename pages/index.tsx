import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components/index.js'

const posts = [
  {title: 'Childe', excerpt: 'Childe Bio'},
  {title: 'Yae Miko', excerpt: 'Yae Miko Bio'},
  {title: 'Zhong Li', excerpt: 'Zhongli Bio'},
  {title: 'Bennet', excerpt: 'Bennet Bio'},
  {title: 'Xingqiu', excerpt: 'Xingqiu Bio'}
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      {/* <Head>
        <title>Genshin WHY NOTHING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>

            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
