export const isNumericSize = size => !/[^\d]+/.exec(size)

export const getSize = size => (isNumericSize ? `${size}px` : size)
