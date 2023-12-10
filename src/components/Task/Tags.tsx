import { statusBackgrounds, statusColors, statusLabels } from './utils/helpers'

interface TagsProps {
  status?: StatusType
  id?: boolean
  labelId?: string
}

export function Tags({ status, id, labelId }: TagsProps) {
  const label = status ? statusLabels[status] : ''
  const backgroundClass = status ? statusBackgrounds[status] : ''
  const colorClass = status ? statusColors[status] : ''

  return (
    <>
      {status && (
        <p
          className={`mr-4 cursor-pointer rounded-lg px-3 py-1 text-xs font-bold ${backgroundClass} ${colorClass} `}
        >
          {label}
        </p>
      )}

      {id && (
        <p className="mr-4 cursor-pointer rounded-lg bg-gray-200 px-3 py-1 text-xs font-bold text-darkGray">
          {labelId}
        </p>
      )}
    </>
  )
}
