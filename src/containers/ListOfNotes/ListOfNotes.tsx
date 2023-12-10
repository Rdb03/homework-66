import {useCallback, useEffect, useState} from 'react';
import TheNote from "../../components/TheNote/TheNote";
import {NavLink} from "react-router-dom";
import {INotes, INotesMutation} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import './ListOfNotes.css';

const ListOfNotes = () => {

    const [notes, setNotes] = useState<INotes[]>([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const fetchData  = useCallback(async() => {
        try {
            setLoading(true);
            const notesResponse = await axiosApi.get<INotesMutation>('/notes.json');

            if (notesResponse.data) {
                const notesArray = Object.entries(notesResponse.data).map(([id, note]) => ({
                    id,
                    ...note
                }));
                setNotes(notesArray);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    },[]);

    useEffect(() => {
        fetchData().catch(error => console.error(error));
    }, [fetchData]);

    const deleteNote = async (id: string) => {
        if (window.confirm('Do you really want to delete?')) {
            setDeletingId(id);
            await axiosApi.delete('/notes/' + id + '.json');
            setNotes(notes.filter(note => note.id !== id));
            setDeletingId(null);
        }
    };

    const totalCalories = notes.reduce((sum, note) => sum + parseInt(String(note.kcal)), 0);

    let formSection = <Spinner/>

    if (!loading) {
        if (notes) {
            formSection = (
                <div>
                    {
                        notes.map((notes, index) => (
                            <TheNote onDeleteNote={deleteNote} key={index} notes={notes} isLoadingDelete={deletingId === notes.id}/>
                        ))}
                </div>
            );
        } else {
            formSection = <h4>Not found</h4>
        }
    }

    return (
        <div className="list-of-notes-div">
            <div className="list-of-notes-header">
                <h2 className="calories-title">
                    Total calories: <span className="note-kcal">{totalCalories} kcal</span>
                </h2>
                <NavLink className="add-btn" to="/new-note">Add new meal</NavLink>
            </div>
            {formSection}
        </div>
    );
};

export default ListOfNotes;