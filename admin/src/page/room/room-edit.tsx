import { Edit, NumberInput, SimpleForm,TextInput } from "react-admin"

const RoomEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="RoomId" />
                <NumberInput source="Projector" />
                <NumberInput source="Chair" />
                <NumberInput source="air conditioning" />
                <NumberInput source="Outlet" />
                <TextInput source="status" />
            </SimpleForm>
        </Edit>
    )
}

export default RoomEdit;