import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

type AppIconProps = {
  name: string
  color: string
  icon: string
}

export default function AppIcon({ name, color, icon }: AppIconProps) {
  // Directly use the icon name as it's already in PascalCase
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon

  return (
    <div className='flex flex-col items-center'>
      <div
        className={`h-[60px] w-[60px] ${color} flex items-center justify-center rounded-2xl shadow-lg`}
      >
        {IconComponent && <IconComponent className='h-7 w-7 text-white' />}
      </div>
      <span className='mt-1 max-w-[70px] truncate text-center text-xs leading-tight font-medium text-white'>
        {name}
      </span>
    </div>
  )
}
