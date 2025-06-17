import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

type DockIconProps = {
  color: string
  icon: string
}

export default function DockIcon({ color, icon }: DockIconProps) {
  // Directly use the icon name as it's already in PascalCase
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon

  return (
    <div
      className={`h-[60px] w-[60px] ${color} flex items-center justify-center rounded-2xl shadow-lg`}
    >
      {IconComponent && <IconComponent className='h-7 w-7 text-white' />}
    </div>
  )
}
