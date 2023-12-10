import React, {useState} from 'react';
import NotesForm from "../../components/NotesForm/NotesForm";
import {INotesMutation} from "../../type";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

const NewNote: React.FC = () => {
    const navigate = useNavigate();
    const [creating, setCreating] = useState(false);

    const createNotes = async (notes: INotesMutation) => {
        setCreating(true);
        await axiosApi.post('/notes.json', notes);
        setCreating(false);
        navigate('/');
    };

    return (
        <div style={{padding: "20px"}}>
            <NotesForm onSubmit={createNotes} isLoading={creating}/>
        </div>
    );
};

export default NewNote;