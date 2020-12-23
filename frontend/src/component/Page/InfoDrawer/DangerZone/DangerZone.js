import { React, useState } from 'react';
import { Button, Popconfirm, notification } from 'antd';
import { DeleteOutlined, FolderOpenOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const DangerZone = (props) => {
    const [isActive, setIsActive] = useState(props.active)

    const handlePatchActive = (value) => {
        async function patchEntry(value) {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + 'songbook/' + props.id,
                method: 'PATCH',
                data: { 'active': value }
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const patchResult = await response.data;
            return patchResult;
        }
        // fetch Entries
        patchEntry(value)
            .then(() => {
                setIsActive(value);
                notification.error({ description: `Song #${props.id} has been ${isActive ? "a" : "una"}rchived.`, icon: <FolderOpenOutlined style={{ color: '#000' }} />, });
            })
            .catch(error => {
                console.log("error", error.message);
            });
    }

    const handleDeleteSong = () => {
        async function deleteEntry() {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + 'songbook/' + props.id,
                method: 'DELETE'
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const patchResult = await response.data;
            return patchResult;
        }
        // fetch Entries
        deleteEntry()
            .then(() => {
                notification.error({ description: `Song #${props.id} has been deleted.`, icon: <DeleteOutlined style={{ color: '#6E0F1C' }} />, });
            })
            .catch(error => {
                console.log("error", error.message);
            });
    }

    return (
        <>
            <Button
                style={{ marginBottom: "10px" }}
                icon={<FolderOpenOutlined />}
                onClick={() => handlePatchActive(!isActive)}
                block
                danger={isActive}
            >
                {isActive ? "A" : "Una"}rchive this song
            </Button>
            <Popconfirm
                title="Are you sure？"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={handleDeleteSong}
            >
                <Button
                    block
                    icon={<DeleteOutlined />}
                    type="primary" danger
                >
                    Delete this song
                </Button>
            </Popconfirm>
        </>
    )
}

export default DangerZone;
