import { create } from "zustand"

import type { ChannelType, Server } from "@prisma/client"

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"

interface ModalData {
  server?: Server
  channelType?: ChannelType
}

interface ModalStore {
  type: ModalType | null
  data: ModalData
  isOpen: boolean
  onOpen: (type: ModalType, data?: ModalData) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type: ModalType, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}))
