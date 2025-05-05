import { DateField, NumberField, Show, SimpleShowLayout, TextField } from "react-admin"

const RecordShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="RoomId"/>
                <DateField source="date" />
                <TextField source="Time-start" />
                <TextField source="Time-end" />
                <NumberField source="Other-Cost" />
                <TextField source="Totol-Cost" />
                <TextField source="BookerID" />
            </SimpleShowLayout>
        </Show>
    )
}

export default RecordShow;