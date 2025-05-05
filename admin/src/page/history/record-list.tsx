import { Datagrid, List, TextField,EditButton, TextInput , DateField, NumberField, DateInput , } from "react-admin"

const RecordList = () => {
    const postFilters = [
        <TextInput source="q" label="search" alwaysOn/>,
        <DateInput source="date"/>
    ];
    return (
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="RoomId"/>
            <DateField source="date" />
            <TextField source="Time-start" />
            <TextField source="Time-end" />
            <NumberField source="Other-Cost" />
            <TextField source="Totol-Cost" />
            <TextField source="BookerID" />
            <EditButton/>
        </Datagrid>
    </List>
    )
}

export default RecordList;