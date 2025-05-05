import { NumberField, Show, SimpleShowLayout, TextField } from "react-admin"

const RoomShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="RoomId" />
                <NumberField source="Projector" />
                <NumberField source="Chair" />
                <NumberField source="air conditioning" />
                <NumberField source="Outlet" />
                <TextField source="status" />
            </SimpleShowLayout>
        </Show>
    )
}

export default RoomShow;