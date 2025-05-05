import {Create, NumberInput, SimpleForm, TextInput} from 'react-admin'

const RoomCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="RoomId" />
                <NumberInput source="Projector" />
                <NumberInput source="Chair" />
                <NumberInput source="air conditioning" />
                <NumberInput source="Outlet" />
                <TextInput source="status" />
            </SimpleForm>
        </Create>
    )
}
export default RoomCreate