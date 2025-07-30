export const openModal = (modalType: string) => {
  const event = new CustomEvent("openModal", {
    detail: { modalType },
  })
  window.dispatchEvent(event)
}

export const closeModal = () => {
  const event = new CustomEvent("closeModal")
  window.dispatchEvent(event)
}
