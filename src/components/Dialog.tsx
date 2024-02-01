type DialogType = {
  isOpen: boolean;
  children: any;
  onClose: any;
  onSave: any;
};

const Dialog = ({ isOpen, children, onClose, onSave }: DialogType) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all m-4 max-w-lg p-6 po">
      {children}
      <div className="mt-4 flex justify-end">
        <button onClick={onSave}>등록</button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Dialog;
