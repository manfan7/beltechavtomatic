import React from "react";
export const Modal = ({ isOpen, onClose, status, message }) => {
    if (!isOpen) return null;

    const isSuccess = status === 'success';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <div className={`modal-icon ${isSuccess ? 'success' : 'error'}`}>
                    {isSuccess ? '✓' : '✕'}
                </div>

                <h2 className="modal-title">
                    {isSuccess ? 'Сообщение отправлено!' : 'Ошибка отправки'}
                </h2>

                <p className="modal-message">{message}</p>

                <button
                    className={`modal-button ${isSuccess ? 'success' : 'error'}`}
                    onClick={onClose}
                >
                    {isSuccess ? 'Отлично!' : 'Попробовать снова'}
                </button>
            </div>
        </div>
    );
};