function ModalWrapper({ onClose, children, canClose = true }) {
  const handleOverlayClick = () => {
    if (canClose) {
      onClose();
    }
  };
  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white shadow-xl p-7 rounded-2xl animate-slide-in"
      >
        {children}
      </div>
    </div>
  );
}

export default ModalWrapper;
