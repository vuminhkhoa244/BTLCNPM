import {  DateInput, Edit, NumberInput, SimpleForm,TextInput } from "react-admin"

const RecordEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="RoomId"/> 
                <DateInput source="date" />
                <TextInput source="Time-start" /> 
                <TextInput source="Time-end" />
                <NumberInput source="Other-Cost" />
                <TextInput source="Totol-Cost" />
                <TextInput source="BookerID" />
            </SimpleForm>
        </Edit>
    )
}

export default RecordEdit;