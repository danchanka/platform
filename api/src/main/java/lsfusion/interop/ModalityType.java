package lsfusion.interop;

// временно так, потом возможно будет смысл отдельно разделить на DOCKED / FLOAT, NOWAIT / WAIT, and refactor DIALOG_MODAL to separate parameter
public enum ModalityType {
    DOCKED, MODAL, DOCKED_MODAL, DIALOG_MODAL;

    public boolean isModal() {
        return this != DOCKED;
    }

    public boolean isDialog() {
        return this == DIALOG_MODAL;
    }
}
