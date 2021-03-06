import React from 'react'
import CategoryItem from './CategoryItem'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

const CategoryList: React.FC<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <>
      <div className="pt-20 pb-10 md:py-10 ">
        <div className="mx-auto container lg:px-[10%]">
          <div className="relative w-full block">
            <div className="relative w-full block overflow-hidden overflow-x-auto">
              <div className="w-full block py-2  relative whitespace-nowrap ">
                {Object.entries(categoryList).map(([name, count]) => (
                  <CategoryItem
                    key={name}
                    to={`/?category=${name}`}
                    active={name === selectedCategory}
                  >
                    {name}({count})
                  </CategoryItem>
                ))}
              </div>
            </div>
            <hr className="w-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryList
