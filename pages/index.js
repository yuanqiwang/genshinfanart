import { PostCard, Categories, PostWidget } from '../components/index.js'
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections'

// next js specialty: https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops

export default function Home({ postData }) {
  return (
    <div className='container mx-auto px-10 mb-8'>

      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {postData.map((post, index) => (
            <PostCard post={post.node} key={index} />))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>

            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postData = (await getPosts())|| []
  return {
    props: {
      postData
    }
  }
}