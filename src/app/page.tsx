import AppIcon from '@/components/app-icon'
import DockIcon from '@/components/dock-icon'

export default function Home() {
  const apps = [
    {
      name: 'Calendar',
      color: 'bg-gradient-to-b from-red-400 to-red-600',
      icon: 'Calendar',
    },
    {
      name: 'Photos',
      color: 'bg-gradient-to-b from-[#5ee7df] to-[#b490ca]',
      icon: 'Image',
    },
    {
      name: 'Camera',
      color: 'bg-gradient-to-b from-gray-700 to-gray-900',
      icon: 'Camera',
    },
    {
      name: 'Mail',
      color: 'bg-gradient-to-b from-blue-400 to-blue-600',
      icon: 'Mail',
    },
    {
      name: 'Clock',
      color: 'bg-gradient-to-b from-gray-200 to-gray-400',
      icon: 'Clock',
    },
    {
      name: 'Maps',
      color: 'bg-gradient-to-b from-green-300 to-green-500',
      icon: 'Map',
    },
    {
      name: 'Weather',
      color: 'bg-gradient-to-b from-blue-300 to-blue-500',
      icon: 'CloudSun',
    },
    {
      name: 'Notes',
      color: 'bg-gradient-to-b from-yellow-100 to-yellow-300',
      icon: 'FileText',
    },
    {
      name: 'Reminders',
      color: 'bg-gradient-to-b from-orange-300 to-orange-500',
      icon: 'ListChecks',
    },
    {
      name: 'Stocks',
      color: 'bg-gradient-to-b from-black to-gray-800',
      icon: 'TrendingUp',
    },
    {
      name: 'Books',
      color: 'bg-gradient-to-b from-orange-400 to-orange-600',
      icon: 'BookOpen',
    },
    {
      name: 'App Store',
      color: 'bg-gradient-to-b from-blue-400 to-blue-600',
      icon: 'Store',
    },
    {
      name: 'Health',
      color: 'bg-gradient-to-b from-red-400 to-red-600',
      icon: 'HeartPulse',
    },
    {
      name: 'Wallet',
      color: 'bg-gradient-to-b from-black to-gray-800',
      icon: 'Wallet',
    },
    {
      name: 'Settings',
      color: 'bg-gradient-to-b from-gray-400 to-gray-600',
      icon: 'Settings',
    },
    {
      name: 'Calculator',
      color: 'bg-gradient-to-b from-gray-700 to-gray-900',
      icon: 'Calculator',
    },
    {
      name: 'Podcasts',
      color: 'bg-gradient-to-b from-purple-400 to-purple-600',
      icon: 'Podcast',
    },
    {
      name: 'Music',
      color: 'bg-gradient-to-b from-pink-400 to-pink-600',
      icon: 'Music',
    },
    {
      name: 'TV',
      color: 'bg-gradient-to-b from-blue-800 to-blue-900',
      icon: 'Tv',
    },
    {
      name: 'News',
      color: 'bg-gradient-to-b from-red-500 to-red-700',
      icon: 'Newspaper',
    },
    {
      name: 'Contacts',
      color: 'bg-gradient-to-b from-gray-500 to-gray-700',
      icon: 'Users',
    },
    {
      name: 'Files',
      color: 'bg-gradient-to-b from-blue-300 to-blue-500',
      icon: 'Folder',
    },
    {
      name: 'Compass',
      color: 'bg-gradient-to-b from-red-300 to-red-500',
      icon: 'Compass',
    },
    {
      name: 'Memos',
      color: 'bg-gradient-to-b from-gray-600 to-gray-800',
      icon: 'Mic',
    },
  ]

  const dockApps = [
    {
      name: 'Phone',
      color: 'bg-gradient-to-b from-green-400 to-green-600',
      icon: 'Phone',
    },
    {
      name: 'Safari',
      color: 'bg-gradient-to-b from-blue-400 to-blue-600',
      icon: 'Globe',
    },
    {
      name: 'Messages',
      color: 'bg-gradient-to-b from-green-400 to-green-600',
      icon: 'MessageCircle',
    },
    {
      name: 'Spotify',
      color: 'bg-gradient-to-b from-green-500 to-green-700',
      icon: 'Music',
    },
  ]

  return (
    <main className='flex min-h-screen flex-col items-center bg-black p-8'>
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
        <div className='mx-0 mb-0 flex h-[85px] items-center rounded-3xl bg-white/20 backdrop-blur-xl'>
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
