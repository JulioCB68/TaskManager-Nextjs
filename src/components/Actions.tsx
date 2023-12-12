import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import { Button } from './Button'
import { CustomInput } from './CustomInput'

export function Actions() {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex w-1/2">
        {' '}
        <Button
          className="mr-12 flex items-center whitespace-nowrap rounded-md bg-white px-8 py-3 hover:bg-zinc-50"
          text="Add task"
          icon={<FiPlus className="mr-3" />}
          // onClick={}
        />
        <CustomInput placeholder="Search task" />
      </div>
      <div className="">
        <nav className="p-4">
          <ul className="flex space-x-16 ">
            <Link
              href=""
              className="border-b-2 border-blue-500 text-shadowBlue"
            >
              Timeline
            </Link>
            <Link href="">Calendar </Link>
            <Link href="">Dashboard </Link>
            <Link href="">Progress </Link>
            <Link href="">Form </Link>
            <Link href="">More </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}
