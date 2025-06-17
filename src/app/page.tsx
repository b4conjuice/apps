import AppIcon from '@/components/app-icon'
import DockIcon from '@/components/dock-icon'
import { apps, dockApps } from '@/lib/config'

export default function Home() {
  return (
    <main className='bg-cb-dark-blue flex min-h-screen flex-col items-center p-8'>
      <div className='relative flex h-full w-full max-w-[390px] flex-col gap-8'>
        {/* App Grid */}
        <div className='mx-0 grid flex-1 grid-cols-4 gap-x-4 gap-y-8'>
          {apps.map((app, index) => (
            <AppIcon
              key={index}
              name={app.name}
              color={app.color}
              icon={app.icon}
            />
          ))}
        </div>

        {/* Dock */}
        <div className='bg-cb-dusty-blue mx-0 mb-0 flex h-[85px] items-center rounded-3xl backdrop-blur-xl'>
          <div className='grid w-full grid-cols-4 gap-x-4 px-1'>
            {dockApps.map((app, index) => (
              <div key={index} className='flex justify-center'>
                <DockIcon color={app.color} icon={app.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
