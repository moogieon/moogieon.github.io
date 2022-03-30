import Footer from 'components/Commons/Footer'
import CategoryList from 'components/Main/CategoryList'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import React from 'react'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}
const IndexPage: React.FC = function () {
  return (
    <>
      <div>
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList />
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
