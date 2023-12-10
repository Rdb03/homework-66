import React from 'react';
import {INotes} from "../../type";
import {NavLink} from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import './TheNote.css';

interface Props {
    notes: INotes;
    onDeleteNote: (id: string) => void;
    isLoadingDelete?: boolean;
}

const TheNote: React.FC<Props> = ({notes, onDeleteNote, isLoadingDelete = false}) => {

    const handleDelete = () => {
        onDeleteNote(notes.id);
    };

    return (
        <div className="note-div">
            <div>
                <p className="note-time">{notes.time}</p>
                <p className="note-txt">{notes.dish}</p>
            </div>
            <div className="note-internal-div">
                <p className="note-kcal">{notes.kcal} kcal</p>
                <div className="note-div-btn">
                    <NavLink to={'/edit-note/' + notes.id} className="note-btn">edit</NavLink>
                    <button className="note-btn" onClick={handleDelete} disabled={isLoadingDelete}>
                        {isLoadingDelete ? <ButtonSpinner/> : 'delete'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TheNote;