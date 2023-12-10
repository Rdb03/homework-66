import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {INotesMutation} from "../../type";
import axiosApi from "../../axiosApi";
import NotesForm from "../../components/NotesForm/NotesForm";
import Spinner from "../../components/Spinner/Spinner";

const EditNote = () => {
    const {id} = useParams();
    const [note,setNote] = useState<INotesMutation | null>(null);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);

    const fetchOneNote = useCallback(async () => {
        try {
            const noteResponse = await axiosApi.get('notes/' + id + '.json');
            setNote(noteResponse.data);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        void fetchOneNote();
    }, [fetchOneNote]);

    const onSubmit  =  async (note: INotesMutation) => {
        setCreating(true);
       await axiosApi.put('notes/' + id + '.json', note);
       setCreating(false);
       alert("The changes have been successfully applied!");
    };

    const existingNote = note ?  {
        ...note,
    } : undefined;

    let formSection = <Spinner/>

    if (!loading) {
        if (note) {
            formSection = (
                <NotesForm onSubmit={onSubmit} existingNote={existingNote} isEdit isLoading={creating}/>
            );
        } else {
            formSection = <h4>Not found</h4>
        }
    }

    return (
        <div style={{padding: "20px"}}>
            {formSection}
        </div>
    );
};

export default EditNote;