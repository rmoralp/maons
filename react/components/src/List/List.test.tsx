import {render, screen} from '@testing-library/react'

import {ListItem} from './ListItem'
import {OrderedList} from './OrderedList'
import {UnorderedList} from './UnorderedList'

describe('UnorderedList', () => {
  it('renders correctly with list item', () => {
    // Given
    const content = 'content'

    // And
    render(
      <UnorderedList>
        <ListItem>{content}</ListItem>
      </UnorderedList>
    )

    // Then
    expect(screen.getByText(content)).toBeVisible()
  })
})

describe('OrderedList', () => {
  it('renders correctly with list item', () => {
    // Given
    const content = 'content'

    // And
    render(
      <OrderedList>
        <ListItem>{content}</ListItem>
      </OrderedList>
    )

    // Then
    expect(screen.getByText(content)).toBeVisible()
  })
})
