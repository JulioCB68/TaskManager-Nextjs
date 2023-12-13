import { FiArrowLeft } from 'react-icons/fi'

import { Button } from './Button'
import { CustomInput } from './CustomInput'

interface IModalProps {
  // isEpisodeModal?: boolean;
  // data?: CharacterI;
  // dataEp?: EpisodeI;
  // characters?: CharacterI[];
  handleModal: (arg: boolean) => void
}

export function Modal({ handleModal }: IModalProps) {
  return (
    <div
      className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-60"
      // onClick={() => handleModal(false)}
    >
      <div className="rounded-md bg-white p-8 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={() => handleModal(false)}>
            <FiArrowLeft size={24} />
          </button>
        </div>
        <CustomInput label="Name" type="text" placeholder="Task name" />
        <CustomInput
          label="Description"
          type="text"
          placeholder="Task description"
        />
        <div className="flex w-full space-x-12 pt-10">
          <Button
            text="Cancel"
            className="flex w-full items-center justify-center rounded-lg bg-red-500 px-12 py-4 text-white hover:bg-red-900"
            onClick={() => handleModal(false)}
          />
          <Button
            text="Create"
            className="flex w-full items-center justify-center rounded-lg bg-greenGT px-12 py-4 text-white hover:bg-emerald-700"
          />
        </div>
      </div>
    </div>
  )
}
