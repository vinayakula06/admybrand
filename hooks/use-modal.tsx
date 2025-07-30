"use client"

import { create } from "zustand"

type ModalType = "contact" | "demo" | "feature-showcase"

interface ModalStore {
  type: ModalType | null
  isOpen: boolean
  openModal: (type: ModalType) => void
  closeModal: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  openModal: (type) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false, type: null }),
}))
