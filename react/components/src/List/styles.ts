const listStyles = 'mb-4'

export const unorderedListStyles = [
  listStyles,
  'pl-4',
  '[&_li]:list-disc [&_li]:pl-2',
  '[&_li::marker]:text-secondary-500 [&_li::marker]:content-["❯"]'
].join(' ')

export const orderedListStyles = [
  listStyles,
  'pl-6',
  '[&_li]:list-decimal',
  '[&_li::marker]:text-secondary-500 [&_li::marker]:font-semibold'
].join(' ')
