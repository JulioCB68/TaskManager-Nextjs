import Link from 'next/link'
import { useRouter } from 'next/router'

import { Itens } from './itens'

export function Nav() {
  const router = useRouter()

  const Icon = ({ icon: IconComponent }: { icon: any }) => {
    if (IconComponent) {
      return <IconComponent className="mr-4 inline-block h-6 w-6" />
    }
    return null
  }

  return (
    <nav className="w-full items-center py-2 pl-6 text-gray-400">
      <div className="flex flex-col space-y-12">
        {Itens.map((item, index) => (
          <Link
            href=""
            key={index}
            className={`${
              router.pathname === item.path
                ? 'border-r-2 border-sky-500 font-semibold text-black'
                : ''
            }`}
          >
            <Icon icon={item.icon} />
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
