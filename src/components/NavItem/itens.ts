import { ReactNode } from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdFolderOpen, MdOutlineTaskAlt } from 'react-icons/md'
import { TbReportAnalytics } from 'react-icons/tb'
import { TfiDashboard } from 'react-icons/tfi'

interface Itens {
  label: string
  path: string
  icon?: ReactNode
}

export const Itens: Itens[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: TfiDashboard,
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: MdFolderOpen,
  },
  {
    label: 'Calendar',
    path: '/calendar',
    icon: FaRegCalendar,
  },
  {
    label: 'Tasks',
    path: '/to-do',
    icon: MdOutlineTaskAlt,
  },
  {
    label: 'Reporting',
    path: '/reporting',
    icon: TbReportAnalytics,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: IoMdSettings,
  },
]
