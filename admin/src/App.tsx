import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import RecordList from "./page/history/record-list";
import RoomList from "./page/room/room-list";
import RecordShow from "./page/history/record-show";
import RecordEdit from "./page/history/record-edit";
import RoomShow from "./page/room/room-show";
import RoomEdit from "./page/room/room-edit";
import RoomCreate from "./page/room/room-create";
import { HomePage } from "./HomePage";
import { authProvider } from "./authProvider";

export const App = () => 
(
    <Admin authProvider={authProvider} layout={Layout} dataProvider={dataProvider} dashboard={HomePage}>
        <Resource name="history" list={RecordList} show={RecordShow} edit={RecordEdit} />
        <Resource name="room" list={RoomList} show={RoomShow} edit={RoomEdit} create={RoomCreate} />
    </Admin>
);
