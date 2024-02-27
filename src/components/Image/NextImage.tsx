import Image from 'next/image'

interface NextImageProps {
  src: string
  alt: string
  w: any
  h: any
  fill?: boolean
  placeholder?: any
  priority?: boolean
  style?: any
}

function NextImage({
  src,
  alt = 'image',
  w = '100%',
  h = '100%',
  fill = false,
  placeholder = 'blur',
  priority = true,
  style = {},
}: NextImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      fill={fill}
      style={{ objectFit: 'cover', ...style }}
      placeholder={placeholder}
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      priority={priority}
    />
  )
}

export default NextImage
