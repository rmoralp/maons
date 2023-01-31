import React from 'react'

import {ComponentMeta} from '@storybook/react'

import {Code} from './Code'
import CodeDocs from './Code.mdx'
import {CodeContainer} from './CodeContainer'

export default {
  title: 'Data display/Code',
  component: Code,
  parameters: {
    docs: {
      page: CodeDocs
    }
  }
} as ComponentMeta<typeof Code>

export const Default = () => (
  <div className="bg-white p-4 py-8">
    <Code>{'var foo = "bar";'}</Code>

    <CodeContainer className="mt-8">
      <Code>{'var foo = "bar";'}</Code>
    </CodeContainer>
  </div>
)
