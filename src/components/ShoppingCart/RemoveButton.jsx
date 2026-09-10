export default function RemoveButton({ onRemoveSelected }) {

    return (
        <div className="header-actions">
            <span className="divider" />
            <button className="remove-selected"
                onClick={onRemoveSelected}
            >
                🗑 Remove selected
            </button>
        </div>
    )
}