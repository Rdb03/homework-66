import React, {useState} from 'react';
import {INotesMutation} from "../../type";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import './NotesForm.css';

const initialState: INotesMutation = {
    dish: '',
    time: '',
    kcal: '',
};

interface Props {
    onSubmit: (notes: INotesMutation) => void;
    existingNote?: INotesMutation;
    isEdit?: boolean;
    isLoading?: boolean;
}

const NotesForm: React.FC<Props> = ({onSubmit, existingNote = initialState, isEdit = false, isLoading = false}) => {

    const [notes, setNotes] = useState<INotesMutation>(existingNote);


    const changeNotes = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNotes((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading) return;
        onSubmit({
            ...notes,
        });
    };

    return (
        <form onSubmit={onFormSubmit} className="newNote-form">
            <h1>{isEdit ? 'Edit note' : 'Add new note'}</h1>
            <label className="label-form" htmlFor="time">Select time:</label>
            <select
                className="newNote-select"
                onChange={changeNotes}
                name="time"
                id="time"
                value={notes.time}
                required
            >
                <option value="">Select...</option>
                <option>Breakfast</option>
                <option>Snack</option>
                <option>Lunch</option>
                <option>Dinner</option>
            </select>
            <label className="label-form" htmlFor="name">Enter food:</label>
            <input
                placeholder="Enter name food"
                className="newNote-input"
                onChange={changeNotes}
                id="name"
                name="dish"
                value={notes.dish}
                required
                type="text"
            />
            <div className="newNote-kcal">
                <label className="label-form" htmlFor="kcal">Enter kcal:</label>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input
                        placeholder="Enter kcal (number)"
                        className="newNote-input kcal"
                        onChange={changeNotes}
                        name="kcal"
                        id="kcal"
                        value={notes.kcal}
                        type="number"
                        required
                    />
                    <p className="note-kcal kcal">Kcal</p>
                </div>
            </div>
            <button type="submit" className="newNote-btn" disabled={isLoading}>
                {isLoading && <ButtonSpinner/>}
                {isEdit ? 'Update' : 'Create'}
            </button>
        </form>
    );
};

export default NotesForm;