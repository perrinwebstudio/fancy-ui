import { Dropdown } from 'antd';
import {
  StyledColumnContentWrapper,
  StyledColumnHeaderWrapper,
  StyledColumnWrapper,
  StyledDropdownSpace
} from './index.styled';
import { DownOutlined } from '@ant-design/icons';
import ReviewCenterCard from './Card';
import { useMemo, useState } from 'react';

const categories = [
  {
    label: 'All',
    key: 'all'
  },
  {
    label: "Keywords",
    key: 'keywords',
  },
  {
    label: "Content",
    key: 'content',
  },
  {
    label: "Backlinking",
    key: 'backlinking',
  },
  {
    label: "Site Optimization",
    key: 'optimisations',
  },
];


const ReviewCenterColumn = ({ title, cardItems = [] }) => {
  const [category, setCategory] = useState(categories[0])

  const filteredItems = useMemo(() => {
    if (category.key === 'all') return cardItems

    return cardItems.filter(item => item.category === category.key)
  }, [cardItems, category])

  return <>
    <StyledColumnWrapper>
      <StyledColumnHeaderWrapper>
        <h4>{title}</h4>
        <Dropdown
          menu={{
            items: categories,
            onClick: ({ key }) => setCategory(categories.find(item => item.key === key)),
          }} trigger={['click']} >
          <StyledDropdownSpace>
            {category.key === 'all' ? 'Filter By Category' : category.label}
            <DownOutlined />
          </StyledDropdownSpace>
        </Dropdown>
      </StyledColumnHeaderWrapper>
      <StyledColumnContentWrapper>
        {filteredItems.map(item => (<ReviewCenterCard item={item} key={item._id} />))}
      </StyledColumnContentWrapper>
    </StyledColumnWrapper>
  </>
}

export default ReviewCenterColumn