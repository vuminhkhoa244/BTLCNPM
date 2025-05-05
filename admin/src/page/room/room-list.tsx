import { Datagrid, List, TextField, TextInput } from "react-admin"

const RoomList = () => {
    const RoomFilter = [
        <TextInput source="RoomId"/>,
        <TextInput source="status"/>
    ]
    return (
        <List filters={RoomFilter}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="RoomId" />
                <TextField source="Projector" />
                <TextField source="Chair" />
                <TextField source="air conditioning" />
                <TextField source="Outlet" />
                <TextField source="status" />
            </Datagrid>
        </List>
    )
}

export default RoomList;